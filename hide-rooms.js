  <script>
      // Override oleh Muse: kosongkan section kartu ruangan pameran (ROOM I/II/III).
      // Target utama: <section id="ruang-pameran">, diverifikasi memuat ketiga judul ruangan.
      // Cadangan: panjat DOM dari judul pertama; blok harus memuat ketiga judul + tepat 3
      // tombol paviliun dan tidak memuat footer. Teks tombol diterima dua versi: build lama
      // "Kunjungi Paviliun" dan build hasil refactor "Live Preview" (keduanya dihitung).
      // Teks dibandingkan tanpa memedulikan huruf besar/kecil dan whitespace
      // (tombol tampil uppercase via CSS).
      // Optimasi (2026-10-08): blok yang sudah disembunyikan di-cache sehingga panggilan
      // observer berikutnya cukup memeriksa referensi itu (tanpa memindai ulang DOM),
      // dan badai mutasi digabung maksimal satu pemindaian per frame.
      (function () {
        var TITLES = ['sistem pendukung keputusan', 'scraft product web refactor', 'pesona kaliwungu'];
        function norm(s) { return (s || '').toLowerCase().replace(/\s+/g, ''); }
        function hasAll(el) {
          var txt = norm(el.textContent);
          return TITLES.every(function (t) { return txt.indexOf(norm(t)) !== -1; });
        }
        function isRoomsBlock(el) {
          if (el.hasAttribute && el.hasAttribute('data-muse-rooms')) return false;
          if (!hasAll(el)) return false;
          var txtNorm = norm(el.textContent);
          var btns = (txtNorm.split('kunjungipaviliun').length - 1) +
                     (txtNorm.split('livepreview').length - 1);
          return btns === 3 && !el.querySelector('footer');
        }
        function findAnchor() {
          var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          var n;
          while ((n = w.nextNode())) {
            if (n.nodeValue && norm(n.nodeValue).indexOf(norm(TITLES[0])) !== -1) {
              if (n.parentElement && n.parentElement.closest('[data-muse-rooms]')) continue;
              return n.parentElement;
            }
          }
          return null;
        }
        function findBlock() {
          var byId = document.getElementById('ruang-pameran');
          if (byId && !byId.hasAttribute('data-muse-rooms') && hasAll(byId)) return byId;
          var anchor = findAnchor();
          if (!anchor) return null;
          var sec = anchor.closest('section');
          if (sec && isRoomsBlock(sec)) return sec;
          var el = anchor;
          while (el && el !== document.body) {
            if (isRoomsBlock(el)) return el;
            el = el.parentElement;
          }
          return null;
        }
        var cached = null;
        function hide() {
          // Jalan pintas murah: blok yang sama masih tersembunyi & id sudah lepas -> selesai.
          if (cached && document.contains(cached) && cached.style.display === 'none' && cached.id !== 'ruang-pameran') return;
          var b = findBlock();
          if (b) {
            b.style.setProperty('display', 'none', 'important');
            // Lepas id-nya: id "ruang-pameran" kini milik section dinamis dari panel admin.
            if (b.id === 'ruang-pameran') b.removeAttribute('id');
            cached = b;
          }
        }
        var scheduled = false;
        function onMutate() {
          if (scheduled) return;
          scheduled = true;
          requestAnimationFrame(function () { scheduled = false; hide(); });
        }
        var obs = new MutationObserver(onMutate);
        function start() {
          hide();
          if (document.body) obs.observe(document.body, { childList: true, subtree: true });
          setTimeout(function () { obs.disconnect(); }, 15000);
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
        else start();
      })();
    </script>
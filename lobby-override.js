      // Override oleh Muse (2) v2: navigasi tanpa mengubah URL + Ruang Pameran dinamis
      // model daftar vertikal akordeon (hanya nama web; hover/klik membuka detail ke bawah).
      (function () {
        // --- 0. Alamat harus selalu bersih: buang hash apa pun yang terlanjur ada di URL.
        function bersihkanUrl() {
          if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }
        bersihkanUrl();
        // --- 1. Klik menu/anchor: scroll halus TANPA mengubah alamat (hash) di URL.
        document.addEventListener('click', function (e) {
          var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
          if (!a) return;
          var hash = a.getAttribute('href');
          if (!hash || hash.length < 2) return;
          var id = hash.slice(1);
          var cands = document.querySelectorAll('[id="' + id + '"]');
          var target = null;
          for (var i = 0; i < cands.length; i++) {
            if (cands[i].getClientRects().length) { target = cands[i]; break; }
          }
          if (!target) { bersihkanUrl(); return; }
          e.preventDefault();
          bersihkanUrl();
          var y = target.getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
        }, true);

        // --- 2. Ruang Pameran dinamis: isi dari /api/pameran (dikelola via /admin).
        // Palet TillRea: #502D55 (plum tua), #935073 (mauve), #F6DBC0 (peach cream), #F8F4E9 (ivory).
        var GLASS = 'background:linear-gradient(180deg,rgba(255,255,255,.66) 0%,rgba(246,219,192,.34) 48%,rgba(147,80,115,.16) 52%,rgba(147,80,115,.34) 100%);-webkit-backdrop-filter:blur(18px) saturate(170%);backdrop-filter:blur(18px) saturate(170%);border:1px solid rgba(255,255,255,.95);box-shadow:0 14px 32px rgba(80,45,85,.16),inset 0 1px 1px #fff,inset 0 12px 20px rgba(255,255,255,.55),inset 0 -10px 18px rgba(80,45,85,.12);color:#502D55';
        var css = [
          '.mp-section{position:relative;padding:7rem 1.5rem;max-width:80rem;margin:0 auto}',
          '.mp-kicker{display:flex;align-items:center;gap:.5rem;font-family:"Space Mono",monospace;font-size:.75rem;letter-spacing:.3em;text-transform:uppercase;color:#935073;margin-bottom:.75rem}',
          '.mp-title{font-family:"Fraunces",Georgia,serif;font-size:clamp(1.9rem,4vw,3rem);color:#502D55;letter-spacing:.02em;margin:0}',
          '.mp-sub{max-width:30rem;font-size:.9rem;color:#6d5975;font-weight:300;line-height:1.7;margin-top:1rem}',
          '.mp-group{font-family:"Fraunces",Georgia,serif;font-size:1.45rem;color:#502D55;margin:2.8rem 0 0;display:flex;align-items:center;gap:.6rem}',
          '.mp-list{display:flex;flex-direction:column;gap:.9rem;margin-top:1.4rem}',
          '.mp-item{border-radius:1.3rem;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,.68),rgba(246,219,192,.36));-webkit-backdrop-filter:blur(18px) saturate(160%);backdrop-filter:blur(18px) saturate(160%);border:1px solid rgba(255,255,255,.95);box-shadow:0 12px 30px rgba(80,45,85,.10),inset 0 1px 0 #fff;transition:box-shadow .35s ease,border-color .35s ease}',
          '.mp-item:hover,.mp-item.open{border-color:rgba(147,80,115,.5);box-shadow:0 20px 44px rgba(80,45,85,.17),inset 0 1px 0 #fff}',
          '.mp-head{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.15rem 1.5rem;cursor:pointer;user-select:none;-webkit-user-select:none}',
          '.mp-head:focus-visible{outline:2px solid #935073;outline-offset:-2px;border-radius:1.3rem}',
          '.mp-name{font-family:"Fraunces",Georgia,serif;font-size:1.35rem;font-weight:600;color:#502D55;line-height:1.25}',
          '.mp-chevron{flex:none;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:999px;font-size:.85rem;color:#935073;background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 #fff;transition:transform .45s ease}',
          '.mp-body{max-height:0;opacity:0;overflow:hidden;padding:0 1.5rem;transition:max-height .55s ease,opacity .4s ease,padding .45s ease}',
          '.mp-item.open .mp-body{max-height:24rem;opacity:1;padding-bottom:1.45rem}',
          '.mp-item.open .mp-chevron{transform:rotate(180deg)}',
          '@media (hover:hover) and (pointer:fine){.mp-item:hover .mp-body{max-height:24rem;opacity:1;padding-bottom:1.45rem}.mp-item:hover .mp-chevron{transform:rotate(180deg)}}',
          '.mp-label{font-family:"Space Mono",monospace;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#935073;margin-bottom:.5rem}',
          '.mp-desc{font-size:.92rem;color:#6d5975;font-weight:300;line-height:1.7;margin:0;max-width:48rem}',
          '.mp-url{font-family:"Space Mono",monospace;font-size:.72rem;color:#935073;margin-top:.7rem;word-break:break-all}',
          '.mp-btn{margin-top:1.05rem;display:inline-flex;align-items:center;gap:.45rem;font-weight:700;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:.72rem 1.3rem;border-radius:999px;text-decoration:none;transition:transform .25s ease,box-shadow .25s ease;' + GLASS + '}',
          '.mp-btn:hover{transform:translateY(-1px)}',
          '.mp-empty{margin-top:2.5rem;border:1px dashed rgba(147,80,115,.35);border-radius:1.3rem;padding:2rem;text-align:center;color:#8a6f92;font-size:.875rem;background:rgba(255,255,255,.4)}',
          '.mp-berkas-btn{position:fixed;right:1rem;bottom:1rem;z-index:60;display:inline-flex;align-items:center;gap:.4rem;font-family:"Space Mono",monospace;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:.62rem 1rem;border-radius:999px;text-decoration:none;' + GLASS + '}',
          '.mp-berkas-btn:hover{transform:translateY(-1px)}'
        ].join('');
        var style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        // --- 3. Tombol kecil akses berkas (PIN) di pojok kanan bawah.
        var berkasBtn = document.createElement('a');
        berkasBtn.href = '/berkas';
        berkasBtn.className = 'mp-berkas-btn';
        berkasBtn.textContent = '\uD83D\uDCC1 Berkas';
        (document.body || document.documentElement).appendChild(berkasBtn);

        function esc(s) {
          return String(s || '').replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
          });
        }
        function buildSection(items) {
          var sec = document.createElement('section');
          sec.id = 'ruang-pameran';
          sec.setAttribute('data-muse-rooms', '1');
          sec.className = 'mp-section';
          function itemOf(it) {
            return '<article class="mp-item">' +
              '<div class="mp-head" role="button" tabindex="0" aria-expanded="false">' +
                '<span class="mp-name">' + esc(it.title) + '</span>' +
                '<span class="mp-chevron" aria-hidden="true">&#9662;</span>' +
              '</div>' +
              '<div class="mp-body">' +
                (it.label ? '<div class="mp-label">' + esc(it.label) + '</div>' : '') +
                (it.description ? '<p class="mp-desc">' + esc(it.description) + '</p>' : '') +
                (it.url ? '<div class="mp-url">' + esc(it.url) + '</div>' : '') +
                '<a class="mp-btn" href="' + esc(it.url) + '" target="_blank" rel="noopener noreferrer">Live Preview &#8599;</a>' +
              '</div>' +
              '</article>';
          }
          function listOf(list) { return '<div class="mp-list">' + list.map(itemOf).join('') + '</div>'; }
          var cards;
          if (items && items.length) {
            var pribadi = items.filter(function (it) { return it.section !== 'tamu'; });
            var tamu = items.filter(function (it) { return it.section === 'tamu'; });
            cards = '';
            if (pribadi.length) cards += '<h3 class="mp-group"><span>&#11088;</span><span>Koleksi Pribadi</span></h3>' + listOf(pribadi);
            if (tamu.length) cards += '<h3 class="mp-group"><span>&#127760;</span><span>Pameran Tamu</span></h3>' + listOf(tamu);
            if (!cards) cards = listOf(items);
          } else {
            cards = '<div class="mp-empty">Belum ada karya yang dipamerkan saat ini.</div>';
          }
          sec.innerHTML =
            '<div class="mp-kicker"><span>&#9670;</span><span>Koleksi Terpilih &bull; Gallery Rooms</span></div>' +
            '<h2 class="mp-title">Ruang Pameran Utama</h2>' +
            '<p class="mp-sub">Arahkan kursor atau klik nama web untuk melihat detailnya, lalu buka paviliun interaktifnya langsung.</p>' +
            cards;
          // Klik / keyboard pada kepala item: buka-tutup akordeon (untuk layar sentuh & aksesibilitas).
          var heads = sec.querySelectorAll('.mp-head');
          Array.prototype.forEach.call(heads, function (head) {
            function toggle() {
              var item = head.parentNode;
              var open = item.classList.toggle('open');
              head.setAttribute('aria-expanded', open ? 'true' : 'false');
            }
            head.addEventListener('click', toggle);
            head.addEventListener('keydown', function (e) {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
            });
          });
          return sec;
        }
        var done = false;
        function place() {
          if (done) return;
          var footer = document.getElementById('curator-desk') || document.querySelector('footer');
          if (!footer || !footer.parentNode) return;
          done = true;
          fetch('/api/pameran', { cache: 'no-store' })
            .then(function (r) { return r.json(); })
            .then(function (d) { footer.parentNode.insertBefore(buildSection(d.items || []), footer); })
            .catch(function () { footer.parentNode.insertBefore(buildSection([]), footer); });
        }
        var obs2 = new MutationObserver(place);
        function start2() {
          place();
          if (document.body) obs2.observe(document.body, { childList: true, subtree: true });
          setTimeout(function () { obs2.disconnect(); }, 20000);
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start2);
        else start2();
      })();

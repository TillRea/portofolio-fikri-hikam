#!/usr/bin/env python3
"""Transplantasikan blok override inline (script/style tanpa src, bukan ld+json)
dari index.html live ke index.html hasil build baru, tepat sebelum </body>.
Pemakaian: transplant_overrides.py <live_index> <dist_index> <output>"""
import re
import sys

live = open(sys.argv[1], encoding="utf-8").read()
dist = open(sys.argv[2], encoding="utf-8").read()

blocks = []
for m in re.finditer(r"<script\b([^>]*)>(.*?)</script>", live, re.S | re.I):
    attrs, body = m.group(1), m.group(2)
    if "src=" in attrs or "ld+json" in attrs:
        continue
    if body.strip():
        blocks.append(m.group(0))
for m in re.finditer(r"<style\b[^>]*>.*?</style>", live, re.S | re.I):
    # Lewati blok CSS raksasa: itu CSS Tailwind yang di-inline oleh prerender.mjs
    # (build baru sudah membawa salinannya sendiri di <head>). Blok override
    # yang sah ukurannya kecil.
    if len(m.group(0)) > 5000:
        continue
    blocks.append(m.group(0))

if not blocks:
    sys.exit("Tidak ada blok override ditemukan di index live — batal.")

out = dist.replace("</body>", "\n".join(blocks) + "\n</body>", 1)
open(sys.argv[3], "w", encoding="utf-8").write(out)
print(f"Transplant selesai: {len(blocks)} blok override dipindahkan.")

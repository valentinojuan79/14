# SIAGA! Kebakaran Hutan (padahal ultah Gea) 🔥🐱

Website ucapan ulang tahun yang dibungkus kayak surat peringatan bahaya
kebakaran hutan resmi (tapi bohongan). Ada mini-game bantuin kucing damkar
madamin hutan, dan pesan ulang tahun baru kebuka kalau hutannya selamat.
Tombol "lewati" di game-nya sengaja gak beneran skip — dia cuma kabur-kaburan
dan ngeledekin, sesuai request 😌

Web-nya juga dikunci berdasarkan tanggal (buat trik QR code "buka besok
ya"), dan ada satu halaman rahasia yang gak dilink dari mana pun.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Kunci tanggal (buat trik QR code)

Situs ini otomatis nge-lock sampai tanggal tertentu, dipantau pakai zona
waktu WIB (Asia/Jakarta) biar gak kacau walau HP-nya di-setting zona lain.

- **Ganti tanggalnya**: edit `UNLOCK_YEAR`, `UNLOCK_MONTH` (index 0 =
  Januari, jadi September = 8), dan `UNLOCK_DAY` di
  `components/DateGate.tsx`. Sekarang di-set ke **14 September 2026**.
- **Sebelum tanggalnya**: pengunjung cuma liat halaman "udah dibilangin
  buka besok ya??" (`components/LockedTeaser.tsx`), bukan situs aslinya.
- **Pas/lewat tanggalnya**: situs asli otomatis kebuka, gak perlu
  refresh manual atau apa-apa.
- **Testing tanpa nunggu tanggal beneran**: buka
  `?preview=locked` untuk maksa liat halaman terkunci, atau
  `?preview=unlocked` untuk maksa liat situs aslinya. Contoh:
  `http://localhost:3000/?preview=locked`. Ini cuma buat testing,
  gak akan kepake sama pengunjung biasa yang gak tau soal query param ini.

Alur yang kamu rencanain (kirim QR tanggal 13, chat "buka besok ya qr
nya") udah otomatis kepegang sama fitur ini — gak perlu di-deploy ulang
pas tengah malem.

## Halaman rahasia (cuma kamu yang tau linknya)

Ada halaman terpisah di `/hidden-grove` (`app/hidden-grove/page.tsx` +
`components/HiddenMessage.tsx`) isinya ucapan personal kamu, bukan
lelucon. Halaman ini:

- **Gak dilink dari mana pun** di situs utama — satu-satunya cara
  ke sana ya lewat URL persis.
- **Di-noindex** biar gak nyasar ke hasil pencarian Google.
- Isinya bisa kamu edit langsung di `components/HiddenMessage.tsx`.

Kalau mau lebih aman lagi (biar makin gak ketebak), tinggal rename folder
`app/hidden-grove` ke nama lain, terus share URL-nya cuma ke diri sendiri
(misal simpen di notes, jangan di-post di mana-mana).

## Personalisasi

1. **Pesan ulang tahun & tanda tangan** — edit `MESSAGE` dan `SIGNATURE` di
   `components/MessageReveal.tsx`.
2. **Pesan personal di halaman rahasia** — edit isi paragraf di
   `components/HiddenMessage.tsx`.
3. **Foto** — taruh foto di `public/gea-photo.jpg`. Kalau filenya gak ada,
   kotak fotonya otomatis ilang, jadi tetep aman dijalankan tanpa foto.
4. **Judul tab & deskripsi** — di `app/layout.tsx` (`metadata`).
5. **Tingkat kesulitan & fitur game** — di `components/ForestFireGame.tsx`:
   - `GAME_SECONDS` = lama waktu main, `TREE_COUNT` = jumlah pohon
   - `IGNITE_START_MS` / `IGNITE_MIN_MS` = seberapa sering pohon kebakar
   - `MAX_CHARRED` = maksimal pohon abis sebelum kalah
   - `GOLDEN_CHANCE` = peluang muncul pohon emas 🌟 (bonus +3 poin)
   - `COMBO_FOR_BONUS` = padamin berturut-turut segini baru dapet bonus
     kombo (+2 poin)
   - `SPREAD_THRESHOLD` / `SPREAD_TICK_CHANCE` / `SPREAD_RADIUS` =
     seberapa gampang api nular ke pohon tetangga kalau dicuekin
6. **Kalimat troll di tombol skip** — array `SKIP_TAUNTS` di
   `components/ForestFireGame.tsx`, tinggal tambah/ganti kalimatnya.
7. **Warna & font** — token warna di `tailwind.config.ts`
   (`caution`, `ember`, `pine`, `paper`, `ink`), font di `app/layout.tsx`.

## Deploy

Push ke GitHub terus import di [vercel.com](https://vercel.com) (gratis),
atau `npm run build && npm run start` di server sendiri.

## Struktur

```
app/
  layout.tsx           -> font + metadata
  page.tsx              -> entry point, dibungkus DateGate
  globals.css            -> style global, tekstur hazard stripe
  hidden-grove/page.tsx   -> halaman rahasia (noindex, gak dilink)
components/
  DateGate.tsx            -> ngunci situs sampai tanggal tertentu
  LockedTeaser.tsx          -> halaman "buka besok ya" pas masih dikunci
  BirthdayExperience.tsx     -> penggabung semua section + state game
  Hero.tsx                    -> poster peringatan palsu di awal
  FloatingDecor.tsx             -> asap/api (atau daun, di halaman rahasia)
                                   yang melayang di background
  ForestFireGame.tsx              -> mini-game bantuin kucing madamin hutan
  MessageReveal.tsx                -> pesan ulang tahun, kebuka setelah menang
  HiddenMessage.tsx                 -> isi halaman rahasia
  Footer.tsx
```

# Demystifying GSoC 2027

Seven-slide Reveal.js presentation for GDG Cloud Nagpur. Ubuntu fonts, avatar images, Reveal.js, and the GitHub QR library are included locally. No install or build is required.

## Preview

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Use arrow keys or Space to advance, `S` for speaker notes, `F` for fullscreen, and `Esc` for the slide overview. Serve over HTTP; opening the HTML directly does not support its JavaScript modules.

## GitHub Pages

In repository **Settings > Pages > Build and deployment**, select **GitHub Actions** once. Push to `main`; the included workflow publishes the static files with no build step.

Expected URL: <https://shekharrajak.github.io/gdg-devfest-2026/>. The site also works with branch-based Pages hosting from `main` / root.

For a PDF, open `?print-pdf`, then print in Chrome with landscape orientation, no margins, and background graphics enabled. Each slide includes all its revealed content in the PDF.

QR codes on the opening and closing slides point only to <https://github.com/Shekharrajak>. The 2027 calendar is explicitly provisional; verify dates and eligibility against the official program before presenting.

## Resources for the video description

- [GSoC](https://summerofcode.withgoogle.com/)
- [Eligibility and FAQ](https://developers.google.com/open-source/gsoc/faq)
- [Official timeline](https://developers.google.com/open-source/gsoc/timeline)
- [Contributor guide](https://google.github.io/gsocguides/student/)
- [Proposal guide](https://google.github.io/gsocguides/student/writing-a-proposal)
- [GitHub](https://github.com/Shekharrajak)
- [LinkedIn](https://www.linkedin.com/in/shekharrajak/)

Reveal.js, QRCode.js, and Ubuntu retain their licenses alongside the vendored files. Original avatars are reused from the DataFusion Comet talk; additional poses preserve the same character.

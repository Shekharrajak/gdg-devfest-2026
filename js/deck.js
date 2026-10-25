import Reveal from '../vendor/reveal.js/dist/reveal.mjs';
import RevealNotes from '../vendor/reveal.js/plugin/notes/notes.mjs';

const github = 'https://github.com/Shekharrajak';
for (const qr of document.querySelectorAll('.github-qr')) {
  const size = Number(qr.dataset.qrSize) || 270;
  new QRCode(qr, {
    text: github,
    width: size,
    height: size,
    colorDark: '#172b45',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M,
  });
  qr.removeAttribute('title');
  qr.querySelector('canvas')?.setAttribute('aria-hidden', 'true');
  const qrImage = qr.querySelector('img');
  if (qrImage) qrImage.alt = "QR code for Shekhar Rajak's GitHub profile";
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const deck = new Reveal({
  width: 1600,
  height: 900,
  margin: 0.025,
  minScale: 0.1,
  maxScale: 2,
  center: false,
  hash: true,
  history: true,
  controls: true,
  controlsTutorial: false,
  progress: true,
  slideNumber: 'c/t',
  transition: reducedMotion ? 'none' : 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'none',
  pdfSeparateFragments: false,
  pdfMaxPagesPerSlide: 1,
  totalTime: 3180,
  plugins: [RevealNotes],
});
await document.fonts.ready;
await deck.initialize();
export default deck;

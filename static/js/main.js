/* Dry Ice Kentucky — landing page.

   Static build for GitHub Pages. The estimator below is a direct port of the
   server-side version, so the same inputs give the same recommendation. */

const CATALOG = window.CATALOG || [];
const USE_RATES = {"ship": 8, "cooler": 6, "fog": 10, "freezer": 10};

const $ = (id) => document.getElementById(id);

function money(cents) {
  return '$' + Math.floor(cents / 100) + '.' + String(cents % 100).padStart(2, '0');
}

/* Python's round() rounds a half to the nearest even number; Math.round always
   rounds a half up. Matching Python keeps this page and the server in step. */
function roundHalfToEven(value) {
  const floor = Math.floor(value);
  const diff = value - floor;
  if (diff > 0.5) return floor + 1;
  if (diff < 0.5) return floor;
  return floor % 2 === 0 ? floor : floor + 1;
}

function estimate(use, days, size) {
  const rate = USE_RATES[use] !== undefined ? USE_RATES[use] : 8;
  const raw = Math.max(5, rate * days * size);

  const low = Math.max(5, roundHalfToEven(raw / 5) * 5);
  const high = low + Math.max(5, roundHalfToEven(low * 0.15 / 5) * 5);

  const bag = CATALOG.find((b) => b.lbs >= high) || CATALOG[CATALOG.length - 1];
  return { low, high, bag, rangeLabel: low + '\u2013' + high + ' lb' };
}

function calculateNeed() {
  const use = $('calcUse');
  const days = $('calcDays');
  const size = $('calcSize');
  if (!use || !days || !size || !CATALOG.length) return;

  const result = estimate(use.value, Number(days.value), Number(size.value));

  const range = $('recRange');
  const copy = $('recCopy');
  const label = $('recBagLabel');

  if (range) range.textContent = result.rangeLabel;
  if (label && result.bag) label.textContent = result.bag.name;
  if (copy && result.bag) {
    copy.textContent =
      'A practical starting range for this use and duration. The ' +
      result.bag.name + ' (' + money(result.bag.price_cents) + ') is the ' +
      'closest size we stock \u2014 choose the next size up if you want a ' +
      'safety margin.';
  }
}

const estimateBtn = $('estimateBtn');
if (estimateBtn) estimateBtn.addEventListener('click', calculateNeed);

/* ------------------------------------------------ faq */
document.querySelectorAll('.faq-q').forEach((q) =>
  q.addEventListener('click', () => q.parentElement.classList.toggle('open')));

calculateNeed();

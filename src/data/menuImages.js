// Local, shared menu photography. See docs/menu-image-provenance.json.
const files = {
  'sp-1': 'otak-otak-tartlet-royale.webp',
  'sp-2': 'hearth-smoked-duck-satay.webp',
  'sp-3': 'crispy-soft-shell-crab-kerabu.webp',
  'sp-4': 'charred-bone-marrow-roti-crisps.webp',
  'sp-5': 'wild-mushroom-truffle-begedil.webp',
  'sp-6': 'prawn-paste-tiger-prawn-toast.webp',
  'm-1': '48-hour-wagyu-beef-rendang.webp',
  'm-2': 'wild-barramundi-asam-pedas.webp',
  'm-3': 'royal-tiger-prawn-laksa-lemak.webp',
  'm-4': 'truffle-nasi-kerabu-royale.webp',
  'm-5': 'ayam-percik-kampung-roulade.webp',
  'm-6': 'lamb-masak-kicap-hitam.webp',
  'm-7': 'smoked-tofu-tempeh-kari-lemak.webp',
  'g-1': 'charred-sabah-rock-lobster.webp',
  'g-2': 'smoked-lamb-rack-masak-hitam.webp',
  'g-3': 'octopus-bakar-percik.webp',
  'g-4': 'smoked-king-oyster-terung-sambal.webp',
  'g-5': 'wagyu-beef-short-rib-bakar.webp',
  'd-1': 'pandan-souffle-smoked-gula-melaka.webp',
  'd-2': 'musang-king-durian-mille-feuille.webp',
  'd-3': 'deconstructed-cendol-panna-cotta.webp',
  'd-4': 'pulut-hitam-tart-jackfruit-gelato.webp',
  'dr-1': 'bunga-kantan-sparkling-elixir.webp',
  'dr-2': 'smoked-asam-boi-highball.webp',
  'dr-3': 'pandan-coconut-clarified-punch.webp',
  'dr-4': 'kedondong-wild-mint-cooler.webp',
  'dr-5': 'sarawak-spiced-black-tea.webp',
  'dr-6': 'ember-teh-tarik-royale.webp',
  'dr-7': 'lychee-butterfly-pea-spritz.webp',
};

export const menuImages = Object.fromEntries(
  Object.entries(files).map(([id, file]) => [
    id,
    `${import.meta.env?.BASE_URL ?? '/'}images/menu/${file}`,
  ]),
);

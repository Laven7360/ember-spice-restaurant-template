# Menu image audit — 21 September 2026

All 29 menu items, the three Home signatures, the dish-detail modal, the retained SignatureShowcase component, and food/beverage images in the Experience page were checked. The existing page markup, design classes, content, prices, categories, filters, and routes were preserved.

The original URLs were fetched and the successful responses were visually inspected in a contact sheet. Four returned HTTP 404. Successful HTTP responses did not imply suitable subject matter.

| ID | Dish | Original result / visible subject | Replacement file in `public/images/menu/` |
| --- | --- | --- | --- |
| sp-1 | Otak-Otak Tartlet Royale | 200; pancakes, not savory fish tartlets | `otak-otak-tartlet-royale.webp` |
| sp-2 | Hearth-Smoked Duck Satay | 404 | `hearth-smoked-duck-satay.webp` |
| sp-3 | Crispy Soft-Shell Crab Kerabu | 200; people seated on a bed | `crispy-soft-shell-crab-kerabu.webp` |
| sp-4 | Charred Bone Marrow & Roti Crisps | 200; mixed grilled meats, no marrow bones | `charred-bone-marrow-roti-crisps.webp` |
| sp-5 | Wild Mushroom & Truffle Begedil | 404 | `wild-mushroom-truffle-begedil.webp` |
| sp-6 | Prawn Paste Tiger Prawn Toast | 200; curry and flatbread, no prawn toast | `prawn-paste-tiger-prawn-toast.webp` |
| m-1 | 48-Hour Wagyu Beef Rendang | 200; orange sauced dish, not dark reduced beef rendang | `48-hour-wagyu-beef-rendang.webp` |
| m-2 | Wild Barramundi Asam Pedas | 200; salmon fillet, not barramundi in tamarind broth | `wild-barramundi-asam-pedas.webp` |
| m-3 | Royal Tiger Prawn Laksa Lemak | 200; noodle bowl, not the described coconut prawn laksa | `royal-tiger-prawn-laksa-lemak.webp` |
| m-4 | Truffle Nasi Kerabu Royale | 404 | `truffle-nasi-kerabu-royale.webp` |
| m-5 | Ayam Percik Kampung Roulade | 200; grilled chicken breast and vegetables, no roulade | `ayam-percik-kampung-roulade.webp` |
| m-6 | Lamb Masak Kicap Hitam | 200; assorted meat plates, not dark soy-braised lamb | `lamb-masak-kicap-hitam.webp` |
| m-7 | Smoked Tofu & Tempeh Kari Lemak | 200; generic curry, no recognizable tofu/tempeh pairing | `smoked-tofu-tempeh-kari-lemak.webp` |
| g-1 | Charred Sabah Rock Lobster | 404 | `charred-sabah-rock-lobster.webp` |
| g-2 | Smoked Lamb Rack Masak Hitam | 200; skewered meat, not lamb rack cutlets | `smoked-lamb-rack-masak-hitam.webp` |
| g-3 | Octopus Bakar Percik | 200; white flowers | `octopus-bakar-percik.webp` |
| g-4 | Smoked King Oyster & Terung Sambal | 200; raw salad, not grilled aubergine and mushrooms | `smoked-king-oyster-terung-sambal.webp` |
| g-5 | Wagyu Beef Short Rib Bakar | 200; generic ribs and sides, not identifiable Wagyu/lemang plating | `wagyu-beef-short-rib-bakar.webp` |
| d-1 | Pandan Soufflé & Smoked Gula Melaka | 200; strawberry dessert cups, not pandan soufflé | `pandan-souffle-smoked-gula-melaka.webp` |
| d-2 | Musang King Durian Mille-Feuille | 200; bread rolls | `musang-king-durian-mille-feuille.webp` |
| d-3 | Deconstructed Cendol Panna Cotta | 200; cocktails | `deconstructed-cendol-panna-cotta.webp` |
| d-4 | Pulut Hitam Tart & Jackfruit Gelato | 200; cheesecake slice | `pulut-hitam-tart-jackfruit-gelato.webp` |
| dr-1 | Bunga Kantan Sparkling Elixir | 200; generic cocktails with different color/glassware | `bunga-kantan-sparkling-elixir.webp` |
| dr-2 | Smoked Asam Boi Highball | 200; short cocktail glass, no highball presentation | `smoked-asam-boi-highball.webp` |
| dr-3 | Pandan Coconut Clarified Punch | 200; amber drink being poured, no pandan presentation | `pandan-coconut-clarified-punch.webp` |
| dr-4 | Kedondong & Wild Mint Cooler | 200; amber iced drink, not green ambarella cooler | `kedondong-wild-mint-cooler.webp` |
| dr-5 | Sarawak Spiced Black Tea | 200; generic teabag cup, no spice presentation | `sarawak-spiced-black-tea.webp` |
| dr-6 | Ember Teh Tarik Royale | 200; tea cup among leaves, no frothy pulled milk tea | `ember-teh-tarik-royale.webp` |
| dr-7 | Lychee & Butterfly Pea Spritz | 200; orange-red drinks, no blue-purple butterfly pea/lychee | `lychee-butterfly-pea-spritz.webp` |

## Replacement provenance and delivery

The new images are **AI-generated illustrative photography for this fictional portfolio restaurant**, created using the built-in image-generation tool. They are not photographs of meals served by an actual restaurant. Each prompt uses the existing dish description, with consistent warm lighting and dark tableware. Every final image was visually inspected for subject correspondence.

All 29 files are local 1200 × 800 WebP assets, approximately 3.4 MB combined, with a largest file under 150 KB. The complete prompt set, file paths, sizes, original URLs, and HTTP results are recorded in [menu-image-provenance.json](menu-image-provenance.json). The three Home signatures share the exact same assets as their Menu entries. Experience's Signature Gastronomy and Botanical Elixirs reuse the rendang and pandan punch assets.

`DishImage` renders an accessible HTML/icon placeholder on failure, retaining the surrounding image slot and never requesting a secondary remote image. Menu modal images load eagerly; cards retain lazy loading and asynchronous decoding. Interior, chef, and other non-menu photography retain their original sources.

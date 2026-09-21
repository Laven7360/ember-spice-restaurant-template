import { menuImages } from './menuImages.js';

export const restaurantInfo = {
  name: "Ember & Spice",
  tagline: "Malaysian flavours, reimagined.",
  subTagline: "Contemporary Malaysian gastronomy forged over open mangrove charcoal hearths in the heart of Kuala Lumpur.",
  address: "28 Jalan Telawi 3, Bangsar Baru, 59100 Kuala Lumpur, Malaysia",
  phone: "+60 16-793 8894",
  phoneHref: "tel:+60167938894",
  whatsapp: "+60 16-793 8894",
  whatsappClean: "60167938894",
  whatsappMessage: "Hello, I'm interested in this restaurant website template and would like to enquire about a website.",
  email: "reservations@emberandspice.my",
  valetInfo: "Complimentary valet parking available along Jalan Telawi 3 from 5:30 PM onwards.",
  dietaryNote: "Pork-Free & Alcohol-Conscious. All poultry, lamb, and beef are strictly sourced from certified Halal farms.",
  disclaimer: "Ember & Spice is a fictional restaurant concept created as a web development portfolio project.",
  hours: [
    { days: "Tuesday – Thursday", lunch: "12:00 PM – 3:00 PM", dinner: "6:00 PM – 10:30 PM" },
    { days: "Friday – Sunday", lunch: "12:00 PM – 3:30 PM", dinner: "6:00 PM – 11:30 PM" },
    { days: "Monday", lunch: "Closed for private events & culinary R&D", dinner: "Closed" },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tripadvisor: "https://tripadvisor.com"
  }
};

export const featuredDishes = [
  {
    id: "wagyu-rendang",
    name: "48-Hour Wagyu Beef Rendang",
    malayName: "Rendang Daging Wagyu Tok",
    price: 138,
    category: "Mains",
    badge: "Chef's Signature",
    spiciness: 2,
    dietary: ["Halal-Certified Beef", "Gluten-Free"],
    image: menuImages['m-1'],
    description: "MBS 7+ Australian Wagyu short ribs braised over 48 hours in cold-pressed santan, toasted kerisik, wild galangal, and hand-ground Perak rempah tok.",
    pairing: "Pairs with Tempranillo or Smoked Asam Boi Highball"
  },
  {
    id: "nasi-kerabu-royale",
    name: "Truffle Nasi Kerabu Royale",
    malayName: "Nasi Kerabu Bunga Telang & Ulam",
    price: 88,
    category: "Mains",
    badge: "House Classic",
    spiciness: 1,
    dietary: ["Halal-Sourced", "Vegetarian Option Available"],
    image: menuImages['m-4'],
    description: "Kelantan blue pea flower jasmine rice infused with lemongrass, served with shaved winter truffle, heirloom ulam raja herb salad, salted duck egg emulsion, and solok lada.",
    pairing: "Pairs with Riesling or Bunga Kantan Spritz"
  },
  {
    id: "duck-satay",
    name: "Hearth-Smoked Duck Satay",
    malayName: "Sate Itik Asam Keping",
    price: 52,
    category: "Small Plates",
    badge: "Open Hearth",
    spiciness: 2,
    dietary: ["Halal-Sourced", "Contains Nuts"],
    image: menuImages['sp-2'],
    description: "Free-range Bidor duck breast skewers glazed in wild stingless bee honey and asam keping, charcoal-charred over mangrove embers with coarse-crushed roasted cashew dipping sauce.",
    pairing: "Pairs with Pinot Noir or Calamansi Mint Cooler"
  }
];

export const fullMenu = [
  // ─── Small Plates (6 items) ─────────────────────────────────────────────────
  {
    category: "Small Plates",
    items: [
      {
        id: "sp-1",
        name: "Otak-Otak Tartlet Royale",
        malayName: "Tart Otak-Otak Tenggiri",
        price: 46,
        description: "Muar Spanish mackerel mousse, kaffir lime leaf chiffonade, toasted coconut gel, and Siberian caviar in an all-butter crisp pastry crust.",
        dietary: ["Seafood", "Halal"],
        spicy: 1,
        isChefPick: true,
        image: menuImages['sp-1']
      },
      {
        id: "sp-2",
        name: "Hearth-Smoked Duck Satay",
        malayName: "Sate Itik Asam Keping",
        price: 52,
        description: "Free-range Bidor duck breast skewers glazed in wild stingless bee honey, coarse-crushed roasted cashew dipping sauce, compressed rice cubes.",
        dietary: ["Halal", "Contains Nuts"],
        spicy: 2,
        isChefPick: true,
        image: menuImages['sp-2']
      },
      {
        id: "sp-3",
        name: "Crispy Soft-Shell Crab Kerabu",
        malayName: "Kerabu Ketam Kulit Lembut",
        price: 54,
        description: "Sabah soft-shell crab tempura tossed with shaved green mango, pomelo sacs, torch ginger flower, and kaffir lime palm dressing.",
        dietary: ["Seafood", "Halal"],
        spicy: 2,
        isChefPick: false,
        image: menuImages['sp-3']
      },
      {
        id: "sp-4",
        name: "Charred Bone Marrow & Roti Crisps",
        malayName: "Sumsum Tulang Bakar Rempah",
        price: 58,
        description: "Wood-roasted Halal beef bone marrow topped with sambal belado chimichurri, pickled shallots, served with paper-thin flaky roti canai crisps.",
        dietary: ["Halal Beef"],
        spicy: 2,
        isChefPick: false,
        image: menuImages['sp-4']
      },
      {
        id: "sp-5",
        name: "Wild Mushroom & Truffle Begedil",
        malayName: "Begedil Cendawan Liar & Terung",
        price: 38,
        description: "Crispy potato croquettes loaded with foraged Cameron Highlands mushrooms, black truffle paste, and spiced dark soy reduction.",
        dietary: ["Vegetarian", "Halal"],
        spicy: 1,
        isChefPick: false,
        image: menuImages['sp-5']
      },
      {
        id: "sp-6",
        name: "Prawn Paste Tiger Prawn Toast",
        malayName: "Roti Udang Bakar Hae Ko",
        price: 44,
        description: "Crisp sourdough toast smeared with fermented Penang hae ko prawn paste butter, crowned with a whole Rompin tiger prawn and pickled cucumber ribbons.",
        dietary: ["Seafood", "Halal", "Contains Gluten"],
        spicy: 1,
        isChefPick: true,
        image: menuImages['sp-6']
      }
    ]
  },

  // ─── Mains (7 items) ─────────────────────────────────────────────────────────
  {
    category: "Mains",
    items: [
      {
        id: "m-1",
        name: "48-Hour Wagyu Beef Rendang",
        malayName: "Rendang Daging Wagyu Tok",
        price: 138,
        description: "MBS 7+ Australian Wagyu short ribs braised over 48 hours in cold-pressed santan, toasted kerisik, wild galangal, and hand-ground Perak rempah tok.",
        dietary: ["Halal Beef", "Gluten-Free"],
        spicy: 2,
        isChefPick: true,
        image: menuImages['m-1']
      },
      {
        id: "m-2",
        name: "Wild Barramundi Asam Pedas",
        malayName: "Siakap Asam Pedas Melaka",
        price: 96,
        description: "Line-caught Pulau Ketam barramundi pan-seared with crispy skin, bright Malaccan tamarind broth, charred okra, and shredded bunga kantan.",
        dietary: ["Seafood", "Halal"],
        spicy: 3,
        isChefPick: true,
        image: menuImages['m-2']
      },
      {
        id: "m-3",
        name: "Royal Tiger Prawn Laksa Lemak",
        malayName: "Laksa Udang Harimau Lemak Santan",
        price: 86,
        description: "Giant grilled Rompin tiger prawns over handmade rice noodles in a velvety 12-hour crustacean-coconut broth, quail eggs, and fresh Vietnamese mint.",
        dietary: ["Seafood", "Halal"],
        spicy: 2,
        isChefPick: false,
        image: menuImages['m-3']
      },
      {
        id: "m-4",
        name: "Truffle Nasi Kerabu Royale",
        malayName: "Nasi Kerabu Bunga Telang & Ulam",
        price: 88,
        description: "Kelantan blue pea flower rice, shaved black truffle, 14-herb ulam salad, kerisik, salted duck egg emulsion, solok lada chili stuffed with fish mousse.",
        dietary: ["Halal", "Vegetarian Option Available"],
        spicy: 1,
        isChefPick: false,
        image: menuImages['m-4']
      },
      {
        id: "m-5",
        name: "Ayam Percik Kampung Roulade",
        malayName: "Ayam Percik Kelantan Moden",
        price: 78,
        description: "Free-range organic chicken roulade slow-cooked then flame-kissed, smothered in caramelized lemongrass coconut sauce, served with pulut kuning sticky rice.",
        dietary: ["Halal Poultry", "Gluten-Free"],
        spicy: 2,
        isChefPick: false,
        image: menuImages['m-5']
      },
      {
        id: "m-6",
        name: "Lamb Masak Kicap Hitam",
        malayName: "Kambing Masak Hitam Perak",
        price: 112,
        description: "Slow-braised New Zealand lamb shoulder in caramelized black soy, charred dried chilies, Sarawak palm sugar, and toasted star anise. Served with compressed jasmine rice.",
        dietary: ["Halal Lamb", "Gluten-Free"],
        spicy: 2,
        isChefPick: true,
        image: menuImages['m-6']
      },
      {
        id: "m-7",
        name: "Smoked Tofu & Tempeh Kari Lemak",
        malayName: "Kari Lemak Tauhu & Tempe Bakar",
        price: 58,
        description: "Hearth-smoked organic tofu and house-fermented tempeh in an aromatic kunyit-rich coconut curry, young jackfruit, and fresh curry leaves. Fully plant-based.",
        dietary: ["Vegan", "Halal", "Gluten-Free"],
        spicy: 2,
        isChefPick: false,
        image: menuImages['m-7']
      }
    ]
  },

  // ─── From the Grill (5 items) ─────────────────────────────────────────────────
  {
    category: "From the Grill",
    items: [
      {
        id: "g-1",
        name: "Charred Sabah Rock Lobster",
        malayName: "Udang Karang Bakar Sambal Hijau",
        price: 195,
        description: "Whole wild Sabah rock lobster grilled on mangrove charcoal, brushed with calamansi herb butter, served with smoky green sambal hijau.",
        dietary: ["Seafood", "Halal"],
        spicy: 2,
        isChefPick: true,
        image: menuImages['g-1']
      },
      {
        id: "g-2",
        name: "Smoked Lamb Rack Masak Hitam",
        malayName: "Kambing Bakar Masak Hitam",
        price: 142,
        description: "New Zealand pasture-fed lamb cutlets marinated in caramelized spices, dried chilies, and Sarawak palm sugar, charred over open hearth embers.",
        dietary: ["Halal Lamb"],
        spicy: 2,
        isChefPick: true,
        image: menuImages['g-2']
      },
      {
        id: "g-3",
        name: "Octopus Bakar Percik",
        malayName: "Kurita Bakar Percik Rempah",
        price: 88,
        description: "Tenderized Spanish octopus tentacle charred over ironwood coals, brushed with spiced percik glaze, pickled winter melon, and charred lime.",
        dietary: ["Seafood", "Halal"],
        spicy: 2,
        isChefPick: false,
        image: menuImages['g-3']
      },
      {
        id: "g-4",
        name: "Smoked King Oyster & Terung Sambal",
        malayName: "Terung & Cendawan Bakar Balado",
        price: 68,
        description: "Charred Japanese aubergine and king oyster mushrooms glazed with sweet sambal balado, toasted shallots, and crisp kaffir lime chips.",
        dietary: ["Vegan", "Gluten-Free"],
        spicy: 2,
        isChefPick: false,
        image: menuImages['g-4']
      },
      {
        id: "g-5",
        name: "Wagyu Beef Short Rib Bakar",
        malayName: "Rusuk Wagyu Bakar Lemang",
        price: 168,
        description: "Bone-in MBS 7+ Wagyu short rib dry-aged 21 days, slow-roasted then finished on open mangrove embers, served with banana leaf-steamed lemang and charred spring onion.",
        dietary: ["Halal Beef", "Gluten-Free"],
        spicy: 1,
        isChefPick: true,
        image: menuImages['g-5']
      }
    ]
  },

  // ─── Desserts (4 items) ─────────────────────────────────────────────────────
  {
    category: "Desserts",
    items: [
      {
        id: "d-1",
        name: "Pandan Soufflé & Smoked Gula Melaka",
        malayName: "Sufle Pandan Daun Suji",
        price: 42,
        description: "Freshly extracted pandan suji soufflé, tableside pour of warm smoked Gula Melaka coconut cream, house-churned santan gelato.",
        dietary: ["Vegetarian"],
        spicy: 0,
        isChefPick: true,
        image: menuImages['d-1']
      },
      {
        id: "d-2",
        name: "Musang King Durian Mille-Feuille",
        malayName: "Mille-Feuille Durian Musang King Raub",
        price: 48,
        description: "Crispy caramelized puff pastry layered with Raub Musang King durian diplomate cream and roasted coconut shavings.",
        dietary: ["Vegetarian"],
        spicy: 0,
        isChefPick: true,
        image: menuImages['d-2']
      },
      {
        id: "d-3",
        name: "Deconstructed Cendol Panna Cotta",
        malayName: "Panna Cotta Santan & Cendol",
        price: 36,
        description: "Organic coconut cream panna cotta, house-extruded pandan noodles, red bean coulis, and shaved Gula Melaka granita.",
        dietary: ["Vegetarian", "Gluten-Free"],
        spicy: 0,
        isChefPick: false,
        image: menuImages['d-3']
      },
      {
        id: "d-4",
        name: "Pulut Hitam Tart & Jackfruit Gelato",
        malayName: "Tart Pulut Hitam & Nangka Madu",
        price: 38,
        description: "Black glutinous rice compote in a crisp sable shell, crowned with honeyed jackfruit gelato and toasted sesame brittle.",
        dietary: ["Vegetarian"],
        spicy: 0,
        isChefPick: false,
        image: menuImages['d-4']
      }
    ]
  },

  // ─── Drinks (7 items) ─────────────────────────────────────────────────────────
  {
    category: "Drinks",
    items: [
      {
        id: "dr-1",
        name: "Bunga Kantan Sparkling Elixir",
        malayName: "Mocktail Bunga Kantan & Asam",
        price: 28,
        description: "Artisanal torch ginger flower cordial, pressed calamansi lime, clarified pink guava, and effervescent soda.",
        dietary: ["Non-Alcoholic", "Signature"],
        spicy: 0,
        isChefPick: true,
        image: menuImages['dr-1']
      },
      {
        id: "dr-2",
        name: "Smoked Asam Boi Highball",
        malayName: "Highball Asam Boi Kayu Manis",
        price: 48,
        description: "Oak-aged craft spirit, infused dried sour plum reduction, roasted cinnamon bark, and fresh lime essence.",
        dietary: ["Cocktail"],
        spicy: 0,
        isChefPick: true,
        image: menuImages['dr-2']
      },
      {
        id: "dr-3",
        name: "Pandan Coconut Clarified Punch",
        malayName: "Punch Santan Pandan Berkilau",
        price: 46,
        description: "Aged amber spirit, pandan-infused coconut water, clarified citrus whey, nutmeg, and aromatic bitters.",
        dietary: ["Cocktail"],
        spicy: 0,
        isChefPick: false,
        image: menuImages['dr-3']
      },
      {
        id: "dr-4",
        name: "Kedondong & Wild Mint Cooler",
        malayName: "Jus Kedondong Asam Jawa Sejuk",
        price: 26,
        description: "Cold-pressed ambarella fruit (kedondong), crushed river mint, organic honey, and Himalayan black salt rim.",
        dietary: ["Non-Alcoholic", "Vegan"],
        spicy: 0,
        isChefPick: false,
        image: menuImages['dr-4']
      },
      {
        id: "dr-5",
        name: "Sarawak Spiced Black Tea",
        malayName: "Teh Rempah Borneo",
        price: 22,
        description: "Slow-steeped single estate Sabah tea scented with Sarawak black peppercorns, cardamom pods, and star anise.",
        dietary: ["Hot Beverage", "Vegan"],
        spicy: 0,
        isChefPick: false,
        image: menuImages['dr-5']
      },
      {
        id: "dr-6",
        name: "Ember Teh Tarik Royale",
        malayName: "Teh Tarik Susu Segar Artisan",
        price: 18,
        description: "House-pulled teh tarik using single-estate Cameron Highlands CTC blend, steamed with fresh full-cream milk and a whisper of cardamom.",
        dietary: ["Hot Beverage", "Non-Alcoholic"],
        spicy: 0,
        isChefPick: true,
        image: menuImages['dr-6']
      },
      {
        id: "dr-7",
        name: "Lychee & Butterfly Pea Spritz",
        malayName: "Spritz Lici & Bunga Telang Biru",
        price: 32,
        description: "Fresh lychee purée, butterfly pea flower cold-brew, pressed calamansi, and sparkling water. Colour shifts from indigo to magenta with citrus.",
        dietary: ["Non-Alcoholic", "Vegan", "Signature"],
        spicy: 0,
        isChefPick: false,
        image: menuImages['dr-7']
      }
    ]
  }
];

export const storyMilestones = [
  {
    year: "The Fire",
    title: "Mangrove Charcoal Hearth",
    desc: "Every cut of meat and seafood is finished on open hearths fueled by cured mangrove wood from Kuala Sepetang, imparting a delicate, smoky perfume."
  },
  {
    year: "The Terroir",
    title: "Hyper-Local Malaysian Produce",
    desc: "From wild ulam foraged in Pahang to line-caught seafood from Pulau Ketam and single-estate Gula Melaka from Melaka elders."
  },
  {
    year: "The Craft",
    title: "Granite-Ground Rempah",
    desc: "Our master spice blends are never blended with electric blades. Every base paste is ground by hand on traditional granite mortar and pestles."
  },
  {
    year: "The Soul",
    title: "Muhibbah Hospitality",
    desc: "Rooted in Malaysia's multi-ethnic tapestry, our dining room celebrates the shared warmth, generous portions, and storytelling of our culture."
  }
];

export const diningExperiences = [
  {
    id: "open-hearth",
    title: "The Open Hearth",
    subtitle: "Primal Fire & Mangrove Embers",
    desc: "The heartbeat of Ember & Spice. Watch our kitchen brigade command live flames fueled by cured mangrove wood charcoal from Kuala Sepetang, searing heritage skewers and smoking heirloom short ribs with intoxicating aromas.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Open Fire", "Charcoal Grill", "Live Culinary Action"]
  },
  {
    id: "main-dining",
    title: "Main Dining Room",
    subtitle: "Atmospheric Amber Luminescence",
    desc: "Designed with acoustic warmth and low-lit amber glow along Bangsar's Jalan Telawi. Handcrafted dark timber banquettes, brass accents, and custom linen tables provide an intimate, relaxed sanctuary.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Intimate Ambience", "Banquettes", "Couples & Groups"]
  },
  {
    id: "chef-counter",
    title: "Chef's Hearth Counter",
    subtitle: "Front-Row Gastronomic Theatre",
    desc: "Six bespoke counter seats overlooking the hearth and finishing pass. Guests enjoy personal dialogue with Chef Harith, tasting dishes hot from the coals and discovering the provenance of wild Pahang botanicals.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    tags: ["6 Seats Only", "Direct Chef Interaction", "Tasting Experience"]
  },
  {
    id: "private-alcove",
    title: "Private Heritage Alcove",
    subtitle: "Secluded Celebrations & Gatherings",
    desc: "An exclusive dining salon accommodating up to 12 guests. Featuring custom Peranakan-inspired woodwork, dedicated sommelier service, and bespoke multi-course menus tailored for milestones and corporate entertaining.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
    tags: ["Up to 12 Guests", "Dedicated Service", "Custom Menus"]
  },
  {
    id: "signature-cuisine",
    title: "Signature Gastronomy",
    subtitle: "Ancestral Rempah, Modern Artistry",
    desc: "Every plate celebrates the nuance of traditional Malay, Peranakan, and regional techniques presented with clean, modern balance. From 48-hour braised Wagyu Tok to delicate wild flower-infused jasmine rice.",
    image: menuImages['m-1'],
    tags: ["Heirloom Rempah", "Artisanal Plating", "Seasonal Specials"]
  },
  {
    id: "artisanal-cocktails",
    title: "Artisanal Botanical Elixirs",
    subtitle: "Spices & Rainforest Aromatics",
    desc: "Our beverage program mirrors our hearth philosophy: torch ginger flower (bunga kantan), dried asam boi reductions, smoked pandan leaf tinctures, and clarified coconut whey expertly crafted into memorable libations.",
    image: menuImages['dr-3'],
    tags: ["Craft Cocktails", "Zero-Proof Mocktails", "Indigenous Herbs"]
  }
];

export const testimonials = [
  {
    quote: "Ember & Spice is that rare dining sanctuary where centuries-old Malaysian rempah techniques meet woodfire precision without losing their soul. The 48-Hour Wagyu Rendang is a masterclass in balance.",
    author: "Elena Wong",
    role: "Culinary Editor",
    source: "Kuala Lumpur Dining Journal · 2025 Annual Selection",
    rating: 5,
    highlight: "A Masterclass in Balance"
  },
  {
    quote: "By stripping away pretentious frills and elevating our native ulam, asam pedas, and open-hearth grilling, Chef Harith and his team have created Kuala Lumpur's most thrilling contemporary dinner table.",
    author: "Dr. Farhan Kamil",
    role: "Gastronomy Critic",
    source: "Nusantara Culinary Review",
    rating: 5,
    highlight: "KL's Most Thrilling Table"
  },
  {
    quote: "The warmth of genuine Malaysian hospitality combined with atmospheric charcoal luminescence. Dining at Ember & Spice feels like a cinematic celebration of modern Southeast Asia.",
    author: "Sarah & Marcus Sterling",
    role: "Private Dining Patrons",
    source: "Southeast Asia Dining Review · Patron Forum",
    rating: 5,
    highlight: "Cinematic Atmosphere & Flavour"
  },
  {
    quote: "The smoke-infused duck satay with coarse cashew dipping sauce and the torch ginger spritz prove that our local heritage flavours belong on the world's finest tables.",
    author: "Zainal Abidin",
    role: "Food & Travel Columnist",
    source: "Malaysian Contemporary Dining Guide",
    rating: 5,
    highlight: "Heritage on the World Stage"
  },
  {
    quote: "An extraordinary sensory evening in Bangsar. The attention to detail from the granite-ground spice pastes to the warm, unhurried service is truly exceptional.",
    author: "Claire Chen",
    role: "Culinary Enthusiast",
    source: "KL Gastronomy Awards · Reviewer Circle",
    rating: 5,
    highlight: "Exceptional Culinary Detail"
  },
  {
    quote: "Chef Harith's Truffle Nasi Kerabu is one of those rare dishes that arrests you mid-conversation. The marriage of Kelantan blue rice and winter truffle is unexpectedly, beautifully right.",
    author: "Alia Shariff",
    role: "Restaurant Patron & Food Writer",
    source: "Bangsar Table · Personal Review",
    rating: 5,
    highlight: "Unexpectedly, Beautifully Right"
  },
  {
    quote: "We celebrated our anniversary in the Private Heritage Alcove and the experience was flawless — from the Rempah Odyssey tasting menu to the personalised service that felt genuinely caring.",
    author: "David & Priya Nair",
    role: "Anniversary Dining Guests",
    source: "Google Reviews · Verified Visit",
    rating: 5,
    highlight: "A Flawless Celebration Evening"
  },
  {
    quote: "The Pandan Soufflé alone is worth the journey from Petaling Jaya. It arrives table-side with a theatric tableside pour of smoked Gula Melaka cream — dessert as performance art.",
    author: "Jonathan Yee",
    role: "Dessert Enthusiast & Food Blogger",
    source: "KL Sweet Spot · Verified Visit",
    rating: 5,
    highlight: "Dessert as Performance Art"
  }
];

export const seatingAreas = [
  { id: "main", name: "Main Dining Room", desc: "Intimate tables bathed in warm amber glow and plush banquettes." },
  { id: "counter", name: "Chef's Hearth Counter", desc: "Front-row seats to the open mangrove charcoal hearth and plating station." },
  { id: "alcove", name: "Private Heritage Alcove", desc: "Secluded setting ideal for celebrations or business dinners (up to 12 guests)." }
];

export const timeSlots = {
  lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
  dinner: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"]
};

// ─── Chef & Team ────────────────────────────────────────────────────────────────

export const chefProfile = {
  name: "Harith Iskandar Tan",
  title: "Executive Chef & Co-Founder",
  image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=900&q=80",
  quote: "Malaysian cuisine does not need reinvention to earn reverence. It simply demands the same rigorous culinary patience we bestow upon the world's grandest traditions.",
  bio: [
    "Born in Ipoh, Perak, Chef Harith grew up between the granite-mortar kitchen of his maternal grandmother and the hawker lanes of Pasir Pinji market. It was there — among clay pots of slow-simmered rendang and bonfires of banana leaf-wrapped otak-otak — that he developed his reverence for fire, spice, and the slow hand.",
    "After formal training at Le Cordon Bleu Sydney, Harith spent five formative years apprenticing under open-fire specialists across Copenhagen, San Sebastián, and Cape Town, before returning to Malaysia with a singular conviction: that his homeland's culinary vocabulary was as sophisticated as any cuisine on earth, and deserved to be told with the same rigour.",
    "He founded Ember & Spice in 2021 with co-founder and sommelier Nurul Izzah, opening in Bangsar's Jalan Telawi enclave. The kitchen runs on a strict no-blender philosophy for rempah pastes, with all spice bases ground daily on inherited granite pestles sourced from Harith's family home in Perak."
  ],
  philosophy: "Every flame, every spice paste, every hand-foraged botanical tells the story of a place. Our role is simply to listen — and to cook.",
  sourcingFocus: [
    { region: "Perak", produce: "Wild-foraged rempah botanicals, fresh turmeric, galangal" },
    { region: "Sabah & Sarawak", produce: "Line-caught rock lobster, Sarawak palm sugar, black pepper" },
    { region: "Pahang", produce: "Cameron Highlands mushrooms, highland herbs, jungle honey" },
    { region: "Pulau Ketam, Selangor", produce: "Barramundi, mud crab, tiger prawns, soft-shell crab" },
    { region: "Melaka", produce: "Single-estate Gula Melaka, asam jawa, dried seafood" }
  ]
};

export const teamMembers = [
  {
    id: "sous-chef",
    name: "Syazwan Azmi",
    title: "Head Sous Chef",
    specialty: "Open-Hearth Grilling & Meat Cookery",
    bio: "Trained in Lyon and Tokyo, Syazwan commands the mangrove charcoal hearth with instinctive precision. His expertise in heat management and dry-ageing shapes the character of every grill-side dish.",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "beverage-director",
    name: "Nurul Izzah Rashid",
    title: "Beverage Director & Co-Founder",
    specialty: "Zero-Proof Botanical Elixirs & Fermentation",
    bio: "Co-founder Nurul Izzah curates a beverage program rooted in Malaysian rainforest aromatics — from torch ginger flower cordials to pandan-clarified punches — ensuring every sip is as considered as every bite.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pastry-chef",
    name: "Li Wei Tan",
    title: "Pastry Chef",
    specialty: "Malaysian Dessert Reimagination",
    bio: "Li Wei transforms heirloom kuih and traditional desserts into refined plated experiences — from soufflés scented with pandan suji to layered Musang King mille-feuilles that honour the flavours of her Penang childhood.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80"
  }
];

// ─── Tasting Menus ───────────────────────────────────────────────────────────────

export const tastingMenus = [
  {
    id: "ember-journey",
    name: "Ember Journey",
    subtitle: "A Study in Malaysian Fire",
    courses: 4,
    pricePerPerson: 228,
    description: "An accessible introduction to Ember & Spice's hearth philosophy. Four courses designed around our open mangrove charcoal grill — ideal for first-time guests and weekday dinner seatings.",
    courseHighlights: [
      "Amuse-bouche: Otak-otak velouté, kerisik foam",
      "Small plate: Prawn toast with Penang hae ko butter",
      "Hearth main: Ayam Percik Roulade, pulut kuning",
      "Dessert: Deconstructed Cendol Panna Cotta"
    ],
    beveragePairing: "Optional botanical elixir pairing available (+RM 88)",
    availability: "Tuesday – Sunday, Dinner",
    note: "Minimum 2 guests. 48-hour advance reservation recommended."
  },
  {
    id: "rempah-odyssey",
    name: "Rempah Odyssey",
    subtitle: "Heritage Spice, Course by Course",
    courses: 6,
    pricePerPerson: 368,
    description: "A deeper exploration of Malaysia's spice heritage. Six courses trace the arcs of Malay, Peranakan, and Borneo culinary traditions through Chef Harith's granite-ground rempah pastes.",
    courseHighlights: [
      "Amuse-bouche: Wild mushroom begedil, truffle soy",
      "First course: Crispy soft-shell crab kerabu, pomelo",
      "Soup: Barramundi asam pedas consommé",
      "Hearth course: Octopus bakar percik, charred lime",
      "Main: 48-Hour Wagyu Rendang, steamed jasmine rice",
      "Dessert: Pandan Soufflé, smoked Gula Melaka tableside"
    ],
    beveragePairing: "Optional zero-proof botanical pairing (+RM 128)",
    availability: "Friday – Sunday, Dinner Only",
    note: "Minimum 2 guests. 72-hour advance reservation required."
  },
  {
    id: "chefs-degustation",
    name: "Chef's Degustation",
    subtitle: "Full Expression of the Hearth",
    courses: 8,
    pricePerPerson: 528,
    description: "The complete Ember & Spice narrative — eight courses composed entirely at Chef Harith's discretion, reflecting the season's finest produce and his most expressive hearth techniques. No menu is repeated.",
    courseHighlights: [
      "Three amuse-bouches from the hearth pass",
      "Signature tartlet: Otak-otak royale, Siberian caviar",
      "Live fire course: Wagyu bone marrow, roti crisps",
      "Seafood: Charred Sabah rock lobster, sambal hijau",
      "Palate refresh: Pandan granita, lychee",
      "Hearth centrepiece: Wagyu short rib bakar, lemang",
      "Pre-dessert: Butterfly pea jelly, tropical flower",
      "Dessert: Musang King Durian Mille-Feuille"
    ],
    beveragePairing: "Curated botanical pairing included (+RM 198 for full spirit pairing)",
    availability: "Saturday only, Single Dinner Seating at 7:00 PM",
    note: "Maximum 8 guests. 1-week advance reservation required. Deposit required at booking."
  }
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────────

export const faqItems = [
  {
    id: "faq-1",
    question: "Is Ember & Spice halal-certified?",
    answer: "Yes. All poultry, beef, and lamb at Ember & Spice are sourced exclusively from certified Halal farms. We are a pork-free establishment. Our kitchen does not handle pork products of any kind. While we carry a curated spirits program, it is entirely optional and managed separately."
  },
  {
    id: "faq-2",
    question: "Do I need a reservation, or do you accept walk-ins?",
    answer: "Reservations are strongly recommended, particularly for Friday to Sunday dinner seatings which typically book out 5–7 days in advance. We maintain a small number of walk-in seats at our bar and Chef's Hearth Counter daily — please call our reservations line to check same-day availability."
  },
  {
    id: "faq-3",
    question: "Is there a dress code?",
    answer: "We observe a smart casual dress code. We ask that guests refrain from beachwear, athletic wear, and flip-flops. Smart jeans are perfectly welcome. For tasting menu and private dining experiences, we recommend smart casual to business casual attire."
  },
  {
    id: "faq-4",
    question: "Is parking available?",
    answer: "Complimentary valet parking is available at our doorstep along Jalan Telawi 3 from 5:30 PM onwards on all dining evenings. Lunch guests may use the paid public car park at Bangsar Village II (approx. 3-minute walk). Street parking along Jalan Telawi is also available on weekdays."
  },
  {
    id: "faq-5",
    question: "Can you accommodate dietary restrictions or food allergies?",
    answer: "Absolutely. Please inform us of any allergies or dietary requirements at the time of booking via the reservation notes field, or email reservations@emberandspice.my at least 48 hours in advance. Our kitchen is experienced with gluten-free, dairy-free, vegetarian, and vegan adaptations. We cannot guarantee a fully allergen-free kitchen environment."
  },
  {
    id: "faq-6",
    question: "How do I book the Private Heritage Alcove for a special occasion?",
    answer: "Private dining enquiries can be submitted via the Reservations page by selecting 'Private Heritage Alcove' as your seating preference, or by emailing reservations@emberandspice.my directly. The alcove accommodates up to 12 guests and includes dedicated service, a bespoke tasting menu, and optional beverage pairing. A minimum spend applies."
  },
  {
    id: "faq-7",
    question: "Do you have a children's menu?",
    answer: "We welcome families and young guests. While we do not operate a dedicated children's menu, our kitchen is happy to prepare simpler adaptations of dishes for younger diners. Please let us know when booking and we will do our best to accommodate. High chairs are available on request."
  },
  {
    id: "faq-8",
    question: "Can I take photographs inside the restaurant?",
    answer: "Personal photography for social media and personal use is warmly welcomed — we love seeing our food celebrated. We ask only that you remain considerate of fellow diners. Professional photography, video production, or media shoots require prior written approval from management. Please contact us at reservations@emberandspice.my."
  }
];

// ─── Transport Options ────────────────────────────────────────────────────────────

export const transportOptions = [
  {
    id: "valet",
    icon: "Car",
    method: "Valet Parking",
    detail: "Complimentary from 5:30 PM",
    instruction: "Drive to 28 Jalan Telawi 3. Our valet team will meet you at the entrance. Available Thursday through Sunday evenings."
  },
  {
    id: "lrt",
    icon: "Train",
    method: "LRT Bangsar",
    detail: "Approx. 7 minutes by Grab",
    instruction: "Alight at Bangsar LRT Station (Kelana Jaya Line). Take a short Grab ride or taxi to Jalan Telawi 3, Bangsar Baru."
  },
  {
    id: "grab",
    icon: "Smartphone",
    method: "Grab / MyTeksi",
    detail: "Drop-off at Jalan Telawi 3",
    instruction: "Set your destination to '28 Jalan Telawi 3, Bangsar Baru'. The drop-off point is directly in front of the restaurant entrance."
  },
  {
    id: "walk",
    icon: "PersonStanding",
    method: "Walk from Bangsar Village",
    detail: "Approx. 5 minutes on foot",
    instruction: "Exit Bangsar Village II via the Jalan Telawi 3 entrance and walk towards the Jalan Telawi restaurant strip. We are on the left past the junction."
  }
];

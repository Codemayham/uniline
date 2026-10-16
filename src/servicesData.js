const imagePools = {
  'Corporate Gifts & Executive Gifts': [
    'photo-1513519245088-0e12902e5a38',
    'photo-1531058020387-3be344556be6',
    'photo-1513201099705-a9746e1e201f',
  ],
  'Bags & Promotional Merchandise': [
    '/images/bags-cotton-tote-bags.png',
    'photo-1553062407-98eeb64c6a62',
    'photo-1553062407-2a2a3e4a8e16',
  ],
  Drinkware: [
    '/images/drinkware-ceramic-coffee-mugs.png',
    '/images/drinkware-stainless-steel-bottles.png',
    '/images/drinkware-insulated-water-bottles.png',
  ],
  'Office Supplies & Stationery': [
    'photo-1531346878377-a5be20888e57',
    'photo-1583485088034-697b5bc54ccd',
    'photo-1455390582262-044cdead277a',
  ],
  'Technology & Electronic Accessories': [
    'photo-1586953208448-b95a79798f07',
    'photo-1593359677879-a4bb92f829d1',
    'photo-1496181133206-80ce9b88a853',
  ],
  'Watches & Timepieces': [
    'photo-1523275335684-37898b6baf30',
    'photo-1524805444758-089113d48a6d',
    'photo-1508057198894-247b23fe5ade',
  ],
  'Clothing & Wearables': [
    'photo-1521572163474-6864f9cf17ab',
    'photo-1551232864-3f0890e580d9',
    'photo-1523398002811-999ca8dec234',
  ],
  'Awards, Trophies & Recognition': [
    'photo-1567427018141-0584cfcbf1b8',
    'photo-1513151233558-d860c5398176',
    'photo-1540575467063-178a50c2df87',
  ],
  'Printing & Marketing Materials': [
    'photo-1504274066651-8d31a536b11a',
    'photo-1544816155-12df9643f363',
    'photo-1455390582262-044cdead277a',
  ],
  'Custom Packaging': [
    'photo-1607082349566-187342175e2f',
    'photo-1608755728617-aefab37d2edd',
    'photo-1513201099705-a9746e1e201f',
  ],
  'Events, Exhibitions & Giveaways': [
    'photo-1517457373958-b7bdd4587205',
    'photo-1505373877841-8d25f7d46678',
    'photo-1540575467063-178a50c2df87',
  ],
  'Personal Accessories & Lifestyle Gifts': [
    'photo-1473496169904-658ba7c44d8a',
    'photo-1530789253388-582c481c54b0',
    'photo-1500530855697-b586d89ba3ee',
  ],
  'Hospitality & Hotel Gifts': [
    'photo-1566073771259-6a8506099945',
    'photo-1571896349842-33c89424de2d',
    'photo-1517248135467-4c7edcad34c4',
  ],
  'Outdoor & Promotional Accessories': [
    'photo-1473496169904-658ba7c44d8a',
    'photo-1500530855697-b586d89ba3ee',
    'photo-1470770841072-f978cf4d019e',
  ],
  'Product Customization & Branding Services': [
    'photo-1586953208448-b95a79798f07',
    'photo-1504274066651-8d31a536b11a',
    'photo-1513519245088-0e12902e5a38',
  ],
};

const categoryItems = [
  {
    name: 'Corporate Gifts & Executive Gifts',
    items: [
      'Premium gift hampers', 'Executive gift sets', 'Corporate gift boxes',
      'Employee welcome kits',
      'Personalized diaries', 'Premium pens', 'Leather wallets', 'Card holders', 'Keychains',
      'Desk accessories',
    ],
  },
  {
    name: 'Bags & Promotional Merchandise',
    items: [
      'Cotton tote bags', 'Canvas bags', 'Non-woven bags', 'Jute bags', 'Laptop bags',
      'Backpacks', 'Conference bags', 'Travel bags', 'Drawstring bags', 'Duffel bags',
      'Document bags',
    ],
  },
  {
    name: 'Drinkware',
    items: [
      'Ceramic coffee mugs', 'Stainless-steel bottles', 'Insulated water bottles', 'Travel mugs',
      'Tumblers', 'Vacuum flasks', 'Thermos bottles', 'Sports bottles', 'Glass bottles',
      'Reusable cups', 'Coffee cups with lids', 'Premium drinkware gift sets',
    ],
  },
  {
    name: 'Office Supplies & Stationery',
    items: [
      'Ballpoint pens', 'Metal pens', 'Rollerball pens', 'Fountain pens', 'Pencils', 'Notebooks',
      'Diaries and planners', 'Sticky notes', 'Memo pads', 'Folders', 'Document organizers',
      'Desk calendars', 'Desk organizers', 'Business card holders', 'Letterheads and envelopes',
      'Staplers and stationery sets',
    ],
  },
  {
    name: 'Technology & Electronic Accessories',
    items: [
      'Power banks', 'USB flash drives', 'Wireless chargers', 'Charging cables',
      'Multi-port charging hubs', 'Wireless earbuds', 'Headphones', 'Bluetooth speakers',
      'Phone stands', 'Laptop stands', 'Mouse pads', 'Wireless mice', 'USB hubs', 'Phone holders',
      'Webcam covers', 'Tech organizer pouches',
    ],
  },
  {
    name: 'Watches & Timepieces',
    items: [
      'Analog wristwatches', 'Digital watches', 'Business watches', 'Executive watches',
      'Sports watches', 'Promotional watches', 'Wall clocks', 'Desk clocks', 'Table clocks',
      'Alarm clocks', 'Branded watch gift sets', 'Watch presentation boxes',
    ],
  },
  {
    name: 'Clothing & Wearables',
    items: [
      'Polo T-shirts', 'Promotional T-shirts', 'Corporate shirts', 'Jackets', 'Hoodies', 'Caps',
      'Baseball hats', 'Bucket hats', 'Safety vests', 'Workwear', 'Corporate uniforms', 'Aprons',
      'Lanyards', 'ID card holders', 'Wristbands', 'Scarves', 'Socks',
    ],
  },
  {
    name: 'Awards, Trophies & Recognition',
    items: [
      'Crystal trophies', 'Glass awards', 'Acrylic awards', 'Metal trophies', 'Wooden plaques',
      'Recognition plaques', 'Employee achievement awards', 'Corporate anniversary awards',
      'Medals', 'Customized shields', 'Appreciation certificates', 'Engraved desk awards',
      'Sports trophies',
    ],
  },
  {
    name: 'Printing & Marketing Materials',
    items: [
      'Business cards', 'Flyers', 'Brochures', 'Product catalogues', 'Company profiles', 'Posters',
      'Leaflets', 'Presentation folders', 'Letterheads', 'Envelopes', 'Calendars', 'Desk calendars',
      'Notepads', 'Booklets', 'Stickers', 'Labels', 'Invitation cards', 'Greeting cards',
      'Certificates',
    ],
  },
  {
    name: 'Custom Packaging',
    items: [
      'Rigid gift boxes', 'Magnetic gift boxes', 'Kraft boxes', 'Corrugated boxes',
      'Paper shopping bags', 'Luxury gift bags', 'Branded tissue paper', 'Custom ribbons',
      'Product sleeves', 'Printed packaging labels', 'Gift wrapping', 'Promotional packaging kits',
      'Custom inserts and dividers',
    ],
  },
  {
    name: 'Events, Exhibitions & Giveaways',
    items: [
      'Event giveaway kits', 'Conference welcome kits', 'Promotional lanyards', 'Name badges',
      'Event wristbands', 'Branded tote bags', 'Promotional pens', 'Event notebooks',
      'Exhibition merchandise', 'Branded keychains', 'Stress balls', 'Promotional fans',
      'Badges and pins', 'Branded umbrellas', 'Tabletop promotional displays', 'Giveaway gift sets',
    ],
  },
  {
    name: 'Personal Accessories & Lifestyle Gifts',
    items: [
      'Umbrellas', 'Sunglasses', 'Travel adapters', 'Luggage tags', 'Passport holders',
      'Travel organizers', 'Toiletry bags', 'Key holders', 'Card wallets', 'Compact mirrors',
      'Cosmetic pouches', 'Reusable shopping accessories', 'Picnic accessories', 'Lifestyle gift sets',
    ],
  },
  {
    name: 'Hospitality & Hotel Gifts',
    items: [
      'Guest welcome gifts', 'Branded room accessories', 'Hotel key card holders',
      'Branded luggage tags', 'Guest amenity gift sets', 'Premium welcome hampers',
      'Branded mugs and bottles', 'Hotel stationery', 'VIP guest gifts',
      'Branded travel accessories',
    ],
  },
  {
    name: 'Outdoor & Promotional Accessories',
    items: [
      'Branded umbrellas', 'Caps and sun hats', 'Sports bottles', 'Picnic bags', 'Sports towels',
      'Drawstring gym bags', 'Reflective promotional accessories', 'Branded cooling towels',
      'Portable fans', 'Outdoor event merchandise',
    ],
  },
  {
    name: 'Product Customization & Branding Services',
    type: 'service',
    items: [
      'Logo printing', 'Screen printing', 'UV printing', 'Laser engraving', 'Embroidery',
      'Heat-transfer printing', 'Embossing and debossing', 'Digital printing', 'Full-colour branding',
      'Personalized names', 'Custom packaging', 'Branded gift-set assembly',
    ],
  },
];

const aliases = new Map([
  ['umbrellas', 'branded umbrellas'],
  ['sports bottles', 'sports bottles'],
  ['notebooks', 'notebooks'],
  ['promotional pens', 'promotional pens'],
]);

const drinkwareImages = new Map([
  ['ceramic coffee mugs', '/images/drinkware-ceramic-coffee-mugs.png'],
  ['stainless-steel bottles', '/images/drinkware-stainless-steel-bottles.png'],
  ['insulated water bottles', '/images/drinkware-insulated-water-bottles.png'],
  ['travel mugs', '/images/drinkware-travel-mugs.png'],
  ['tumblers', '/images/drinkware-tumblers.png'],
  ['vacuum flasks', '/images/drinkware-vacuum-flasks.png'],
  ['thermos bottles', '/images/drinkware-thermos-bottles.png'],
  ['sports bottles', '/images/drinkware-sports-bottles.png'],
  ['glass bottles', '/images/drinkware-glass-bottles.png'],
  ['reusable cups', '/images/drinkware-reusable-cups.png'],
  ['coffee cups with lids', '/images/drinkware-coffee-cups-with-lids.png'],
  ['premium drinkware gift sets', '/images/drinkware-premium-gift-sets.png'],
]);

const bagImages = new Map([
  ['cotton tote bags', '/images/bags-cotton-tote-bags.png'],
  ['canvas bags', '/images/bags-canvas-bags.png'],
  ['non-woven bags', '/images/bags-non-woven-bags.png'],
  ['jute bags', '/images/bags-jute-bags.png'],
  ['laptop bags', '/images/bags-laptop-bags.png'],
  ['backpacks', '/images/bags-backpacks.png'],
  ['conference bags', '/images/bags-laptop-sleeves.png'],
  ['travel bags', '/images/bags-conference-bags.png'],
  ['drawstring bags', '/images/bags-travel-bags.png'],
  ['duffel bags', '/images/bags-drawstring-bags.png'],
  ['document bags', '/images/bags-duffel-bags.png'],
]);

const corporateGiftImages = new Map([
  ['premium gift hampers', '/images/corporate-gifts-premium-gift-hampers.png'],
  ['executive gift sets', '/images/corporate-gifts-executive-gift-sets.png'],
  ['corporate gift boxes', '/images/corporate-gifts-corporate-gift-boxes.png'],
  ['employee welcome kits', '/images/corporate-gifts-employee-welcome-kits.png'],
  ['personalized diaries', '/images/corporate-gifts-personalized-diaries.png'],
  ['premium pens', '/images/corporate-gifts-premium-pens.png'],
  ['leather wallets', '/images/corporate-gifts-leather-wallets.png'],
  ['card holders', '/images/corporate-gifts-card-holders.png'],
  ['keychains', '/images/corporate-gifts-keychains.png'],
  ['desk accessories', '/images/corporate-gifts-desk-accessories.png'],
]);

function canonicalName(name) {
  const normalized = name.trim().toLowerCase();
  return aliases.get(normalized) ?? normalized;
}

function makeReference(name) {
  const slug = name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toUpperCase();
  return `UP-${slug}`;
}

const productMap = new Map();
let imageIndex = 0;
const products = [];

for (const group of categoryItems) {
  for (const label of group.items) {
    const canonical = canonicalName(label);
    let product = productMap.get(canonical);
    if (!product) {
      const name = canonical === 'branded umbrellas'
        ? 'Branded umbrellas'
        : label.charAt(0).toUpperCase() + label.slice(1);
      const reference = makeReference(name);
      const imagePool = imagePools[group.name];
      product = {
        id: reference,
        reference,
        name,
        type: group.type ?? 'product',
        description: group.type === 'service'
          ? `Discuss ${name.toLowerCase()} for your merchandise, packaging, or campaign requirements.`
          : `Explore ${name.toLowerCase()} for corporate gifting, promotions, and branded business use.`,
        customization: group.type === 'service'
          ? 'Service scope and available application to be confirmed by enquiry.'
          : 'Customization options available to discuss.',
        image: corporateGiftImages.get(canonical)
          ?? drinkwareImages.get(canonical)
          ?? bagImages.get(canonical)
          ?? imagePool[imageIndex % imagePool.length],
        categories: [],
      };
      imageIndex += 1;
      productMap.set(canonical, product);
      products.push(product);
    }
    if (!product.categories.includes(group.name)) product.categories.push(group.name);
  }
}

export const serviceCategories = categoryItems.map((group) => ({
  name: group.name,
  type: group.type ?? 'product',
  image: imagePools[group.name][0],
  products: group.items.map((item) => productMap.get(canonicalName(item))),
}));

export const serviceProducts = products;

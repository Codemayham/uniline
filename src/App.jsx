import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, Check, ChevronDown, CircleHelp,
  Clock3, Gift, Menu, PackageCheck, Phone, Search, Send, ShieldCheck, Sparkles,
  Tag, X, XCircle,
} from 'lucide-react';

const PHONE = '+97142228077';
const WHATSAPP_NUMBER = ''; // Add the verified business number in international digits-only format.
const HERO_PHRASES = [
  'impossible to forget.',
  'More Than Just a Logo',
  'Stand Out in Every Detail',
  'Part of Their Everyday.',
];

const products = [
  {
    id: 'UG-001', name: 'Executive Gift Set', category: 'Executive Gift Sets',
    description: 'A considered collection of everyday essentials, presented together for a polished welcome or thank-you.',
    image: 'photo-1513519245088-0e12902e5a38', type: 'Gift sets', brandable: true,
  },
  {
    id: 'UG-002', name: 'Signature Hardcover Journal', category: 'Promotional Pens & Stationery',
    description: 'A refined hard-cover notebook suited to meetings, conferences, and thoughtful client gifting.',
    image: 'photo-1531346878377-a5be20888e57', type: 'Stationery', brandable: true,
  },
  {
    id: 'UG-003', name: 'Insulated Travel Bottle', category: 'Branded Drinkware',
    description: 'A clean, reusable drinkware choice for team welcome packs and everyday brand visibility.',
    image: 'photo-1602143407151-7111542de6e8', type: 'Drinkware', brandable: true,
  },
  {
    id: 'UG-004', name: 'Everyday Canvas Tote', category: 'Bags & Backpacks',
    description: 'A versatile carryall for events, retail campaigns, and practical branded gifting.',
    image: 'photo-1544816155-12df9643f363', type: 'Bags', brandable: true,
  },
  {
    id: 'UG-005', name: 'Wireless Charging Pad', category: 'Tech Accessories',
    description: 'A useful desk accessory that brings a modern touch to a corporate gift or employee kit.',
    image: 'photo-1586953208448-b95a79798f07', type: 'Technology', brandable: true,
  },
  {
    id: 'UG-006', name: 'Premium Desk Pen', category: 'Promotional Pens & Stationery',
    description: 'A timeless writing essential for conferences, client meetings, and promotional campaigns.',
    image: 'photo-1583485088034-697b5bc54ccd', type: 'Stationery', brandable: true,
  },
  {
    id: 'UG-007', name: 'Welcome Kit Essentials', category: 'Corporate Gifts',
    description: 'A coordinated set of practical items to make a considered first impression for new teams.',
    image: 'photo-1606760227091-3dd870d97f1d', type: 'Gift sets', brandable: true,
  },
  {
    id: 'UG-008', name: 'Classic Ceramic Mug', category: 'Branded Drinkware',
    description: 'A familiar favourite for office desks, event handouts, and custom corporate collections.',
    image: 'photo-1514228742587-6b1558fcca3d', type: 'Drinkware', brandable: true,
  },
  {
    id: 'UG-009', name: 'Recognition Award', category: 'Awards & Recognition',
    description: 'A presentation-ready award concept for recognising milestones and celebrating teams.',
    image: 'photo-1567427018141-0584cfcbf1b8', type: 'Recognition', brandable: true,
  },
  {
    id: 'UG-010', name: 'Event Essentials Pack', category: 'Event Giveaways',
    description: 'A flexible mix of useful branded pieces for exhibitions, conferences, and campaigns.',
    image: 'photo-1517457373958-b7bdd4587205', type: 'Event merchandise', brandable: true,
  },
  {
    id: 'UG-011', name: 'Branded Gift Box', category: 'Customized Packaging',
    description: 'A crisp packaging concept to bring your selected gift items together with care.',
    image: 'photo-1607082349566-187342175e2f', type: 'Packaging', brandable: true,
  },
  {
    id: 'UG-012', name: 'Corporate Apparel', category: 'Corporate Apparel',
    description: 'A coordinated apparel option for team identity, promotions, and event-day dressing.',
    image: 'photo-1521572163474-6864f9cf17ab', type: 'Apparel', brandable: true,
  },
];

const categories = [
  'All products', 'Corporate Gifts', 'Promotional Pens & Stationery', 'Branded Drinkware',
  'Bags & Backpacks', 'Corporate Apparel', 'Tech Accessories', 'Executive Gift Sets',
  'Watches & Timepieces', 'Awards & Recognition', 'Customized Packaging',
  'Printing & Marketing Materials', 'Event Giveaways',
];

const solutions = [
  ['Corporate Gifting', 'Thoughtful branded gift options for clients, teams, and business occasions.', Gift],
  ['Employee Welcome Kits', 'Bring selected essentials together for a warm, brand-led first day.', PackageCheck],
  ['Campaign Merchandise', 'Explore products that support launches, promotions, and brand activations.', Sparkles],
  ['Conference & Exhibition Giveaways', 'Practical branded pieces for meetings, exhibitions, and events.', Award],
  ['Customized Business Merchandise', 'Make everyday business essentials your own with custom branding.', Tag],
  ['Printing & Branding Solutions', 'Coordinate printed materials and product branding for a consistent look.', Check],
  ['Executive Gift Sets', 'Curated gift collections for client appreciation and business milestones.', Gift],
  ['Bulk Merchandise Orders', 'Discuss product selection, customization, and quantities for your next order.', PackageCheck],
];

const benefits = [
  ['Product Customization', 'Explore branding options across a broad range of merchandise.'],
  ['Bulk-Order Enquiries', 'Discuss quantities and requirements directly with the team.'],
  ['Multiple Product Categories', 'Browse gifts, stationery, drinkware, apparel, and more.'],
  ['Dedicated Enquiry Support', 'Share your brief and get help finding a suitable direction.'],
];

const marqueeItems = [
  'Corporate Gifts', 'Branded Merchandise', 'Promotional Products',
  'Custom Packaging', 'Awards & Trophies', 'Printing & Branding',
  'Event Gifts', 'Office Supplies',
];

function imageUrl(id, width = 720) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
}

function makeWhatsAppUrl(message) {
  const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(message)}`;
}

function WhatsAppLink({ product, className = '', children, ...props }) {
  const message = product
    ? `Hello Uniline Promotions, I would like to enquire about ${product.name} (${product.id}). Please share your pricing, available branding options, and bulk-order details.`
    : 'Hello Uniline Promotions, I would like to know more about your corporate gifts and promotional merchandise. Please assist me with your catalogue and quotation.';
  return (
    <a className={className} href={makeWhatsAppUrl(message)} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="Uniline Promotions home">
      <span className="brand-mark">U<span>.</span></span>
      <span className="brand-copy">
        <strong>UNILINE</strong>
        <small>Promotional Gifts &amp; Branding</small>
      </span>
    </a>
  );
}

function Header({ onQuote }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const links = [['About Us', '#about'], ['Products', '#products'], ['Solutions', '#solutions'], ['Printing & Branding', '#solutions'], ['Contact', '#contact']];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-whatsapp" href={makeWhatsAppUrl('Hello Uniline Promotions, I would like to know more about your corporate gifts and promotional merchandise.')} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <span className="whatsapp-dot">W</span> WhatsApp Us
          </a>
          <button className="button button-dark nav-quote" onClick={() => { closeMenu(); onQuote(); }}>Request a Quote <ArrowUpRight size={15} /></button>
        </nav>
      </div>
    </header>
  );
}

function ProductCard({ product, onDetails, onQuote }) {
  return (
    <article className="product-card">
      <button className="product-image" onClick={() => onDetails(product)} aria-label={`View details for ${product.name}`}>
        <img src={imageUrl(product.image)} alt={`${product.name} sample product`} loading="lazy" />
        <span className="image-arrow"><ArrowUpRight size={17} /></span>
      </button>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span>REF. {product.id}</span></div>
        <button className="product-title" onClick={() => onDetails(product)}>{product.name}</button>
        <p>{product.description}</p>
        <div className="product-bottom">
          <span className="custom-tag"><Sparkles size={13} /> Custom branding</span>
          <button className="text-link" onClick={() => onQuote(product)}>Enquire <ArrowRight size={15} /></button>
        </div>
      </div>
    </article>
  );
}

function ProductModal({ product, onClose, onQuote }) {
  if (!product) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close product details"><X size={19} /></button>
        <img className="modal-image" src={imageUrl(product.image, 1000)} alt={`${product.name} sample`} />
        <div className="modal-content">
          <div className="eyebrow">{product.category} <span>·</span> REF. {product.id}</div>
          <h2 id="modal-title">{product.name}</h2>
          <p>{product.description}</p>
          <ul className="detail-list">
            <li><Check size={16} /> Branding options available to discuss</li>
            <li><Check size={16} /> Bulk order quantities by enquiry</li>
            <li><CircleHelp size={16} /> Pricing and availability on request</li>
          </ul>
          <div className="modal-actions">
            <button className="button button-gold" onClick={() => onQuote(product)}>Request a Quote <ArrowUpRight size={16} /></button>
            <WhatsAppLink product={product} className="button button-outline"><span className="whatsapp-dot">W</span> Ask on WhatsApp</WhatsAppLink>
          </div>
          <span className="demo-note">Sample catalogue item · product details to be confirmed</span>
        </div>
      </section>
    </div>
  );
}

function QuoteForm({ selectedProduct, onClearProduct }) {
  const [status, setStatus] = useState('');
  const [contactError, setContactError] = useState('');
  const submit = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value.trim();
    const phone = event.currentTarget.elements.phone.value.trim();
    if (!email && !phone) {
      setContactError('Please provide either a business email or a phone number.');
      event.currentTarget.elements.email.focus();
      return;
    }
    if (phone && !/^\+?[0-9][0-9\s().-]{6,19}$/.test(phone)) {
      setContactError('Enter a valid phone number, including country code if needed.');
      event.currentTarget.elements.phone.focus();
      return;
    }
    setContactError('');
    setStatus('demo');
  };
  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-demo-notice"><CircleHelp size={17} /><span><strong>Prototype form</strong> — submissions are not sent or stored. Connect a secure backend before launch.</span></div>
      {status === 'demo' && <div className="form-message" role="alert"><XCircle size={18} /> Your enquiry was not sent. This demo form needs a backend connection before it can receive submissions.</div>}
      {selectedProduct && (
        <div className="selected-product">
          <span>Enquiring about</span><strong>{selectedProduct.name} <small>REF. {selectedProduct.id}</small></strong>
          <button type="button" onClick={onClearProduct} aria-label="Remove selected product"><X size={16} /></button>
        </div>
      )}
      <div className="form-grid">
        <label>Full name <em>*</em><input id="name" required name="name" autoComplete="name" placeholder="Your name" /></label>
        <label>Company name <em>*</em><input required name="company" autoComplete="organization" placeholder="Company name" /></label>
        <label>Business email <input type="email" name="email" autoComplete="email" placeholder="name@company.com" onChange={() => setContactError('')} /></label>
        <label>Phone number <input type="tel" name="phone" autoComplete="tel" placeholder="+971 ..." onChange={() => setContactError('')} /></label>
        {contactError && <div className="form-wide inline-error" role="alert">{contactError}</div>}
        <label>WhatsApp number <input type="tel" name="whatsapp" autoComplete="tel" placeholder="+971 ..." /></label>
        <label>Product category
          <select name="category" defaultValue={selectedProduct?.category ?? ''}><option value="">Select a category</option>{categories.slice(1).map((category) => <option key={category}>{category}</option>)}</select>
        </label>
        <label>Product name or reference <input name="product" defaultValue={selectedProduct ? `${selectedProduct.name} (${selectedProduct.id})` : ''} placeholder="Product or reference code" /></label>
        <label>Estimated quantity <input type="number" name="quantity" min="1" placeholder="e.g. 100" /></label>
        <label>Required delivery date <input type="date" name="deliveryDate" /></label>
        <label>Preferred contact method
          <select name="contactPreference" defaultValue=""><option value="">Select preference</option><option>WhatsApp</option><option>Phone Call</option><option>Email</option></select>
        </label>
        <label className="form-wide">Customization or branding requirements <textarea name="customization" rows="2" placeholder="Printing, logo placement, packaging, or other requirements..." /></label>
        <label className="form-wide">Enquiry details <em>*</em><textarea required name="details" rows="3" placeholder="Tell us what you are looking for..." /></label>
        <label className="form-wide">Additional message <textarea name="message" rows="2" placeholder="Anything else we should know?" /></label>
      </div>
      <label className="consent"><input type="checkbox" required /> I agree to have my details used to respond to this enquiry. <em>*</em></label>
      <button className="button button-gold form-submit" type="submit">Send enquiry <Send size={16} /></button>
      <p className="privacy-note">Required fields are marked *. Your details stay in this browser; this prototype does not transmit data.</p>
    </form>
  );
}

function App() {
  const [heroPhraseIndex, setHeroPhraseIndex] = useState(0);
  const [typedHeroPhrase, setTypedHeroPhrase] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.visibilityState !== 'visible'
      ? HERO_PHRASES[0]
      : ''
  ));
  const [category, setCategory] = useState('All products');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [customOnly, setCustomOnly] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedHeroPhrase(HERO_PHRASES[0]);
      return undefined;
    }

    let phraseIndex = 0;
    let character = document.visibilityState === 'visible' ? 0 : HERO_PHRASES[phraseIndex].length;
    let phase = document.visibilityState === 'visible' ? 'typing' : 'holding';
    let holdTicks = 0;

    const revealCurrentPhrase = () => {
      character = HERO_PHRASES[phraseIndex].length;
      setTypedHeroPhrase(HERO_PHRASES[phraseIndex]);
      phase = 'holding';
      holdTicks = 24;
    };
    const handleVisibilityChange = () => revealCurrentPhrase();

    const typingTimer = window.setInterval(() => {
      const phrase = HERO_PHRASES[phraseIndex];
      if (document.visibilityState !== 'visible') {
        if (phase !== 'holding' || character !== phrase.length) revealCurrentPhrase();
        return;
      }

      if (phase === 'holding') {
        if (holdTicks > 0) {
          holdTicks -= 1;
        } else {
          phase = 'deleting';
        }
        return;
      }

      if (phase === 'typing') {
        character += 1;
        setTypedHeroPhrase(phrase.slice(0, character));
        if (character >= phrase.length) {
          phase = 'holding';
          holdTicks = 24;
        }
        return;
      }

      character -= 1;
      setTypedHeroPhrase(phrase.slice(0, character));
      if (character <= 0) {
        phraseIndex = (phraseIndex + 1) % HERO_PHRASES.length;
        character = 0;
        setHeroPhraseIndex(phraseIndex);
        phase = 'typing';
      }
    }, 65);

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.clearInterval(typingTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const groups = [
      ['.hero-copy > *:not(.hero-scroll)', 65],
      ['.intro-aside, .intro-main', 100],
      ['.catalogue > .section-heading, .catalogue-toolbar, .category-list, .empty-state, .catalogue-more, .catalogue-disclaimer', 60],
      ['.product-grid > .product-card', 55],
      ['.solutions-heading', 0],
      ['.solution-grid > .solution-card', 55],
      ['.why-title', 0],
      ['.benefits-grid > .benefit', 75],
      ['.contact-copy, .form-panel', 100],
      ['.closing-banner > div:first-child, .closing-banner > .button', 80],
      ['.footer-main > div', 55],
    ];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer;

    const revealNewTargets = () => {
      groups.forEach(([selector, stagger]) => {
        document.querySelectorAll(selector).forEach((target, index) => {
          if (target.dataset.revealReady) return;
          target.dataset.revealReady = 'true';
          target.classList.add('reveal-item');
          target.style.setProperty('--reveal-delay', `${index * stagger}ms`);
          if (reduceMotion || !('IntersectionObserver' in window)) {
            target.classList.add('is-visible');
          } else {
            observer.observe(target);
          }
        });
      });
    };

    if (!reduceMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    }

    revealNewTargets();
    const mutations = new MutationObserver(revealNewTargets);
    mutations.observe(document.getElementById('root'), { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer?.disconnect();
      document.querySelectorAll('[data-reveal-ready]').forEach((target) => {
        delete target.dataset.revealReady;
        target.classList.remove('reveal-item', 'is-visible');
        target.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    const filtered = products.filter((product) => (
      (category === 'All products' || product.category === category)
      && (!customOnly || product.brandable)
      && (!search || `${product.name} ${product.category} ${product.description} ${product.id}`.toLowerCase().includes(search))
    ));
    if (sort === 'az') filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [category, query, sort, customOnly]);

  const openQuote = (product = null) => {
    setSelectedProduct(product);
    setDetailProduct(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => document.getElementById('name')?.focus(), 450);
  };

  const visibleProducts = showAll || query || category !== 'All products' ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <>
      <Header onQuote={() => openQuote()} />
      <main>
        <section className="hero" id="home">
          <div className="hero-background">
            <img src="/images/uniline-gift-set.jpg" alt="" fetchpriority="high" />
          </div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> DUBAI · UAE · BRANDING WITH PURPOSE</div>
            <h1>Make your brand<br /><span className={`typewriter-text${typedHeroPhrase === HERO_PHRASES[heroPhraseIndex] ? ' is-complete' : ''}`} aria-hidden="true">{typedHeroPhrase}</span><span className="sr-only" aria-live="polite" aria-atomic="true">{HERO_PHRASES[heroPhraseIndex]}</span></h1>
            <p>Premium promotional gifts, customized merchandise, and branding solutions that help businesses create lasting impressions.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#products">Explore our catalogue <ArrowRight size={17} /></a>
              <button className="button button-white" onClick={() => openQuote()}>Request a quote <ArrowUpRight size={16} /></button>
            </div>
            <div className="hero-trust"><span>Corporate gifting</span><i /> <span>Promotional merchandise</span><i /> <span>Printing &amp; branding</span></div>
            <a className="hero-scroll" href="#about"><span>SCROLL TO DISCOVER</span><ArrowDown size={14} /></a>
          </div>
        </section>

        <div className="marquee-bar" aria-label="Our product and service categories">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
                {marqueeItems.map((item) => (
                  <React.Fragment key={`${copy}-${item}`}>
                    <span>{item}</span><span className="marquee-separator" aria-hidden="true">◆</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="intro section-wrap" id="about">
          <div className="intro-aside"><span className="section-index">01 / WHO WE ARE</span><span className="gold-rule" /></div>
          <div className="intro-main">
            <h2>Helping businesses build<br />stronger <span>brand connections.</span></h2>
            <div className="intro-body">
              <p>Uniline Promotions provides promotional merchandise, corporate gifting, and branding solutions designed to help businesses present their brands consistently and professionally.</p>
              <p>From customized products to corporate gifting requirements, we help businesses explore practical solutions for their promotional needs.</p>
              <a className="text-link" href="#solutions">Discover what we do <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="catalogue section-wrap" id="products">
          <div className="section-heading">
            <div><span className="section-index">02 / THE COLLECTION</span><h2>Find your next <span>brand favourite.</span></h2></div>
            <p>Thoughtful ideas for gifting, team moments, and the everyday. Every item is a starting point for a conversation.</p>
          </div>
          <div className="catalogue-toolbar">
            <div className="searchbox"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products..." aria-label="Search products" />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={15} /></button>}</div>
            <div className="toolbar-right">
              <label className="custom-filter"><input type="checkbox" checked={customOnly} onChange={(event) => setCustomOnly(event.target.checked)} /> Customizable</label>
              <label className="sort-select"><span>Sort:</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="az">A—Z</option></select><ChevronDown size={14} /></label>
            </div>
          </div>
          <div className="category-list" aria-label="Product categories">
            {categories.map((item) => <button key={item} onClick={() => { setCategory(item); setShowAll(false); }} className={category === item ? 'active' : ''}>{item}</button>)}
          </div>
          {visibleProducts.length ? (
            <div className="product-grid">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onDetails={setDetailProduct} onQuote={openQuote} />)}
            </div>
          ) : (
            <div className="empty-state"><Search size={24} /><h3>No products found</h3><p>Try another search or choose a different category.</p><button className="text-link" onClick={() => { setQuery(''); setCategory('All products'); setCustomOnly(false); }}>Clear filters <ArrowRight size={15} /></button></div>
          )}
          {!showAll && !query && category === 'All products' && <button className="button button-outline catalogue-more" onClick={() => setShowAll(true)}>Explore all products <ArrowDown size={15} /></button>}
          <p className="catalogue-disclaimer">Illustrative sample products only. Availability, specifications, and customization options are subject to confirmation.</p>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="section-wrap solutions-inner">
            <div className="section-heading solutions-heading">
              <div><span className="section-index">03 / WHAT WE DO</span><h2>One partner. <span>Many possibilities.</span></h2></div>
              <p>From a single thoughtful gift to a coordinated campaign, let's make your next idea tangible.</p>
            </div>
            <div className="solution-grid">
              {solutions.map(([title, text, Icon], index) => (
                <button className="solution-card" key={title} onClick={() => openQuote()}>
                  <span className="solution-number">0{index + 1}</span><Icon size={23} strokeWidth={1.4} />
                  <h3>{title}</h3><p>{text}</p><span className="solution-link">Discuss your requirements <ArrowUpRight size={14} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section section-wrap">
          <div className="why-title"><span className="section-index">04 / THE UNILINE APPROACH</span><h2>Thoughtful details.<br /><span>Lasting impressions.</span></h2></div>
          <div className="benefits-grid">
            {benefits.map(([title, text], index) => <div className="benefit" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-wrap section-wrap">
            <div className="contact-copy">
              <span className="section-index">05 / LET'S GET STARTED</span>
              <h2>Tell us what<br />you <span>have in mind.</span></h2>
              <p>Share a little about your project. Whether you have a clear brief or are just exploring, we're ready to help you find a direction.</p>
              <div className="contact-divider" />
              <div className="contact-detail"><span className="contact-icon"><Phone size={17} /></span><span><small>CALL OUR OFFICE</small><a href={`tel:${PHONE}`}>+971 4 222 8077</a></span></div>
              <div className="contact-detail"><span className="contact-icon">W</span><span><small>CHAT WITH US</small><WhatsAppLink className="contact-link">Start a WhatsApp enquiry <ArrowUpRight size={13} /></WhatsAppLink></span></div>
              <div className="contact-detail"><span className="contact-icon"><Clock3 size={17} /></span><span><small>FIND US</small><strong>Deira, Dubai, United Arab Emirates</strong></span></div>
              <p className="contact-footnote">Telephone and location details should be verified before publication. Configure the verified WhatsApp business number in <code>src/App.jsx</code> before launch.</p>
            </div>
            <div className="form-panel">
              <div className="form-panel-heading"><div><span className="section-index">ENQUIRY FORM</span><h3>Request a quote</h3></div><span className="form-star">✳</span></div>
              <QuoteForm key={selectedProduct?.id ?? 'general'} selectedProduct={selectedProduct} onClearProduct={() => setSelectedProduct(null)} />
            </div>
          </div>
        </section>

        <section className="closing-banner">
          <div><span>LET'S MAKE SOMETHING MEMORABLE</span><h2>Your brand belongs<br />in good company.</h2></div>
          <button className="button button-gold" onClick={() => openQuote()}>Start a conversation <ArrowUpRight size={17} /></button>
          <div className="closing-decoration">U.</div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-about"><Brand light /><p>Promotional merchandise and branding solutions for meaningful business connections.</p><div className="footer-social"><WhatsAppLink className="footer-whatsapp"><span className="whatsapp-dot">W</span> WhatsApp us <ArrowUpRight size={13} /></WhatsAppLink><a href={`tel:${PHONE}`}><Phone size={14} /> Call us</a></div></div>
          <div className="footer-links"><h4>EXPLORE</h4><a href="#about">About us</a><a href="#products">Product catalogue</a><a href="#solutions">Corporate solutions</a><a href="#contact">Request a quote</a></div>
          <div className="footer-links"><h4>PRODUCTS</h4><a href="#products">Corporate gifts</a><a href="#products">Drinkware</a><a href="#products">Bags &amp; stationery</a><a href="#products">Tech accessories</a></div>
          <div className="footer-contact"><h4>GET IN TOUCH</h4><a href={`tel:${PHONE}`}>+971 4 222 8077 <ArrowUpRight size={13} /></a><p>Deira, Dubai<br />United Arab Emirates</p><span>Email details to be confirmed</span></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} Uniline Promotions. All rights reserved.</span><span>Sample website · Company details to be confirmed</span><a href="#home">Back to top ↑</a></div>
      </footer>
      <div className="mobile-action-bar"><a href={`tel:${PHONE}`} aria-label="Call Uniline Promotions"><Phone size={17} /> Call</a><button onClick={() => openQuote()}>Request a quote <ArrowUpRight size={16} /></button></div>
      <WhatsAppLink className="floating-whatsapp" aria-label="Open a WhatsApp enquiry"><span className="whatsapp-dot">W</span><span>Chat with us</span></WhatsAppLink>
      <ProductModal product={detailProduct} onClose={() => setDetailProduct(null)} onQuote={openQuote} />
    </>
  );
}

export default App;

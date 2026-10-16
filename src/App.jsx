import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, Check, ChevronDown, ChevronLeft, ChevronRight, CircleHelp,
  Clock3, Gift, Menu, PackageCheck, Phone, Search, Send, Sparkles, Tag, X,
} from 'lucide-react';
import { serviceCategories } from './servicesData.js';

const imageLessCategoryStart = serviceCategories.findIndex(({ name }) => name === 'Office Supplies & Stationery');
const imageLessCategories = new Set(
  imageLessCategoryStart >= 0
    ? serviceCategories.slice(imageLessCategoryStart).map(({ name }) => name)
    : [],
);

const PHONE = '+971504940277';
const PHONE_DISPLAY = '+971 50 494 0277';
const EMAIL = 'info@unilineadvertising.ae';
const WHATSAPP_NUMBER = PHONE.replace(/^\+/, '');
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
    image: '/images/corporate-gifts-executive-gift-sets.png', type: 'Gift sets', brandable: true,
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
    image: '/images/corporate-gifts-employee-welcome-kits.png', type: 'Gift sets', brandable: true,
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

const clientLogos = [
  { name: 'Hyatt Place', image: '/images/client-hyatt-place.png' },
  { name: 'Hyatt Regency', image: '/images/client-hyatt-regency.png', dark: true },
  { name: 'Al Maha Desert Resort & Spa', image: '/images/client-al-maha.png' },
  { name: 'Jumeirah Hotels & Resorts', image: '/images/client-jumeirah.png' },
  { name: 'Mandarin Oriental Jumeira, Dubai', image: '/images/client-mandarin-oriental.png' },
  { name: 'One&Only', image: '/images/client-one-and-only.png' },
  { name: 'Atlantis The Royal', image: '/images/client-atlantis-the-royal.png' },
  { name: 'Dubai Golf', image: '/images/client-dubai-golf.png' },
  { name: 'Park Hyatt', image: '/images/client-park-hyatt.png', emphasized: true },
  { name: 'Super General', image: '/images/client-super-general.png' },
  { name: 'Chacha Lahore Restaurant', image: '/images/client-chacha-lahore.png', emphasized: true },
  { name: 'Makhanawala Modern Indian Dhaba', image: '/images/client-makhanawala.png', emphasized: true },
  { name: 'Lads Burgers', image: '/images/client-lads-burgers.png' },
  { name: 'DAMAC', image: '/images/client-damac.png', emphasized: true },
  { name: 'Paramount Hotel Dubai', image: '/images/client-paramount-hotel.png', emphasized: true },
];

const reviewPlaceholders = [
  { quote: 'Excellent service and product quality. We were very happy with the order and look forward to working with them again.', name: 'Ahmed Khan', role: 'Procurement Manager' },
  { quote: 'The team understood our requirements perfectly and delivered a great experience from start to finish.', name: 'Sarah Mitchell', role: 'Marketing Manager' },
  { quote: 'Great quality, professional communication, and a smooth ordering process. We would definitely consider ordering again.', name: 'Omar Hassan', role: 'Operations Manager' },
  { quote: 'Our branded promotional products turned out beautifully. The overall experience was professional and reliable.', name: 'Priya Sharma', role: 'Brand Coordinator' },
  { quote: 'Very pleased with the attention to detail and the quality of the finished products. Highly professional team.', name: 'Daniel Roberts', role: 'Purchasing Manager' },
  { quote: 'The order process was straightforward, and the team was helpful throughout. We appreciate their support.', name: 'Fatima Ali', role: 'Office Manager' },
  { quote: 'Impressive product presentation and consistent quality. We had a positive experience working with the team.', name: 'Michael Joseph', role: 'Corporate Relations Manager' },
  { quote: 'Professional service and a good range of corporate gifting options. The team made the process easy.', name: 'Aisha Rahman', role: 'HR Manager' },
  { quote: 'We were happy with the repeat order experience. Communication was smooth, and the products met our expectations.', name: 'James Wilson', role: 'Procurement Lead' },
  { quote: 'A dependable partner for promotional gifts and branded merchandise. We appreciated the team’s responsiveness and support.', name: 'Maria Fernandes', role: 'Marketing Director' },
];

function imageUrl(id, width = 720, fit = 'crop') {
  if (id.startsWith('/')) return id;
  return `https://images.unsplash.com/${id}?auto=format&fit=${fit}&w=${width}&q=82`;
}

function ClientLogoCarousel() {
  return (
    <section className="client-logos" aria-label="Selected client logos">
      <div className="client-logos-heading">
        <span className="section-index">A FEW OF THE COMPANIES WE'VE WORKED WITH</span>
        <h2>In good company.</h2>
      </div>
      <div className="client-logos-window">
        <div className="client-logos-track">
          {[0, 1].map((copy) => (
            <div className="client-logos-group" key={copy} aria-hidden={copy === 1}>
              {clientLogos.map(({ name, image, dark, emphasized }) => (
                <div className={`client-logo-card${dark ? ' client-logo-card-dark' : ''}${emphasized ? ' client-logo-card-emphasized' : ''}`} key={name}>
                  <img src={image} alt={copy === 0 ? name : ''} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppMark() {
  return (
    <svg className="whatsapp-mark" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3a12.4 12.4 0 0 0-10.6 18.9L4 28l6.3-1.7A12.4 12.4 0 1 0 16 3Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M11.2 9.6c.4-.5.7-.5 1.1-.5h.6c.3 0 .5.1.7.5l1 2.3c.1.3.1.6-.1.8l-.7.9c-.2.2-.2.4-.1.7.3.5.9 1.3 1.6 1.9.8.7 1.5 1.1 2 1.3.3.1.5.1.7-.1l.9-1c.2-.2.4-.3.7-.1l2.2 1.1c.3.2.5.3.5.5 0 .4-.2 1.3-.9 1.9-.6.6-1.5.9-2.2.9s-1.3-.1-2.2-.5c-1-.4-2.1-1-3.5-2.2-1.1-1-1.9-2.2-2.4-3.1-.5-.9-.7-1.8-.7-2.4 0-1 .3-1.8.9-2.4Z" fill="currentColor" />
    </svg>
  );
}

function ReviewsCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const scrollReviews = useCallback((direction) => {
    const track = trackRef.current;
    const card = track?.querySelector('.review-card');
    if (!track || !card) return;

    const step = card.getBoundingClientRect().width + (Number.parseFloat(getComputedStyle(track).gap) || 0);
    const maxScroll = track.scrollWidth - track.clientWidth;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

    if (direction > 0 && track.scrollLeft + step >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior });
    } else if (direction < 0 && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxScroll, behavior });
    } else {
      track.scrollBy({ left: direction * step, behavior });
    }
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const interval = window.setInterval(() => scrollReviews(1), 5500);
    return () => window.clearInterval(interval);
  }, [paused, scrollReviews]);

  return (
    <section
      className="reviews-section section-wrap"
      aria-labelledby="reviews-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="reviews-heading">
        <div>
          <span className="section-index">CLIENT FEEDBACK</span>
          <h2 id="reviews-heading">What our clients say about our service</h2>
          <p className="reviews-disclaimer">These are clearly marked placeholders, not real client testimonials. Replace them only with approved feedback.</p>
        </div>
        <div className="reviews-controls">
          <button type="button" aria-label="Previous review" onClick={() => scrollReviews(-1)}><ChevronLeft size={18} /></button>
          <button type="button" aria-label="Next review" onClick={() => scrollReviews(1)}><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="review-carousel">
        <div className="review-carousel-track" ref={trackRef} role="region" aria-label="Placeholder client reviews" tabIndex={0}>
          {reviewPlaceholders.map(({ name, role, quote }) => (
            <article className="review-card" key={name}>
              <p className="review-quote">“{quote}”</p>
              <p className="review-author"><strong>{name}</strong><span>{role}</span></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStatNumber({ value, decimals = 0, suffix = '' }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const element = document.querySelector('.business-stats');
    if (!element) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setCurrentValue(value);
      return undefined;
    }

    let frame = 0;
    let started = false;
    let observer;
    const duration = 1400;
    const animate = (startTime) => (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;
      setCurrentValue(Math.round(value * easedProgress * 10 ** decimals) / 10 ** decimals);
      if (progress < 1) frame = window.requestAnimationFrame(animate(startTime));
    };

    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      frame = window.requestAnimationFrame((startTime) => animate(startTime)(startTime));
    }, { threshold: 0.35 });
    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value, decimals]);

  return <>{currentValue.toFixed(decimals)}{suffix}</>;
}

function makeWhatsAppUrl(message) {
  const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(message)}`;
}

function WhatsAppLink({ product, className = '', children, ...props }) {
  const message = product
    ? `Hello Uniline Promotions, I would like to enquire about ${product.name} (${product.id}). Please share your pricing, available branding options, and bulk-order details.`
    : 'Hello Uniline Promotions, I would like to know more about your corporate gifts and promotional merchandise. Please assist me with your catalogue and quotation.';
  const isFloating = className.split(/\s+/).includes('floating-whatsapp');
  return (
    <a className={`${className}${isFloating ? '' : ' whatsapp-cta'}`} href={makeWhatsAppUrl(message)} target="_blank" rel="noreferrer" {...props}>
      {!isFloating && <WhatsAppMark />}
      {children}
    </a>
  );
}

function Brand({ light = false, href = '/', onClick }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href={href} onClick={onClick} aria-label="Uniline Promotions home">
      <img src="/images/uniline-logo.png" alt="Uniline Promotional Gifts L.L.C." />
    </a>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <span className="section-index">404 / PAGE NOT FOUND</span>
      <h1>This page isn’t here.</h1>
      <p>The link may be outdated. Visit the homepage or browse our product catalogue.</p>
      <div>
        <a className="button button-dark" href="/">Go to homepage <ArrowRight size={16} /></a>
        <a className="button button-outline" href="/products">Browse products <ArrowRight size={16} /></a>
      </div>
    </main>
  );
}

function Header({ onQuote, onProducts, onHome, isProductsPage }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const navigateHome = (section) => (event) => {
    event.preventDefault();
    closeMenu();
    onHome(section);
  };
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand onClick={navigateHome('home')} />
        <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="/#about" onClick={navigateHome('about')}>About Us</a>
          <a href="/products" aria-current={isProductsPage ? 'page' : undefined} onClick={(event) => { event.preventDefault(); closeMenu(); onProducts(); }}>Products</a>
          <a href="/#approach" onClick={navigateHome('approach')}>Solutions</a>
          <a
            href="/products?category=Product%20Customization%20%26%20Branding%20Services"
            onClick={(event) => { event.preventDefault(); closeMenu(); onProducts('Product Customization & Branding Services'); }}
          >
            Printing &amp; Branding
          </a>
          <a href="/#contact" onClick={navigateHome('contact')}>Contact</a>
          <WhatsAppLink className="nav-whatsapp" onClick={closeMenu}>WhatsApp Us</WhatsAppLink>
          <button className="button button-dark nav-quote" onClick={() => { closeMenu(); onQuote(); }}>Request a Quote <ArrowUpRight size={15} /></button>
        </nav>
      </div>
    </header>
  );
}

function ProductsPage({ activeCategory, onCategoryChange, search, onSearchChange, items, onEnquire }) {
  const [itemsToShow, setItemsToShow] = useState(20);

  useEffect(() => {
    setItemsToShow(20);
  }, [activeCategory, search]);

  const visibleItems = items.slice(0, itemsToShow);

  return (
    <main className="products-page">
      <section className="products-page-hero">
        <div className="products-page-hero-content">
          <span className="eyebrow"><span className="eyebrow-line" /> THE UNILINE COLLECTION</span>
          <h1>Products &amp; services,<br /><span>thoughtfully detailed.</span></h1>
          <p>Browse the complete range of promotional merchandise and branding services. Search by item or filter by category, then enquire about customization and a quote.</p>
          <div className="products-page-total"><strong>{serviceCategories.reduce((total, category) => total + category.products.length, 0)}</strong> category listings <i /> <strong>{serviceCategories.length}</strong> categories</div>
        </div>
      </section>
      <section className="products-page-catalogue section-wrap">
        <div className="products-page-toolbar">
          <label className="services-search products-page-search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search all products and services..."
              aria-label="Search all products and services"
            />
            {search && <button type="button" aria-label="Clear catalogue search" onClick={() => onSearchChange('')}><X size={15} /></button>}
          </label>
          <div className="products-page-result-count" aria-live="polite">
            Showing {visibleItems.length} of {items.length} {items.length === 1 ? 'item' : 'items'}
          </div>
        </div>
        <div className="products-page-filters" role="group" aria-label="Filter by category">
          <button className={activeCategory === 'All items' ? 'active' : ''} aria-pressed={activeCategory === 'All items'} onClick={() => onCategoryChange('All items')}>View All Items</button>
          {serviceCategories.map((category) => (
            <button
              key={category.name}
              className={activeCategory === category.name ? 'active' : ''}
              aria-pressed={activeCategory === category.name}
              onClick={() => onCategoryChange(category.name)}
            >
              {category.name} <span>{category.products.length}</span>
            </button>
          ))}
        </div>
        {items.length ? (
          <div className="service-items-grid products-page-grid">
            {visibleItems.map(({ product, category }) => (
              <ServiceItemCard key={product.id} product={product} category={category} onEnquire={onEnquire} />
            ))}
          </div>
        ) : (
          <div className="service-items-empty products-page-empty">
            <Search size={22} />
            <h4>No matching items</h4>
            <p>Try a different search term or select another category.</p>
            <button className="text-link" onClick={() => { onSearchChange(''); onCategoryChange('All items'); }}>View all items <ArrowRight size={15} /></button>
          </div>
        )}
        {visibleItems.length < items.length && (
          <button className="button button-outline products-page-more" onClick={() => setItemsToShow((count) => count + 20)}>
            Show more items <ArrowDown size={15} />
          </button>
        )}
      </section>
    </main>
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

function ServiceItemCard({ product, category, onEnquire }) {
  const showProductImage = !imageLessCategories.has(category);
  const hasRevealImage = showProductImage && (product.image.startsWith('/images/drinkware-')
    || product.image.startsWith('/images/bags-')
    || product.image.startsWith('/images/corporate-gifts-'));

  return (
    <article className="service-item-card catalogue-product-card">
      {hasRevealImage && (
        <div className="catalogue-image-preview">
          <div className="service-item-image">
            <img
              src={imageUrl(product.image, 600, 'max')}
              alt={`Representative image for ${product.name}`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.hidden = true;
                event.currentTarget.parentElement.classList.add('service-image-fallback');
              }}
            />
          </div>
        </div>
      )}
      {showProductImage && !hasRevealImage && (
        <div className="service-item-image">
          <img
            src={imageUrl(product.image, 600, 'max')}
            alt={`Representative image for ${product.name}`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.hidden = true;
              event.currentTarget.parentElement.classList.add('service-image-fallback');
            }}
          />
          {product.type === 'service' && <span className="service-type-badge">SERVICE</span>}
        </div>
      )}
      <div className="service-item-content">
        <div className="service-item-reference">REF. {product.reference}</div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <span className="service-customization">{product.customization}</span>
        <button className="service-enquire" onClick={() => onEnquire(product, category)}>
          Enquire Now <ArrowUpRight size={15} />
        </button>
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
        <img className="modal-image" src={imageUrl(product.image, 1000, 'max')} alt={`${product.name} sample`} />
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
            <WhatsAppLink product={product} className="button">Ask on WhatsApp</WhatsAppLink>
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
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    if (!email && !phone) {
      setContactError('Please provide either a business email or a phone number.');
      form.elements.email.focus();
      return;
    }
    if (phone && !/^\+?[0-9][0-9\s().-]{6,19}$/.test(phone)) {
      setContactError('Enter a valid phone number, including country code if needed.');
      form.elements.phone.focus();
      return;
    }
    setContactError('');
    const enquiryDetails = [...formData.entries()]
      .filter(([name]) => name !== 'consent')
      .map(([name, value]) => `${name.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())}: ${value}`)
      .join('\n');
    const subject = `Website enquiry from ${formData.get('name').trim()}`;
    const body = `New enquiry from the Uniline Promotions website\n\n${enquiryDetails}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('email');
  };
  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="email-notice"><Send size={17} /><span>Your email app will open with your enquiry addressed to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Review it there and press Send.</span></div>
      {status === 'email' && <div className="form-message" role="status">Your email app should open with the enquiry ready to send. If it does not, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</div>}
      {selectedProduct && (
        <div className="selected-product">
          <span>Enquiring about</span><strong>{selectedProduct.name} <small>REF. {selectedProduct.id}</small></strong>
          <button type="button" onClick={onClearProduct} aria-label="Remove selected product"><X size={16} /></button>
        </div>
      )}
      <div className="form-grid">
        <label>Full name <em>*</em><input required name="name" autoComplete="name" placeholder="Your name" /></label>
        <label>Company name <em>*</em><input required name="company" autoComplete="organization" placeholder="Company name" /></label>
        <label>Business email <input type="email" name="email" autoComplete="email" placeholder="name@company.com" onChange={() => setContactError('')} /></label>
        <label>Phone number <input type="tel" name="phone" autoComplete="tel" placeholder="+971 ..." onChange={() => setContactError('')} /></label>
        {contactError && <div className="form-wide inline-error" role="alert">{contactError}</div>}
        <label>WhatsApp number <input type="tel" name="whatsapp" autoComplete="tel" placeholder="+971 ..." /></label>
        <label>Product category
          <select name="category" defaultValue={selectedProduct?.category ?? ''}>
            <option value="">Select a category</option>
            {selectedProduct?.category && !categories.includes(selectedProduct.category) && <option>{selectedProduct.category}</option>}
            {categories.slice(1).map((category) => <option key={category}>{category}</option>)}
          </select>
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
      <button className="button button-gold form-submit" type="submit">Prepare email enquiry <Send size={16} /></button>
      <p className="privacy-note">Your details are included only in the email draft. Required fields are marked *.</p>
    </form>
  );
}

function QuoteDialog({ selectedProduct, onClose, onClearProduct }) {
  const dialogRef = React.useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('input[name="name"]')?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className="quote-dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="quote-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-dialog-title"
        ref={dialogRef}
      >
        <div className="quote-dialog-heading">
          <div>
            <span className="section-index">ENQUIRY FORM</span>
            <h2 id="quote-dialog-title">Request a quote</h2>
            <p>Tell us a little about what you need and we’ll be in touch.</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close enquiry form">
            <X size={19} />
          </button>
        </div>
        <QuoteForm
          key={`dialog-${selectedProduct?.id ?? 'general'}-${selectedProduct?.category ?? ''}`}
          selectedProduct={selectedProduct}
          onClearProduct={onClearProduct}
        />
      </section>
    </div>
  );
}

function App() {
  const initialPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const initialCategory = new URLSearchParams(window.location.search).get('category');
  const initialServiceCategory = serviceCategories.some((category) => category.name === initialCategory)
    ? initialCategory
    : 'All items';
  const initialPage = initialPath === '/' ? 'home' : initialPath === '/products' ? 'products' : 'notFound';
  const [page, setPage] = useState(initialPage);
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
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [serviceSearch, setServiceSearch] = useState('');
  const [activeServiceCategory, setActiveServiceCategory] = useState(
    initialPath === '/products' ? initialServiceCategory : null,
  );
  const closeQuoteDialog = useCallback(() => setQuoteDialogOpen(false), []);

  useEffect(() => {
    if (window.location.pathname !== initialPath && (initialPath === '/' || initialPath === '/products')) {
      window.history.replaceState({}, '', `${initialPath}${window.location.search}${window.location.hash}`);
    }
  }, [initialPath]);

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
      ['.product-grid > .product-card, .service-item-card', 0],
      ['.service-items-empty', 0],
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
      }, { threshold: 0.08, rootMargin: '0px 0px 100px 0px' });
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

  const openQuote = (product = null, productCategory = null) => {
    setSelectedProduct(product ? { ...product, category: productCategory ?? product.category ?? '' } : null);
    setDetailProduct(null);
    setQuoteDialogOpen(true);
  };

  const navigateToProducts = (selectedCategory = 'All items') => {
    const category = serviceCategories.some((item) => item.name === selectedCategory) ? selectedCategory : 'All items';
    const search = category === 'All items' ? '' : `?category=${encodeURIComponent(category)}`;
    window.history.pushState({}, '', `/products${search}`);
    setPage('products');
    setActiveServiceCategory(category);
    setServiceSearch('');
    setShowAll(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (section = 'home') => {
    const targetSection = section || 'home';
    window.history.pushState({}, '', `/#${targetSection}`);
    setPage('home');
    window.setTimeout(() => {
      if (targetSection === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
      const isProductsPage = pathname === '/products';
      if ((pathname === '/' || isProductsPage) && pathname !== window.location.pathname) {
        window.history.replaceState({}, '', `${pathname}${window.location.search}${window.location.hash}`);
      }
      setPage(pathname === '/' ? 'home' : isProductsPage ? 'products' : 'notFound');
      const requestedCategory = new URLSearchParams(window.location.search).get('category');
      setActiveServiceCategory(isProductsPage
        ? (serviceCategories.some((category) => category.name === requestedCategory) ? requestedCategory : 'All items')
        : null);
      setServiceSearch('');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = page === 'products'
      ? 'Products & Services | Uniline Promotions'
      : page === 'notFound'
        ? 'Page Not Found | Uniline Promotions'
        : 'Uniline Promotions | Corporate Gifts & Branding Solutions';
  }, [page]);

  const visibleProducts = showAll || query || category !== 'All products' ? filteredProducts : filteredProducts.slice(0, 8);
  const visibleServiceItems = useMemo(() => {
    if (!activeServiceCategory && !serviceSearch.trim()) return [];
    const selectedGroups = activeServiceCategory && activeServiceCategory !== 'All items'
      ? serviceCategories.filter((group) => group.name === activeServiceCategory)
      : serviceCategories;
    const seen = new Set();
    const search = serviceSearch.trim().toLowerCase();
    return selectedGroups.flatMap((group) => group.products.map((product) => ({ product, category: group.name })))
      .filter(({ product }) => {
        if (seen.has(product.id)) return false;
        seen.add(product.id);
        return !search || `${product.name} ${product.description} ${product.reference} ${product.categories.join(' ')}`.toLowerCase().includes(search);
      });
  }, [activeServiceCategory, serviceSearch]);

  return (
    <>
      <Header
        onQuote={() => openQuote()}
        onProducts={(selectedCategory) => navigateToProducts(selectedCategory)}
        onHome={navigateHome}
        isProductsPage={page === 'products'}
      />
      {page === 'products' ? (
        <ProductsPage
          activeCategory={activeServiceCategory ?? 'All items'}
          onCategoryChange={(selectedCategory) => {
            setActiveServiceCategory(selectedCategory);
            const search = selectedCategory === 'All items' ? '' : `?category=${encodeURIComponent(selectedCategory)}`;
            window.history.replaceState({}, '', `/products${search}`);
          }}
          search={serviceSearch}
          onSearchChange={setServiceSearch}
          items={visibleServiceItems}
          onEnquire={openQuote}
        />
      ) : page === 'notFound' ? <NotFoundPage /> : (
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
              <a className="button button-gold" href="/products" onClick={(event) => { event.preventDefault(); navigateToProducts(); }}>Explore our catalogue <ArrowRight size={17} /></a>
              <button className="button button-white" onClick={() => openQuote()}>Request a quote <ArrowUpRight size={16} /></button>
              <WhatsAppLink className="button">Chat on WhatsApp</WhatsAppLink>
            </div>
            <div className="hero-trust"><span>Corporate gifting</span><i /> <span>Promotional merchandise</span><i /> <span>Printing &amp; branding</span></div>
            <a className="hero-scroll" href="#about"><span>SCROLL TO DISCOVER</span><ArrowDown size={14} /></a>
          </div>
        </section>

        <section className="business-stats" aria-label="Business highlights">
          <div className="business-stats-inner">
            <div className="business-stat">
              <strong aria-hidden="true"><AnimatedStatNumber value={30} suffix="+" /></strong>
              <span>Years of excellence</span>
            </div>
            <div className="business-stat">
              <strong aria-hidden="true"><AnimatedStatNumber value={100} suffix="+" /></strong>
              <span>Companies served</span>
            </div>
            <div className="business-stat business-stat-rating" role="img" aria-label="Customer rating: 4.6 out of 5">
              <strong aria-hidden="true"><AnimatedStatNumber value={4.6} decimals={1} /></strong>
              <span className="business-rating-stars" aria-hidden="true">★★★★★</span>
              <span>Customer rating out of 5</span>
            </div>
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

        <ClientLogoCarousel />

        <section className="intro section-wrap" id="about">
          <div className="intro-aside"><span className="section-index">01 / WHO WE ARE</span><span className="gold-rule" /></div>
          <div className="intro-main">
            <h2>Helping businesses build<br />stronger <span>brand connections.</span></h2>
            <div className="intro-body">
              <p>Uniline Promotions provides promotional merchandise, corporate gifting, and branding solutions designed to help businesses present their brands consistently and professionally.</p>
              <p>From customized products to corporate gifting requirements, we help businesses explore practical solutions for their promotional needs.</p>
              <a className="text-link" href="/products">Discover what we do <ArrowRight size={15} /></a>
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

        <section className="why-section section-wrap" id="approach">
          <div className="why-title"><span className="section-index">03 / THE UNILINE APPROACH</span><h2>Thoughtful details.<br /><span>Lasting impressions.</span></h2></div>
          <div className="benefits-grid">
            {benefits.map(([title, text], index) => <div className="benefit" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <ReviewsCarousel />

        <section className="contact-section" id="contact">
          <div className="contact-wrap section-wrap">
            <div className="contact-copy">
              <span className="section-index">04 / LET'S GET STARTED</span>
              <h2>Tell us what<br />you <span>have in mind.</span></h2>
              <p>Share a little about your project. Whether you have a clear brief or are just exploring, we're ready to help you find a direction.</p>
              <div className="contact-divider" />
              <div className="contact-detail"><span className="contact-icon"><Phone size={17} /></span><span><small>CALL OUR OFFICE</small><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></span></div>
              <div className="contact-detail"><span className="contact-icon">W</span><span><small>CHAT WITH US</small><WhatsAppLink className="contact-link">Chat on WhatsApp</WhatsAppLink></span></div>
              <div className="contact-detail"><span className="contact-icon"><Clock3 size={17} /></span><span><small>FIND US</small><strong>310, Zakir Business Centre,<br />Abu Hail, Deira</strong></span></div>
              <div className="contact-detail"><span className="contact-icon"><Send size={16} /></span><span><small>EMAIL OUR TEAM</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
            </div>
            <div className="form-panel">
              <div className="form-panel-heading"><div><span className="section-index">ENQUIRY FORM</span><h3>Request a quote</h3></div><span className="form-star">✳</span></div>
              <QuoteForm key={`${selectedProduct?.id ?? 'general'}-${selectedProduct?.category ?? ''}`} selectedProduct={selectedProduct} onClearProduct={() => setSelectedProduct(null)} />
            </div>
          </div>
        </section>

        <section className="closing-banner">
          <div><span>LET'S MAKE SOMETHING MEMORABLE</span><h2>Your brand belongs<br />in good company.</h2></div>
          <button className="button button-gold" onClick={() => openQuote()}>Start a conversation <ArrowUpRight size={17} /></button>
          <div className="closing-decoration">U.</div>
        </section>
      </main>
      )}
      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-about"><Brand light /><p>Promotional merchandise and branding solutions for meaningful business connections.</p><div className="footer-social"><WhatsAppLink className="footer-whatsapp">Chat on WhatsApp</WhatsAppLink><a href={`tel:${PHONE}`}><Phone size={14} /> Call us</a></div></div>
          <div className="footer-links"><h4>EXPLORE</h4><a href="/#about">About us</a><a href="/products">Product catalogue</a><a href="/#approach">Corporate solutions</a><button className="footer-link-button" onClick={() => openQuote()}>Request a quote</button></div>
          <div className="footer-links"><h4>PRODUCTS</h4><a href="/products?category=Corporate%20Gifts%20%26%20Executive%20Gifts">Corporate gifts</a><a href="/products?category=Drinkware">Drinkware</a><a href="/products?category=Bags%20%26%20Promotional%20Merchandise">Bags &amp; merchandise</a><a href="/products?category=Technology%20%26%20Electronic%20Accessories">Tech accessories</a></div>
          <div className="footer-contact"><h4>GET IN TOUCH</h4><a href={`tel:${PHONE}`}>{PHONE_DISPLAY} <ArrowUpRight size={13} /></a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><address>310, Zakir Business Centre,<br />Abu Hail, Deira</address></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} Uniline Promotions. All rights reserved.</span><span>Corporate gifts and branding solutions · Dubai, UAE</span><a href="/">Back to top ↑</a></div>
      </footer>
      <div className="mobile-action-bar"><a href={`tel:${PHONE}`} aria-label="Call Uniline Promotions"><Phone size={17} /> Call</a><button onClick={() => openQuote()}>Request a quote <ArrowUpRight size={16} /></button></div>
      <WhatsAppLink className="floating-whatsapp" aria-label="Chat with Uniline on WhatsApp"><WhatsAppMark /></WhatsAppLink>
      <ProductModal product={detailProduct} onClose={() => setDetailProduct(null)} onQuote={openQuote} />
      {quoteDialogOpen && (
        <QuoteDialog
          selectedProduct={selectedProduct}
          onClose={closeQuoteDialog}
          onClearProduct={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;

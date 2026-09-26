const MENU = [
  // HOT - CLASSICS
  {n:'Espresso Italiano', c:'hot', s:'Classics', p:69, note:'S · 30 ml'},
  {n:'Espresso Americano', c:'hot', s:'Classics', m:109, l:139},
  {n:'Cappuccino', c:'hot', s:'Classics', m:119, l:149, rec:true},
  {n:'Cafe Latte', c:'hot', s:'Classics', m:129, l:159},
  {n:'Flat White', c:'hot', s:'Classics', m:129, l:159},
  {n:'Cafe Mocha Special', c:'hot', s:'Classics', m:149, l:189},

  // HOT - CHAI
  {n:'Kadak Chai', c:'hot', s:'Chai', m:79, rec:true},
  {n:'Green Tea', c:'hot', s:'Chai', m:99},
  {n:'Black Tea', c:'hot', s:'Chai', m:99},
  {n:'Lemon Tea', c:'hot', s:'Chai', m:99},

  // HOT - INDULGENCE RANGE
  {n:'Espresso Americano (Honey)', c:'hot', s:'Indulgence Range', m:119, l:149},
  {n:'Flavoured Cappuccino', c:'hot', s:'Indulgence Range', note:'Hazelnut · Vanilla · Caramel · Cinnamon', m:149, l:179},
  {n:'Choco Chip Affogato', c:'hot', s:'Indulgence Range', m:149, l:179},
  {n:'Caramel Macchiato', c:'hot', s:'Indulgence Range', m:169, l:199},
  {n:'Flavoured Cafe Latte', c:'hot', s:'Indulgence Range', note:'Hazelnut · Vanilla · Caramel · Cinnamon', m:169, l:199},
  {n:'Hazelnut Mocha', c:'hot', s:'Indulgence Range', m:159, l:189, rec:true},
  {n:'Nutella Latte', c:'hot', s:'Indulgence Range', m:179, l:209},
  {n:'Bournvita', c:'hot', s:'Indulgence Range', m:139, l:169},
  {n:'Dark Hot Chocolate', c:'hot', s:'Indulgence Range', m:149, l:179},
  {n:'French Rose Latte', c:'hot', s:'Indulgence Range', m:179, note:'M · 200 ml'},

  // COLD - CLASSICS
  {n:'Iced Espresso', c:'cold', s:'Cold Classics', m:89, note:'M · 300 ml'},
  {n:'Iced Americano', c:'cold', s:'Cold Classics', m:119, l:149},
  {n:'Iced Latte', c:'cold', s:'Cold Classics', m:139, l:169},
  {n:'Cold Chocolate', c:'cold', s:'Cold Classics', m:169, l:199, rec:true},
  {n:'Iced Caramel Macchiato', c:'cold', s:'Cold Classics', m:179, l:199},

  // COLD - SHAKES
  {n:'Banana Shake', c:'cold', s:'Shakes', m:179, l:219},
  {n:'Strawberry Shake', c:'cold', s:'Shakes', m:179, l:219},
  {n:'Vanilla Shake', c:'cold', s:'Shakes', m:189, l:229},
  {n:'Dark Chocolate Shake', c:'cold', s:'Shakes', m:189, l:229},
  {n:'Chocolate Brownie Shake', c:'cold', s:'Shakes', m:199, l:239},
  {n:'Kitkat Shake', c:'cold', s:'Shakes', m:199, l:239, rec:true},
  {n:'Oreo Shake', c:'cold', s:'Shakes', m:199, l:239, rec:true},
  {n:'Blueberry Shake', c:'cold', s:'Shakes', m:199, l:239},
  {n:'Nutella Shake', c:'cold', s:'Shakes', m:229, l:269},

  // COLD - FRAPPES
  {n:'Classic Frappe', c:'cold', s:'Frappes', m:179, l:219},
  {n:'Caramel Frappe', c:'cold', s:'Frappes', m:199, l:239},
  {n:'Vanilla Frappe', c:'cold', s:'Frappes', m:199, l:239},
  {n:'Choco Hazelnut Frappe', c:'cold', s:'Frappes', m:219, l:259, rec:true},
  {n:'Mocha Frappe', c:'cold', s:'Frappes', m:219, l:259},
  {n:'Choco Chip Frappe', c:'cold', s:'Frappes', m:219, l:259},
  {n:'Nutella Frappe', c:'cold', s:'Frappes', m:239, l:289},
  {n:'Mango Frappe', c:'cold', s:'Frappes', m:199, note:'M · 300 ml'},

  // COLD - MOCKTAILS / ICED TEA / COOLERS / CHILLERS
  {n:'Classic Mojito', c:'cold', s:'Mocktails', l:179, note:'L · 370 ml'},
  {n:'Blue Lagoon Mojito', c:'cold', s:'Mocktails', l:199, note:'L · 370 ml', rec:true},
  {n:'Green Apple Mojito', c:'cold', s:'Mocktails', l:199, note:'L · 370 ml'},
  {n:'Cranberry Mojito', c:'cold', s:'Mocktails', l:199, note:'L · 370 ml'},
  {n:'Lemon Iced Tea', c:'cold', s:'Iced Tea', m:149, note:'M · 300 ml'},
  {n:'Peach Iced Tea', c:'cold', s:'Iced Tea', m:179, note:'M · 300 ml'},
  {n:'Aam Panna Cooler', c:'cold', s:'Coolers', m:149, note:'M · 300 ml'},
  {n:'Classic Lemon Soda', c:'cold', s:'Coolers', m:169, note:'M · 300 ml'},
  {n:'Orange Granita', c:'cold', s:'Chillers', m:179, note:'M · 300 ml'},
  {n:'Grape Fruit Granita', c:'cold', s:'Chillers', m:179, note:'M · 300 ml'},
  {n:'Peach Granita', c:'cold', s:'Chillers', m:179, note:'M · 300 ml'},
  {n:'Watermelon Cooler', c:'cold', s:'Chillers', m:179, note:'M · 300 ml'},
  {n:'Blueberry Cooler', c:'cold', s:'Chillers', m:179, note:'M · 300 ml'},

  // FOOD - FINGER FOOD & WRAPS
  {n:'Veg Puff', c:'food', s:'Finger Food', p:99},
  {n:'Harabhara Kebab (6 pcs)', c:'food', s:'Finger Food', p:109, rec:true},
  {n:'Falafel Kebab (6 pcs)', c:'food', s:'Finger Food', p:109},
  {n:'French Fries', c:'food', s:'Finger Food', p:109, rec:true},
  {n:'Veg Spring Rolls (4 pcs)', c:'food', s:'Finger Food', p:119},
  {n:'Cheese Garlic Bread', c:'food', s:'Finger Food', p:129},
  {n:'Peri Peri Fries', c:'food', s:'Finger Food', p:139},
  {n:'Three Pepper Toastie', c:'food', s:'Finger Food', p:149, rec:true},
  {n:'Cheese Fries', c:'food', s:'Finger Food', p:159},
  {n:'Paneer Tikka Wrap', c:'food', s:'Wraps', p:209, rec:true},
  {n:'Harabhara Veg Wrap', c:'food', s:'Wraps', p:169},

  // FOOD - MOMOS / MAGGI / PIZZA / BURGERS / SANDWICHES
  {n:'Steamed Veg Momos (6 pcs)', c:'food', s:'Momos', p:109},
  {n:'Fried Veg Momos (6 pcs)', c:'food', s:'Momos', p:119},
  {n:'Steamed Paneer Momos (6 pcs)', c:'food', s:'Momos', p:139},
  {n:'Fried Paneer Momos (6 pcs)', c:'food', s:'Momos', p:149},
  {n:'Masala Maggi', c:'food', s:'Maggi', p:109},
  {n:'Cheese Maggi', c:'food', s:'Maggi', p:149},
  {n:'Farmhouse Veg Pizza', c:'food', s:'Pizzas', p:239},
  {n:'Veg Burger with Fries', c:'food', s:'Burgers', p:159},
  {n:'Double Tikki Veg Burger', c:'food', s:'Burgers', p:239, rec:true},
  {n:'Spinach Corn Sandwich', c:'food', s:'Sandwiches', p:149},
  {n:'Paneer Tikka Sandwich', c:'food', s:'Sandwiches', p:179, rec:true},
  {n:'Bombay Style Sandwich', c:'food', s:'Sandwiches', p:209},
  {n:'Chilli Cheese Sandwich', c:'food', s:'Sandwiches', p:119},

  // SWEET - BAKERY
  {n:'Walnut Brownie', c:'sweet', s:'Bakery', p:149, rec:true},
  {n:'Chocolava Cup Cake', c:'sweet', s:'Bakery', p:159},
  {n:'Chocochip Muffin', c:'sweet', s:'Bakery', p:169},
  {n:'Blueberry Muffin', c:'sweet', s:'Bakery', p:169},
  {n:'Almond Muffin', c:'sweet', s:'Bakery', p:169},
  {n:'Brownie Sizzler', c:'sweet', s:'Bakery', p:239, rec:true},

  // SWEET - WAFFLES
  {n:'Strawberry Waffle', c:'sweet', s:'Waffles', p:129},
  {n:'Chocolate Waffle', c:'sweet', s:'Waffles', p:129},
  {n:'Chocolate Fudge Waffle', c:'sweet', s:'Waffles', p:149},
  {n:'Maple Waffle', c:'sweet', s:'Waffles', p:149},
  {n:'Kitkat Waffle', c:'sweet', s:'Waffles', p:149, rec:true},
  {n:'Blueberry Waffle', c:'sweet', s:'Waffles', p:149},
  {n:'Peanut Butter Waffle', c:'sweet', s:'Waffles', p:149},
  {n:'Chocolate Brownie Waffle', c:'sweet', s:'Waffles', p:149},
  {n:'Nutella Waffle', c:'sweet', s:'Waffles', p:169},
  {n:'Nutella Brownie Waffle', c:'sweet', s:'Waffles', p:209, rec:true},
  {n:'Nutella Banana Waffle', c:'sweet', s:'Waffles', p:209}
];

const grid = document.querySelector('#menuGrid');
const count = document.querySelector('#menuCount');
const search = document.querySelector('#menuSearch');
const tabs = [...document.querySelectorAll('.menu-tab')];
let category = 'all';
let menuExpanded = false;

function priceHTML(item){
  if (item.p) return `<span class="price-pill"><b>₹${item.p}</b></span>`;
  return `${item.m ? `<span class="price-pill"><em>M</em><b>₹${item.m}</b></span>` : ''}${item.l ? `<span class="price-pill"><em>L</em><b>₹${item.l}</b></span>` : ''}`;
}

function renderMenu(){
  const q = search.value.trim().toLowerCase();
  let items;
  if (!menuExpanded && !q && category === 'all') {
    const preferred = ['Cappuccino','Hazelnut Mocha','Cold Chocolate','Double Tikki Veg Burger','Paneer Tikka Sandwich','Brownie Sizzler'];
    items = preferred.map(name => MENU.find(item => item.n === name)).filter(Boolean);
  } else {
    items = MENU.filter(item => (category === 'all' || item.c === category) && (!q || `${item.n} ${item.s} ${item.note || ''}`.toLowerCase().includes(q)));
  }
  count.textContent = menuExpanded ? `${items.length} item${items.length === 1 ? '' : 's'}` : 'A few favourites';
  grid.innerHTML = items.length ? items.map(item => `
    <article class="menu-item ${item.rec ? 'recommended' : ''}">
      <div class="menu-item-top">
        <small>${item.s}</small>
        <h3>${item.n}</h3>
      </div>
      <div class="menu-item-bottom">
        <span class="menu-item-note">${item.note || ''}</span>
        <div class="menu-item-order">
          <div class="menu-prices">${priceHTML(item)}</div>
          <button class="add-order-btn" type="button" data-add-item="${encodeURIComponent(item.n)}">+ Add</button>
        </div>
      </div>
    </article>`).join('') : `<div class="empty-state">No menu item matched “${search.value.replace(/[<>]/g,'')}”. Try another search.</div>`;
}

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  category = tab.dataset.category;
  renderMenu();
}));
search.addEventListener('input', renderMenu);

const menuSection = document.querySelector('#menu');
const fullMenuControls = document.querySelector('#fullMenuControls');
const menuExpandBtn = document.querySelector('#menuExpandBtn');
const menuExpandLabel = menuExpandBtn?.querySelector('.menu-expand-label');

function setMenuExpanded(expanded){
  menuExpanded = expanded;
  menuSection?.classList.toggle('menu-expanded', expanded);
  fullMenuControls?.classList.toggle('open', expanded);
  fullMenuControls?.setAttribute('aria-hidden', expanded ? 'false' : 'true');
  menuExpandBtn?.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  if (menuExpandLabel) menuExpandLabel.textContent = expanded ? 'Show less' : 'View full menu';
  if (!expanded) {
    category = 'all';
    tabs.forEach((t, i) => t.classList.toggle('active', i === 0));
    search.value = '';
  }
  renderMenu();
}

menuExpandBtn?.addEventListener('click', () => {
  const next = !menuExpanded;
  setMenuExpanded(next);
  if (!next) menuSection?.scrollIntoView({behavior:'smooth', block:'start'});
});

renderMenu();

// Navigation + progress
const header = document.querySelector('#header');
const progress = document.querySelector('#progress');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, {passive:true});

// Mobile nav
const toggle = document.querySelector('#menuToggle');
const mobileNav = document.querySelector('#mobileNav');
function setMobile(open){
  mobileNav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true');
  toggle.querySelectorAll('i')[0].style.transform = open ? 'translateY(3.5px) rotate(45deg)' : '';
  toggle.querySelectorAll('i')[1].style.transform = open ? 'translateY(-3.5px) rotate(-45deg)' : '';
}
toggle.addEventListener('click', () => setMobile(!mobileNav.classList.contains('open')));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMobile(false)));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target); }
  });
}, {threshold:.12, rootMargin:'0px 0px -30px'});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Preloader
window.addEventListener('load', () => setTimeout(() => document.querySelector('#preloader').classList.add('hide'), 350));
setTimeout(() => document.querySelector('#preloader')?.classList.add('hide'), 2300);

// Gentle parallax for hero only
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY, window.innerHeight);
    const bg = document.querySelector('.hero-bg');
    if(bg) bg.style.objectPosition = `56% calc(50% + ${y * .035}px)`;
  }, {passive:true});
}

document.querySelector('#year').textContent = new Date().getFullYear();


// =========================================================
// GROWTH UPGRADE
// Craving recommender + editable live offer + conversion analytics
// =========================================================

const LIVE_OFFER = {
  active: true,
  label: 'TODAY AT BECAFE',
  title: 'Road-trip refresh, sorted.',
  text: 'Ask at the counter for today’s coffee + quick-bite combo.',
  cta: 'See popular picks',
  href: '#menu',
  note: 'Subject to availability at the outlet.'
};

function renderLiveOffer(){
  const section = document.querySelector('#offer');
  if (!section) return;
  if (!LIVE_OFFER.active) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  const label = section.querySelector('#offerLabel');
  const title = section.querySelector('#offerTitle');
  const text = section.querySelector('#offerText');
  const cta = section.querySelector('#offerCta');
  const note = section.querySelector('#offerNote');
  if (label) label.textContent = LIVE_OFFER.label;
  if (title) title.textContent = LIVE_OFFER.title;
  if (text) text.textContent = LIVE_OFFER.text;
  if (cta) {
    cta.childNodes[0].nodeValue = `${LIVE_OFFER.cta} `;
    cta.href = LIVE_OFFER.href;
  }
  if (note) note.textContent = LIVE_OFFER.note;
}
renderLiveOffer();

const CRAVINGS = {
  coffee: {
    items: ['Cappuccino', 'Hazelnut Mocha', 'French Rose Latte']
  },
  hungry: {
    items: ['Double Tikki Veg Burger', 'Paneer Tikka Wrap', 'Farmhouse Veg Pizza']
  },
  cold: {
    items: ['Cold Chocolate', 'Oreo Shake', 'Classic Mojito']
  },
  sweet: {
    items: ['Brownie Sizzler', 'Nutella Brownie Waffle', 'Blueberry Muffin']
  }
};

function cravingPrice(item){
  if (item.p) return `₹${item.p}`;
  if (item.m && item.l) return `₹${item.m} <small>M</small> · ₹${item.l} <small>L</small>`;
  if (item.m) return `₹${item.m}`;
  if (item.l) return `₹${item.l}`;
  return '';
}

function trackEvent(name, data = {}){
  try {
    if (typeof window.va === 'function') {
      window.va('event', { name, data });
    }
  } catch (_) {}
}

function openMenuItem(itemName){
  setMenuExpanded(true);
  category = 'all';
  tabs.forEach((t, i) => t.classList.toggle('active', i === 0));
  search.value = itemName;
  renderMenu();
  trackEvent('recommendation_opened', { item: itemName });
  setTimeout(() => menuSection?.scrollIntoView({behavior:'smooth', block:'start'}), 60);
}

function renderCraving(type = 'coffee'){
  const target = document.querySelector('#cravingResults');
  const config = CRAVINGS[type];
  if (!target || !config) return;
  const items = config.items.map(name => MENU.find(item => item.n === name)).filter(Boolean);
  target.innerHTML = items.map((item, index) => `
    <article class="craving-card" data-number="0${index + 1}">
      <div>
        <small>${item.s}</small>
        <h3>${item.n}</h3>
        <p>${item.note || (item.rec ? 'A BeCafe favourite worth a detour.' : 'An easy pick for your next café stop.')}</p>
      </div>
      <div class="craving-card-footer">
        <div class="craving-price">${cravingPrice(item)}</div>
        <div class="craving-actions">
          <button class="craving-add" type="button" data-add-item="${encodeURIComponent(item.n)}">+ Add</button>
          <button class="craving-open" type="button" data-menu-item="${encodeURIComponent(item.n)}">Find in menu →</button>
        </div>
      </div>
    </article>
  `).join('');

  target.querySelectorAll('.craving-open').forEach(btn => {
    btn.addEventListener('click', () => openMenuItem(decodeURIComponent(btn.dataset.menuItem)));
  });
}

document.querySelectorAll('.craving-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.craving-tab').forEach(other => {
      const active = other === btn;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const type = btn.dataset.craving;
    renderCraving(type);
    trackEvent('craving_selected', { type });
  });
});
renderCraving('coffee');

// Key conversion events.
// Page views / visitors are tracked by Vercel Web Analytics.
// These custom events appear when the Vercel plan supports custom events.
menuExpandBtn?.addEventListener('click', () => {
  if (menuExpandBtn.getAttribute('aria-expanded') === 'true') {
    trackEvent('menu_opened', { source: 'menu_section' });
  }
});

document.querySelector('#offerCta')?.addEventListener('click', () => {
  trackEvent('offer_click', { offer: LIVE_OFFER.title });
});

document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  const section = link.closest('section')?.id || 'site';

  if (href.includes('maps.app.goo.gl')) {
    const name = section === 'reviews' ? 'google_reviews_click' : 'directions_click';
    trackEvent(name, { location: section });
  } else if (href.includes('instagram.com/becafe_rke')) {
    trackEvent('instagram_click', { location: section });
  } else if (href.includes('becafe-official-menu.pdf')) {
    trackEvent('menu_pdf_open', { location: section });
  }
});


// =========================================================
// QUICK ORDER + QR ANALYTICS
// =========================================================

// Add the outlet's direct WhatsApp number here when available, including country code
// and digits only, e.g. '919876543210'. Leaving it blank uses WhatsApp's share flow.
const ORDER_CONFIG = {
  whatsappNumber: '',
  outlet: 'Be Cafe Arya FS',
  website: 'https://becafe-rke.vercel.app/'
};

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem('becafeQuickOrder') || '[]');
  if (!Array.isArray(cart)) cart = [];
} catch (_) { cart = []; }

const orderOverlay = document.querySelector('#orderOverlay');
const orderClose = document.querySelector('#orderClose');
const orderItems = document.querySelector('#orderItems');
const orderEmpty = document.querySelector('#orderEmpty');
const orderForm = document.querySelector('#orderForm');
const orderTotal = document.querySelector('#orderTotal');
const cartCountEl = document.querySelector('#cartCount');
const mobileCartCount = document.querySelector('#mobileCartCount');
const orderFab = document.querySelector('#orderFab');
const mobileOrderBtn = document.querySelector('#mobileOrderBtn');
const navOrderBtn = document.querySelector('#navOrderBtn');
const mobileNavOrderBtn = document.querySelector('#mobileNavOrderBtn');
const orderBrowseBtn = document.querySelector('#orderBrowseBtn');
const sendWhatsApp = document.querySelector('#sendWhatsApp');
const copyOrder = document.querySelector('#copyOrder');
const sizeOverlay = document.querySelector('#sizeOverlay');
const sizeClose = document.querySelector('#sizeClose');
const sizeTitle = document.querySelector('#sizeTitle');
const sizeOptions = document.querySelector('#sizeOptions');
let pendingSizeItem = null;

function menuItemByName(name){ return MENU.find(item => item.n === name); }
function cartKey(name, size){ return `${name}::${size || 'ONE'}`; }
function itemUnitPrice(item, size){
  if (item.p) return item.p;
  if (size === 'L') return item.l || item.m || 0;
  return item.m || item.l || 0;
}
function saveCart(){
  localStorage.setItem('becafeQuickOrder', JSON.stringify(cart));
}
function cartCount(){
  return cart.reduce((sum, line) => sum + line.qty, 0);
}
function cartValue(){
  return cart.reduce((sum, line) => sum + line.price * line.qty, 0);
}

function renderCart(){
  const countValue = cartCount();
  if (cartCountEl) cartCountEl.textContent = countValue;
  if (mobileCartCount) mobileCartCount.textContent = countValue;
  if (orderFab) orderFab.classList.toggle('has-items', countValue > 0);

  if (!cart.length) {
    orderItems.innerHTML = '';
    orderEmpty.hidden = false;
    orderForm.hidden = true;
    orderTotal.textContent = '₹0';
    sendWhatsApp.disabled = true;
    copyOrder.disabled = true;
    return;
  }

  orderEmpty.hidden = true;
  orderForm.hidden = false;
  sendWhatsApp.disabled = false;
  copyOrder.disabled = false;
  orderItems.innerHTML = cart.map((line, index) => `
    <div class="order-line">
      <div>
        <h4>${line.name}</h4>
        <small>${line.size ? `${line.size} size · ` : ''}₹${line.price} each</small>
      </div>
      <div class="order-line-right">
        <span class="order-line-price">₹${line.price * line.qty}</span>
        <div class="qty-controls">
          <button type="button" data-cart-dec="${index}" aria-label="Decrease ${line.name}">−</button>
          <b>${line.qty}</b>
          <button type="button" data-cart-inc="${index}" aria-label="Increase ${line.name}">+</button>
        </div>
      </div>
    </div>
  `).join('');
  orderTotal.textContent = `₹${cartValue()}`;
}
renderCart();

function addCartLine(item, size){
  const price = itemUnitPrice(item, size);
  const key = cartKey(item.n, size);
  const existing = cart.find(line => line.key === key);
  if (existing) existing.qty += 1;
  else cart.push({ key, name:item.n, size:size || '', price, qty:1 });
  saveCart();
  renderCart();
  trackEvent('add_to_order', { item:item.n, size:size || 'single', price });
}

function chooseSize(item){
  pendingSizeItem = item;
  sizeTitle.textContent = item.n;
  const options = [];
  if (item.m) options.push({size:'M', price:item.m});
  if (item.l) options.push({size:'L', price:item.l});
  sizeOptions.innerHTML = options.map(opt => `
    <button class="size-option" type="button" data-size="${opt.size}">
      <span>${opt.size === 'M' ? 'Medium' : 'Large'}</span><b>₹${opt.price}</b>
    </button>
  `).join('');
  sizeOverlay.classList.add('open');
  sizeOverlay.setAttribute('aria-hidden','false');
}

function requestAdd(name){
  const item = menuItemByName(name);
  if (!item) return;
  if (item.m && item.l) chooseSize(item);
  else {
    const size = item.m ? 'M' : item.l ? 'L' : '';
    addCartLine(item, size);
  }
}

document.addEventListener('click', event => {
  const add = event.target.closest('[data-add-item]');
  if (add) {
    requestAdd(decodeURIComponent(add.dataset.addItem));
    return;
  }
  const inc = event.target.closest('[data-cart-inc]');
  const dec = event.target.closest('[data-cart-dec]');
  if (inc) {
    cart[Number(inc.dataset.cartInc)].qty += 1;
    saveCart(); renderCart();
  }
  if (dec) {
    const i = Number(dec.dataset.cartDec);
    cart[i].qty -= 1;
    if (cart[i].qty <= 0) cart.splice(i,1);
    saveCart(); renderCart();
  }
});

sizeOptions?.addEventListener('click', event => {
  const btn = event.target.closest('[data-size]');
  if (!btn || !pendingSizeItem) return;
  addCartLine(pendingSizeItem, btn.dataset.size);
  closeSize();
  openOrder();
});
function closeSize(){
  sizeOverlay.classList.remove('open');
  sizeOverlay.setAttribute('aria-hidden','true');
  pendingSizeItem = null;
}
sizeClose?.addEventListener('click', closeSize);
sizeOverlay?.addEventListener('click', e => { if (e.target === sizeOverlay) closeSize(); });

function openOrder(){
  orderOverlay.classList.add('open');
  orderOverlay.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  renderCart();
  setMobile(false);
}
function closeOrder(){
  orderOverlay.classList.remove('open');
  orderOverlay.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
[orderFab,mobileOrderBtn,navOrderBtn,mobileNavOrderBtn].forEach(btn => btn?.addEventListener('click', openOrder));
orderClose?.addEventListener('click', closeOrder);
orderOverlay?.addEventListener('click', e => { if (e.target === orderOverlay) closeOrder(); });
orderBrowseBtn?.addEventListener('click', () => {
  closeOrder();
  setMenuExpanded(true);
  document.querySelector('#menu')?.scrollIntoView({behavior:'smooth'});
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (sizeOverlay?.classList.contains('open')) closeSize();
    else if (orderOverlay?.classList.contains('open')) closeOrder();
  }
});

function buildOrderText(){
  const pickup = document.querySelector('#pickupTime')?.value || 'As soon as possible';
  const name = document.querySelector('#orderName')?.value.trim();
  const notes = document.querySelector('#orderNotes')?.value.trim();
  const lines = cart.map(line => {
    const size = line.size ? ` (${line.size})` : '';
    return `${line.qty}× ${line.name}${size} — ₹${line.price * line.qty}`;
  });
  return [
    `Hi ${ORDER_CONFIG.outlet}! I'd like to place a pickup order:`,
    '',
    ...lines,
    '',
    `Estimated menu total: ₹${cartValue()}`,
    `Pickup: ${pickup}`,
    name ? `Name: ${name}` : '',
    notes ? `Notes: ${notes}` : '',
    '',
    'Please confirm availability and final amount.',
    `Sent from ${ORDER_CONFIG.website}`
  ].filter((line, i, arr) => !(line === '' && arr[i-1] === '')).join('\n');
}

sendWhatsApp?.addEventListener('click', () => {
  if (!cart.length) return;
  const text = buildOrderText();
  const base = ORDER_CONFIG.whatsappNumber
    ? `https://wa.me/${ORDER_CONFIG.whatsappNumber}?text=`
    : 'https://wa.me/?text=';
  trackEvent('whatsapp_order_click', { items:cartCount(), value:cartValue(), direct:!!ORDER_CONFIG.whatsappNumber });
  window.open(base + encodeURIComponent(text), '_blank', 'noopener');
});

copyOrder?.addEventListener('click', async () => {
  if (!cart.length) return;
  const text = buildOrderText();
  try {
    await navigator.clipboard.writeText(text);
    const original = copyOrder.textContent;
    copyOrder.textContent = 'Copied ✓';
    setTimeout(() => copyOrder.textContent = original, 1500);
    trackEvent('order_text_copied', { items:cartCount(), value:cartValue() });
  } catch (_) {
    window.prompt('Copy your order:', text);
  }
});

// QR scans use a tagged URL so they can be counted separately.
const params = new URLSearchParams(location.search);
if (params.get('utm_source') === 'table_qr') {
  trackEvent('qr_menu_scan', { campaign: params.get('utm_campaign') || 'menu' });
  if (location.hash !== '#menu') location.hash = 'menu';
}

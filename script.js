const MENU = [
  // HOT — CHAI
  {n:'Kadak Chai', c:'hot', s:'Chai', m:59, rec:true},
  {n:'Green Tea', c:'hot', s:'Chai', m:79},
  {n:'Black Tea', c:'hot', s:'Chai', m:79},
  {n:'Lemon Tea', c:'hot', s:'Chai', m:79},
  {n:'Bournvita', c:'hot', s:'Chai', m:119, l:149},
  {n:'Dark Hot Chocolate', c:'hot', s:'Chai', m:129, l:159},
  // HOT — CLASSICS
  {n:'Espresso Italiano', c:'hot', s:'Classics', m:59},
  {n:'Espresso Americano', c:'hot', s:'Classics', m:89, l:119},
  {n:'Cappuccino', c:'hot', s:'Classics', m:99, l:129, rec:true},
  {n:'Cafe Latte', c:'hot', s:'Classics', m:109, l:139},
  {n:'Flat White', c:'hot', s:'Classics', m:109, l:139},
  {n:'Cafe Mocha Special', c:'hot', s:'Classics', m:129, l:159},
  // HOT — INDULGENCE
  {n:'Espresso Americano (Honey)', c:'hot', s:'Indulgence', m:99, l:129},
  {n:'Flavoured Cappuccino', c:'hot', s:'Indulgence', note:'Hazelnut · Vanilla · Caramel · Cinnamon', m:129, l:159},
  {n:'Choco Chip Affogato', c:'hot', s:'Indulgence', m:129, l:159},
  {n:'Caramel Macchiato', c:'hot', s:'Indulgence', m:139, l:169},
  {n:'Flavoured Cafe Latte', c:'hot', s:'Indulgence', note:'Hazelnut · Vanilla · Caramel · Cinnamon', m:139, l:169},
  {n:'Hazelnut Mocha', c:'hot', s:'Indulgence', m:139, l:169, rec:true},
  {n:'Nutella Latte', c:'hot', s:'Indulgence', m:149, l:179},

  // COLD — CLASSICS
  {n:'Iced Espresso', c:'cold', s:'Cold Classics', m:69},
  {n:'Iced Americano', c:'cold', s:'Cold Classics', m:99, l:129},
  {n:'Iced Latte', c:'cold', s:'Cold Classics', m:119, l:149},
  {n:'Cold Chocolate', c:'cold', s:'Cold Classics', m:139, l:169, rec:true},
  {n:'Iced Caramel Macchiato', c:'cold', s:'Cold Classics', m:149, l:179},
  // SHAKES
  {n:'Banana Shake', c:'cold', s:'Shakes', m:149, l:189},
  {n:'Strawberry Shake', c:'cold', s:'Shakes', m:149, l:189},
  {n:'Vanilla Shake', c:'cold', s:'Shakes', m:159, l:199},
  {n:'Dark Chocolate Shake', c:'cold', s:'Shakes', m:159, l:199},
  {n:'Chocolate Brownie Shake', c:'cold', s:'Shakes', m:169, l:209},
  {n:'Kitkat Shake', c:'cold', s:'Shakes', m:169, l:209, rec:true},
  {n:'Oreo Shake', c:'cold', s:'Shakes', m:169, l:209, rec:true},
  {n:'Blueberry Shake', c:'cold', s:'Shakes', m:169, l:209},
  {n:'Nutella Shake', c:'cold', s:'Shakes', m:189, l:229},
  // FRAPPES
  {n:'Classic Frappe', c:'cold', s:'Frappes', m:149, l:189},
  {n:'Caramel Frappe', c:'cold', s:'Frappes', m:169, l:209},
  {n:'Vanilla Frappe', c:'cold', s:'Frappes', m:169, l:209},
  {n:'Choco Hazelnut Frappe', c:'cold', s:'Frappes', m:189, l:229, rec:true},
  {n:'Mocha Frappe', c:'cold', s:'Frappes', m:189, l:229},
  {n:'Choco Chip Frappe', c:'cold', s:'Frappes', m:189, l:229},
  {n:'Nutella Frappe', c:'cold', s:'Frappes', m:199, l:249},
  // MOCKTAILS / ICED TEA / COOLERS
  {n:'Classic Mojito', c:'cold', s:'Mocktails', l:149},
  {n:'Blue Lagoon Mojito', c:'cold', s:'Mocktails', l:169, rec:true},
  {n:'Green Apple Mojito', c:'cold', s:'Mocktails', l:169},
  {n:'Cranberry Mojito', c:'cold', s:'Mocktails', l:169},
  {n:'Lemon Iced Tea', c:'cold', s:'Iced Tea', m:129},
  {n:'Peach Iced Tea', c:'cold', s:'Iced Tea', m:149},
  {n:'Aam Panna Cooler', c:'cold', s:'Coolers', l:129},
  {n:'Classic Lemon Soda', c:'cold', s:'Coolers', l:139},
  {n:'Spiced Pineapple Cooler', c:'cold', s:'Coolers', l:149},

  // FOOD
  {n:'Steamed Veg Momos (6 pcs)', c:'food', s:'Momos', p:89, note:'Fried option +₹10'},
  {n:'Steamed Paneer Momos (6 pcs)', c:'food', s:'Momos', p:109, note:'Fried option +₹10'},
  {n:'Masala Maggi', c:'food', s:'Maggi', p:89},
  {n:'Cheese Maggi', c:'food', s:'Maggi', p:119},
  {n:'Spinach Corn Sandwich', c:'food', s:'Sandwiches', p:129},
  {n:'Paneer Tikka Sandwich', c:'food', s:'Sandwiches', p:159, rec:true},
  {n:'Veg Puff', c:'food', s:'Finger Food', p:79},
  {n:'Harabhara Kebab (6 pcs)', c:'food', s:'Finger Food', p:89, rec:true},
  {n:'Falafel Kebab (6 pcs)', c:'food', s:'Finger Food', p:89},
  {n:'French Fries', c:'food', s:'Finger Food', p:99, rec:true},
  {n:'Veg Spring Rolls (4 pcs)', c:'food', s:'Finger Food', p:99},
  {n:'Cheese Garlic Bread', c:'food', s:'Finger Food', p:109},
  {n:'Peri Peri Fries', c:'food', s:'Finger Food', p:119},
  {n:'Smileys (6 pcs)', c:'food', s:'Finger Food', p:119},
  {n:'Three Pepper Toastie', c:'food', s:'Finger Food', p:129, rec:true},
  {n:'Cheese Fries', c:'food', s:'Finger Food', p:139},
  {n:'Veg Burger with Fries', c:'food', s:'Burgers', p:129},
  {n:'Farmhouse Veg Pizza', c:'food', s:'Pizzas', p:199},

  // SWEET
  {n:'Walnut Brownie', c:'sweet', s:'Bakery', p:129, rec:true},
  {n:'Chocolate Cup Cake', c:'sweet', s:'Bakery', p:139},
  {n:'Chocochip Muffin', c:'sweet', s:'Bakery', p:149},
  {n:'Walnut Brownie Sundae', c:'sweet', s:'Bakery', p:179},
  {n:'Blueberry Muffin', c:'sweet', s:'Bakery', p:149, rec:true},
  {n:'Chocolate Excess Cake (per slice)', c:'sweet', s:'Bakery', p:149},
  {n:'Almond Muffin', c:'sweet', s:'Bakery', p:149},
  {n:'Strawberry Waffle', c:'sweet', s:'Waffles', p:109},
  {n:'Chocolate Waffle', c:'sweet', s:'Waffles', p:109},
  {n:'Chocolate Fudge Waffle', c:'sweet', s:'Waffles', p:129},
  {n:'Maple Waffle', c:'sweet', s:'Waffles', p:129},
  {n:'Kitkat Waffle', c:'sweet', s:'Waffles', p:129, rec:true},
  {n:'Blueberry Waffle', c:'sweet', s:'Waffles', p:129},
  {n:'Peanut Butter Waffle', c:'sweet', s:'Waffles', p:129},
  {n:'Chocolate Brownie Waffle', c:'sweet', s:'Waffles', p:129},
  {n:'Nutella Waffle', c:'sweet', s:'Waffles', p:139},
  {n:'Nutella Brownie Waffle', c:'sweet', s:'Waffles', p:169, rec:true},
  {n:'Nutella Banana Waffle', c:'sweet', s:'Waffles', p:179}
];

const grid = document.querySelector('#menuGrid');
const count = document.querySelector('#menuCount');
const search = document.querySelector('#menuSearch');
const tabs = [...document.querySelectorAll('.menu-tab')];
let category = 'all';

function priceHTML(item){
  if (item.p) return `<span class="price-pill"><b>₹${item.p}</b></span>`;
  return `${item.m ? `<span class="price-pill"><em>M</em><b>₹${item.m}</b></span>` : ''}${item.l ? `<span class="price-pill"><em>L</em><b>₹${item.l}</b></span>` : ''}`;
}

function renderMenu(){
  const q = search.value.trim().toLowerCase();
  const items = MENU.filter(item => (category === 'all' || item.c === category) && (!q || `${item.n} ${item.s} ${item.note || ''}`.toLowerCase().includes(q)));
  count.textContent = `${items.length} item${items.length === 1 ? '' : 's'}`;
  grid.innerHTML = items.length ? items.map(item => `
    <article class="menu-item ${item.rec ? 'recommended' : ''}">
      <div class="menu-item-top">
        <small>${item.s}</small>
        <h3>${item.n}</h3>
      </div>
      <div class="menu-item-bottom">
        <span class="menu-item-note">${item.note || ''}</span>
        <div class="menu-prices">${priceHTML(item)}</div>
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

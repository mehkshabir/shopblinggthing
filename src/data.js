// ===== EDIT ME =====  Products, team and links live here.
// To add a product: drop a photo in src/assets/products/ and add a line below.
const files = import.meta.glob('./assets/products/*.jpg', { eager: true, query: '?url', import: 'default' })
export const img = (name) => files[`./assets/products/${name}`]

export const INSTAGRAM_HANDLE = 'shopblingthing'
export const INSTAGRAM_URL = 'https://www.instagram.com/shopblingthing/'
export const DM_URL = 'https://ig.me/m/shopblingthing'

export const CATEGORIES = ['All', 'Rings', 'Cuffs', 'Necklaces', 'Press-ons']

export const PRODUCTS = [
  { id: 'celeste', name: 'Celeste', price: 300, category: 'Rings', image: 'celeste.jpg' },
  { id: 'seraphina', name: 'Seraphina', price: 350, category: 'Rings', image: 'seraphina.jpg' },
  { id: 'golden-hour', name: 'Golden Hour', price: 350, category: 'Rings', image: 'golden-hour.jpg' },
  { id: 'amore-ring', name: 'Amore Ring', price: 400, category: 'Rings', image: 'amore-ring.jpg' },
  { id: 'moonkiss', name: 'Moonkiss', price: 400, category: 'Rings', image: 'moonkiss.jpg' },
  { id: 'the-coquette', name: 'The Coquette', price: 350, category: 'Rings', image: 'the-coquette.jpg' },
  { id: 'stardust', name: 'Stardust', price: 350, category: 'Rings', image: 'stardust.jpg' },
  { id: 'etoile', name: 'Étoile', price: 350, category: 'Rings', image: 'etoile.jpg' },
  { id: 'rose-glow', name: 'Rosé Glow', price: 350, category: 'Rings', image: 'rose-glow.jpg' },
  { id: 'golden-muse', name: 'Golden Muse', price: 700, category: 'Cuffs', image: 'golden-muse.jpg' },
  { id: 'aurelia', name: 'Aurelia', price: 700, category: 'Cuffs', image: 'aurelia.jpg' },
  { id: 'cupids-call', name: "Cupid's Call", price: 550, category: 'Necklaces', image: 'cupids-call.jpg' },
  { id: 'amora', name: 'Amora', price: 600, category: 'Necklaces', image: 'amora.jpg' },
  { id: 'heartstrings', name: 'Heartstrings', price: 650, category: 'Necklaces', image: 'heartstrings.jpg' },
  { id: 'blush-affair', name: 'Blush Affair', price: 350, category: 'Press-ons', image: 'blush-affair.jpg' },
  { id: 'vanilla-glaze', name: 'Vanilla Glaze', price: 450, category: 'Press-ons', image: 'vanilla-glaze.jpg' },
]

// Ids of the four picks shown in "The Little Things Collection"
export const COLLECTION = ['celeste', 'golden-muse', 'blush-affair', 'amora']

export const TEAM = [
  { name: 'Mehak Shabir', role: 'Team Lead' },
  { name: 'Manahil Kaimkhani', role: 'Social Media Manager' },
  { name: 'Amna Kaimkhani', role: 'Marketing Manager' },
  { name: 'Alisha Khalid', role: 'Finance Manager' },
  { name: 'Anosha Saleem', role: 'Creative Director' },
  { name: 'Amarta Das', role: 'Product Manager' },
  { name: 'Hasnain Abbas', role: 'Website & Technology Manager' },
  { name: 'Tazeen Fatima', role: 'Sales & Customer Relations Manager' },
  { name: 'Khizar Khan Kakar', role: 'Operations & Logistics Manager' },
]

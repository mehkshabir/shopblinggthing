import { useState, useRef } from 'react'
import { ArrowDown, Instagram, Sparkles } from 'lucide-react'
import ProductCard from './components/ProductCard'
import { PRODUCTS, CATEGORIES, COLLECTION, TEAM, DM_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from './data'
import logo from './assets/logo.png'
import heroPink from './assets/hero-pink.jpg'
import heroCrimson from './assets/hero-crimson.jpg'

const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('')

export default function App() {
  const [cat, setCat] = useState('All')
  const [toast, setToast] = useState('')
  const timer = useRef()
  const shown = cat === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)

  // Instagram can't reliably prefill a DM, so we copy the message and open the DM.
  const order = (p) => {
    const msg = `Hi The BlingThing! I'd like to order ${p.name} (PKR ${p.price}).`
    window.open(DM_URL, '_blank', 'noopener')
    navigator.clipboard?.writeText(msg).catch(() => {})
    setToast(`Message copied for ${p.name}. Paste it in the Instagram DM.`)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 5000)
  }

  return (
    <>
      <header className="hero" id="top">
        <img className="logo" src={logo} alt="The BlingThing, we sell experience" />
        <div className="hero-text">
          <h1>A little extra sparkle for everyday life.</h1>
          <p>Carefully picked rings, cuffs, necklaces and press-on nails, for the moments that deserve a little more you.</p>
          <a className="btn btn-light" href="#products"><ArrowDown size={18} /> Shop products</a>
          <p className="hint"><Instagram size={15} /> Orders are placed through Instagram DM</p>
        </div>
        <div className="hero-art">
          <img className="art-main" src={heroPink} alt="Enamel cuff bracelets on pink satin" />
          <img className="art-side" src={heroCrimson} alt="Gold cameo cuff on deep red" />
        </div>
      </header>

      <section className="collection">
        <h2>The Little Things Collection</h2>
        <p className="lede">A little sparkle, a little statement, a lot of personality.</p>
        <div className="grid grid-4">
          {COLLECTION.map((id) => PRODUCTS.find((p) => p.id === id)).map((p) => (
            <ProductCard key={p.id} product={p} onOrder={order} />
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <Sparkles className="spark" size={28} />
        <h2>About The BlingThing</h2>
        <p>The BlingThing is all about adding a little extra sparkle to everyday life.</p>
        <p>We are a brand built around beautiful finds, fun aesthetics, and pieces that make you feel a little more you. Everything here is carefully picked, so every little moment can feel special.</p>
      </section>

      <section className="products" id="products">
        <h2>Our products</h2>
        <p className="lede">Found something you love? Tap Order on Instagram and send us a DM.</p>
        <div className="tabs" role="tablist">
          {CATEGORIES.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'tab on' : 'tab'} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">
          {shown.map((p) => <ProductCard key={p.id} product={p} onOrder={order} />)}
        </div>
      </section>

      <section className="team" id="team">
        <h2>Meet the team</h2>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <div key={m.name} className={i === 0 ? 'member lead' : 'member'}>
              <div className="avatar">{initials(m.name)}</div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <img src={logo} alt="The BlingThing" />
        <p>Thank you for adding a little sparkle to your day.</p>
        <a className="btn" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @{INSTAGRAM_HANDLE}</a>
        <small>© {new Date().getFullYear()} The BlingThing</small>
      </footer>

      <div className={toast ? 'toast show' : 'toast'} role="status">{toast}</div>
    </>
  )
}

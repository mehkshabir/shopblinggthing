import { Instagram } from 'lucide-react'
import { img } from '../data'

export default function ProductCard({ product, onOrder }) {
  return (
    <article className="card">
      <div className="card-img"><img src={img(product.image)} alt={product.name} loading="lazy" /></div>
      <div className="card-body">
        <div>
          <h3>{product.name}</h3>
          <p className="price">PKR {product.price.toLocaleString()}</p>
        </div>
        <button className="btn btn-small" onClick={() => onOrder(product)}>
          <Instagram size={16} /> Order on Instagram
        </button>
      </div>
    </article>
  )
}

import { testimonials } from '../constants/testimonials'
import '../styles/Testimonials.css'

function Stars({ count }: { count: number }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Lo que dicen</span>
          <h2 className="section-title">Clientes que me recomiendan</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <Stars count={t.rating} />
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__meta">{t.vehicle} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
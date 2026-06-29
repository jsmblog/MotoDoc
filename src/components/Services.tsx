import { services } from '../constants/services'
import '../styles/Services.css'

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">Lo que hago</span>
          <h2 className="section-title">Servicios a domicilio</h2>
          <p className="services__subtitle">
            Todo lo que tu moto necesita, en el lugar que tú elijas.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <div className="service-card__tags">
                {service.tags.map(tag => (
                  <span className="service-card__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <p>¿No ves lo que necesitas?</p>
          <a href="https://wa.me/593998605209?text=Hola,%20tengo%20una%20consulta%20sobre%20un%20servicio" className="btn-outline" target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
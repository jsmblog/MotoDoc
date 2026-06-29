import { reasons } from '../constants/reasons'
import '../styles/WhyChooseMe.css'

export default function WhyChooseMe() {
  return (
    <section id="por-que-yo" className="why">
      <div className="container">
        <div className="why__layout">
          <div className="why__left">
            <span className="section-label">Mi diferencial</span>
            <h2 className="section-title">Por qué clientes me recomiendan</h2>
            <p className="why__body">
              Llevo años trabajando en mecánica y entiendo la frustración de llevar tu moto a un taller. Por eso trabajo diferente.
            </p>
            <div className="why__metric">
              <div className="why__metric-item">
                <strong>98%</strong>
                <span>clientes satisfechos</span>
              </div>
              <div className="why__metric-item">
                <strong>+4 años</strong>
                <span>de experiencia</span>
              </div>
            </div>
          </div>

          <div className="why__grid">
            {reasons.map((reason, i) => (
              <div className="why__card" key={i}>
                <span className="why__card-icon">{reason.icon}</span>
                <div>
                  <h3 className="why__card-title">{reason.title}</h3>
                  <p className="why__card-desc">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span>🔧</span>
            <span>MotoDoc<span className="footer__logo-accent">.ec</span></span>
          </a>
          <p className="footer__tagline">
            Mecánica profesional a domicilio en Manabí.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Servicios</h4>
            <a href="#servicios">Mantenimiento</a>
            <a href="#servicios">Reparación de motos</a>
            <a href="#servicios">Sistema eléctrico</a>
            <a href="#servicios">Frenos y suspensión</a>
            <a href="#servicios">Diagnóstico</a>
          </div>
          <div className="footer__col">
            <h4>Contacto</h4>
            <a href="https://wa.me/593998605209" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="tel:+593998605209">+593 998 605 209</a>
            <span className="footer__text">Manabí, Ecuador</span>
            <span className="footer__text">Lun – Sáb, 8AM – 6PM</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} MotoDoc.ec · Todos los derechos reservados</p>
        <p>Hecho con ❤️ por Joel</p>
      </div>
    </footer>
  )
}
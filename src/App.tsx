import { Calendar, Instagram, MapPin, Phone, Scissors, Sparkles, Star } from 'lucide-react'

const services = [
  { name: 'Corte clasico', detail: 'Limpio, preciso y adaptado a tu estilo.', price: '18 EUR' },
  { name: 'Fade premium', detail: 'Degradado pulido con acabado profesional.', price: '22 EUR' },
  { name: 'Barba y perfilado', detail: 'Toalla caliente, navaja y lineas definidas.', price: '16 EUR' },
]

const gallery = [
  'Fade bajo con textura',
  'Barba definida',
  'Corte ejecutivo',
  'Estilo moderno',
]

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow">Barberia & estilo personal</p>
          <h1 id="hero-title">Guillermo Lavado</h1>
          <p className="hero__copy">
            Cortes cuidados, degradados limpios y arreglo de barba para salir con una imagen clara, segura y bien rematada.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+34000000000">
              <Phone size={18} aria-hidden="true" />
              Reservar cita
            </a>
            <a className="button button--ghost" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
        <div className="hero__panel" aria-label="Resumen del servicio">
          <Scissors size={42} aria-hidden="true" />
          <span>Estilo limpio</span>
          <strong>45 min</strong>
          <small>Corte + acabado</small>
        </div>
      </section>

      <section className="section split" aria-label="Informacion principal">
        <div>
          <p className="eyebrow">Atencion cercana</p>
          <h2>Un acabado pensado para tu dia a dia</h2>
          <p>
            Trabajo cada corte segun tu rostro, tu pelo y el mantenimiento que quieres llevar. Sin prisas, con detalle y con un resultado facil de peinar al dia siguiente.
          </p>
        </div>
        <div className="info-list">
          <span><MapPin size={18} aria-hidden="true" /> Madrid, Espana</span>
          <span><Calendar size={18} aria-hidden="true" /> Lunes a sabado</span>
          <span><Star size={18} aria-hidden="true" /> Cortes, fade y barba</span>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="section__header">
          <p className="eyebrow">Servicios</p>
          <h2 id="services-title">Carta esencial</h2>
        </div>
        <div className="services">
          {services.map((service) => (
            <article className="service" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-title">
        <div className="section__header">
          <p className="eyebrow">Portfolio</p>
          <h2 id="gallery-title">Trabajos recientes</h2>
        </div>
        <div className="gallery">
          {gallery.map((item, index) => (
            <article className="gallery__item" key={item}>
              <Sparkles size={24} aria-hidden="true" />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App

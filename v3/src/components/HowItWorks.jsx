import { motion } from "framer-motion";
import { useReveal, up } from '../utils';
import { C } from "../constants";

function HowItWorks() {
  const [ref, inView] = useReveal();
  const steps = [
    { n: "01", title: "Nos contás tu negocio", desc: "Respondés un formulario simple. Solo tu negocio, tus clientes y tus metas." },
    { n: "02", title: "Diseñamos todo", desc: "Nuestro equipo crea tu web, logo y perfiles. Vos aprobás antes de lanzar." },
    { n: "03", title: "Lanzamos juntos", desc: "En 7 días está todo online. Te entregamos todos los accesos." },
    { n: "04", title: "Los clientes llegan", desc: "Tu sitio trabaja 24/7. Recibís consultas por WhatsApp, formularios e Instagram." },
  ];
  return (
    <section id="como-funciona" ref={ref} style={{ padding: "100px 28px", background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Así de simple</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.ink, margin: 0, letterSpacing: "-0.035em" }}>
            4 pasos para estar<br />online y conseguir clientes
          </h2>
        </motion.div>
        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", background: C.border }}>
          {steps.map((s, i) => (
            <motion.div key={s.n} variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}
              style={{ background: C.card, padding: 32, transition: "background 0.2s", cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.background = C.bgAlt}
              onMouseLeave={e => e.currentTarget.style.background = C.card}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, color: C.border, margin: "0 0 16px", letterSpacing: "-0.05em" }}>{s.n}</p>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: C.ink, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.inkMuted, margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.steps-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.steps-grid{grid-template-columns:1fr!important}}`}</style>
      </div>
    </section>
  );
}

export default HowItWorks;

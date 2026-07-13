import { motion } from "framer-motion";
import { useReveal, up } from '../utils';
import { C } from "../constants";

function Problem() {
  const [ref, inView] = useReveal();
  const pains = [
    { n: "01", title: "Sin presencia online", desc: "Tus clientes te buscan en Google y no te encuentran. Tu competencia sí." },
    { n: "02", title: "Perdiendo clientes", desc: "Cada día sin web es dinero que se va a quien sí está online." },
    { n: "03", title: "La tecnología te frena", desc: "No sabés por dónde empezar — dominios, diseño, hosting, redes…" },
    { n: "04", title: "No tenés tiempo", desc: "Tu negocio ya te ocupa todo el día. No tenés horas para aprender todo esto." },
  ];
  return (
    <section id="problem" ref={ref} style={{ padding: "100px 28px", background: C.bg }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>¿Te suena conocido?</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.ink, margin: "0 0 18px", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
            El problema es real.<br />Y tiene solución.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: C.inkMuted, maxWidth: 500, margin: 0, lineHeight: 1.72 }}>
            Miles de negocios locales pierden clientes todos los días por no estar online. No es tu culpa — es que nadie te lo hizo simple.
          </p>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", background: C.border }}>
          {pains.map((p, i) => (
            <motion.div key={p.title} variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}
              style={{ background: C.card, padding: 36, transition: "background 0.2s", cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.background = C.bgAlt}
              onMouseLeave={e => e.currentTarget.style.background = C.card}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, color: C.inkLight, fontWeight: 700, letterSpacing: "0.06em", margin: "0 0 18px" }}>{p.n}</p>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: C.ink, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{p.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted, margin: 0, lineHeight: 1.65 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;

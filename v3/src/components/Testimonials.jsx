import { motion } from "framer-motion";
import { useReveal, up } from '../utils';
import { C } from "../constants";

function Testimonials() {
  const [ref, inView] = useReveal();
  const reviews = [
    { name: "María G.", biz: "Peluquería MG", quote: "Antes nadie me encontraba. Ahora recibo 5 o 6 consultas por semana desde la web. Vale cada peso." },
    { name: "Roberto A.", biz: "Constructora Sur", quote: "Me dijeron que en 7 días y en 7 días estaba listo. Mis clientes dicen que el sitio se ve muy profesional." },
    { name: "Laura F.", biz: "Gym ProFit", quote: "No tenía ni idea de cómo arrancar con redes. Lo hicieron todo. Ahora mi Instagram crece solo." },
    { name: "Diego M.", biz: "Abogado independiente", quote: "Tenía vergüenza de no tener web siendo profesional. Ahora la uso para captar clientes y funciona." },
    { name: "Sofía R.", biz: "Cocina Casera", quote: "El formulario de WhatsApp fue un cambio total. La gente me escribe directo desde el teléfono." },
    { name: "Carlos V.", biz: "TechRepair", quote: "Mis ventas online subieron un 40% el primer mes. El retorno de la inversión fue casi inmediato." },
  ];
  return (
    <section ref={ref} style={{ padding: "100px 28px", background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Resultados reales</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.ink, margin: 0, letterSpacing: "-0.035em" }}>
            Negocios como el tuyo<br />ya están creciendo.
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {reviews.map((r, i) => (
            <motion.div key={r.name} variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}
              style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 32, transition: "all 0.2s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.bg; e.currentTarget.style.borderColor = C.borderDark; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.card; e.currentTarget.style.borderColor = C.border; }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: C.ink, fontSize: 14 }}>★</span>)}
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted, lineHeight: 1.72, margin: "0 0 22px", fontStyle: "italic" }}>"{r.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.bgAlt, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: C.ink }}>{r.name[0]}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: C.ink, margin: 0 }}>{r.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, margin: 0 }}>{r.biz}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

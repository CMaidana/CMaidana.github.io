import { motion } from "framer-motion";
import { useReveal, up, fi } from '../utils';
import { C } from "../constants";

function Solution() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} style={{ padding: "100px 28px", background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>La transformación</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.ink, margin: 0, letterSpacing: "-0.035em" }}>Tu negocio, antes y después</h2>
        </motion.div>
        <div className="ba-grid" style={{ display: "grid", gridTemplateColumns: "1fr 56px 1fr", alignItems: "center" }}>
          <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}
            style={{ background: C.card, border: `1px solid ${C.border}`, borderRight: "none", borderRadius: "14px 0 0 14px", padding: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.inkLight }}/>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Antes</span>
            </div>
            {["Invisible en Google", "Sin Instagram profesional", "Clientes van a la competencia", "Todo manual y sin sistema", "Sin forma de contacto online"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{ color: C.inkLight, fontSize: 14, marginTop: 2 }}>—</span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted, margin: 0 }}>{item}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fi} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}
            style={{ background: C.bgAlt, border: `1px solid ${C.border}`, alignSelf: "stretch", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6 }}>
            <svg className="arrow-icon" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M10 5l4 4-4 4" stroke={C.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: C.inkMuted, textAlign: "center" }}>7 días</span>
          </motion.div>
          <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={2}
            style={{ background: C.ink, border: `1px solid ${C.ink}`, borderLeft: "none", borderRadius: "0 14px 14px 0", padding: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.bg }}/>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(250,250,250,0.55)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Después</span>
            </div>
            {["Aparecés en Google", "Instagram profesional activo", "Leads entrando todos los días", "Formularios y WhatsApp automáticos", "Sitio web que vende 24/7"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{ color: C.bg, fontSize: 14, marginTop: 2 }}>✓</span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.bg, margin: 0 }}>{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <style>{`@media(max-width:700px){.arrow-icon{transform: rotate(90deg);} .ba-grid{grid-template-columns:1fr!important}.ba-grid>div:nth-child(2){display:none}.ba-grid>div:first-child{border-radius:14px 14px 0 0!important;border-right:1px solid ${C.border}!important;border-bottom:none}.ba-grid>div:last-child{border-radius:0 0 14px 14px!important;border-left:1px solid ${C.ink}!important}}`}</style>
      </div>
    </section>
  );
}

export default Solution;

import { motion } from "framer-motion";
import { useReveal, up } from '../utils';
import { C } from "../constants";
import { features } from "../constants/index";
import HexLogo from "./HexLogo";

function Features() {
  const [ref, inView] = useReveal();
  const cats = features;
  return (
    <section id="services" ref={ref} style={{ padding: "100px 28px", background: C.ink, borderTop: `1px solid ${C.border}`, position: "relative" }}>
      <div style={{ position: "absolute", left: -80, top: "50%", transform: "translateY(-50%)", opacity: 0.06, pointerEvents: "none" }}>
        <HexLogo size={520} color={C.bg}/>
      </div>
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Todo incluido</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.bg, margin: "0 0 16px", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
            Una solución completa.<br />Sin complicaciones.
          </h2>
          {/* <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: C.inkMuted, maxWidth: 480, margin: 0, lineHeight: 1.72 }}>Nos encargamos de todo para que vos te enfoques en tu negocio.</p> */}
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", background: C.border }}>
          {cats.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.title} variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}
                style={{ background: C.card, padding: 36, transition: "background 0.2s", cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.background = C.bgAlt}
                onMouseLeave={e => e.currentTarget.style.background = C.card}>
                <div style={{ color: C.ink, marginBottom: 20 }}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: C.ink, margin: "0 0 20px", letterSpacing: "-0.02em" }}>{cat.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11 }}>
                      <span style={{ color: C.inkLight, fontSize: 14, flexShrink: 0, marginTop: 1 }}>—</span>
                      <span style={{ textAlign: 'left', fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <span style={{ textAlign: 'left', fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted }}>{ cat.description }</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

export default Features;

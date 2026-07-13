import { motion } from "framer-motion";
import { useReveal, up } from '../utils';
import { AboutUsDescription, AboutUsText, AboutUsTitle, C } from "../constants";
import { features } from "../constants/index";

function AboutUs() {
  const [ref, inView] = useReveal();
  const bullets = AboutUsText;
  return (
    <section id="about-us" ref={ref} style={{ padding: "100px 28px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Todo incluido</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.ink, margin: "0 0 16px", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
            { AboutUsTitle }
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: C.inkMuted, margin: 0, lineHeight: 1.72 }}> { AboutUsDescription } </p>
        </motion.div>
        <motion.div key={`about-us-list`} variants={up} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{ background: C.card, padding: 36, border: `1px solid ${C.border}`, borderRadius: 14, maxWidth: 600, margin: "0 auto", transition: "background 0.2s", cursor: "default" }}
          onMouseEnter={e => e.currentTarget.style.background = C.bgAlt}
          onMouseLeave={e => e.currentTarget.style.background = C.card}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {bullets.map(item => (
              <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11 }}>
                <span style={{ color: C.inkLight, fontSize: 14, flexShrink: 0, marginTop: 1 }}>—</span>
                <span style={{ textAlign: 'left', fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted }}>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;

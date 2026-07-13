import { motion } from "framer-motion";
import Counter from "./Counter";
import { useReveal, up, fi } from '../utils';
import { C } from "../constants";

function SocialProof() {
  const [ref, inView] = useReveal();
  const logos = ["Ferretería Sur", "Gym ProFit", "Abogados & Co.", "Studio Design", "Cocina Casera", "TechRepair UY"];
  return (
    <section ref={ref} style={{ padding: "64px 28px", background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.p variants={up} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>
          Negocios que ya atraen clientes online
        </motion.p>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", marginBottom: 56 }}>
          {logos.map((l, i) => (
            <motion.span key={l} variants={fi} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: C.inkLight, letterSpacing: "-0.01em" }}>
              {l}
            </motion.span>
          ))}
        </div>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={3}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", gap: 1, background: C.border }}>
          {[
            { v: 120, s: "+", l: "Negocios lanzados" },
            { v: 7, s: " días", l: "Tiempo de lanzamiento" },
            { v: 94, s: "%", l: "Clientes satisfechos" },
            { v: 3, s: "x", l: "Más leads promedio" },
          ].map(m => (
            <div key={m.l} style={{ background: C.card, padding: "36px 28px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800, color: C.ink, margin: "0 0 6px", letterSpacing: "-0.04em" }}>
                <Counter end={m.v} suffix={m.s}/>
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.inkMuted, margin: 0 }}>{m.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SocialProof;

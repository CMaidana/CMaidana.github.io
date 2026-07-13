import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useReveal, up } from '../utils';
import HexLogo from "./HexLogo";
import { C, PRICES, CURRENCY, FinalCTABadge, FinalCTAHeading, FinalCTADescription, FinalCTAPrimaryLabel, FinalCTASecondaryLabel, FinalCTAFooter, FinalCTAWhatsappUrl } from "../constants";

function FinalCTA() {
  const [ref, inView] = useReveal();
  const [headingLine1, headingLine2] = FinalCTAHeading.split('|');
  return (
    <section id="contacto" ref={ref} style={{ padding: "100px 28px", background: C.ink, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", opacity: 0.06, pointerEvents: "none" }}>
        <HexLogo size={520} color={C.bg}/>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(250,250,250,0.08)", border: "1px solid rgba(250,250,250,0.18)", borderRadius: 100, padding: "5px 14px", marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.bg, display: "inline-block" }}/>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.bg, fontWeight: 500 }}>{FinalCTABadge}</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 62px)", fontWeight: 800, color: C.bg, margin: "0 0 22px", letterSpacing: "-0.04em", lineHeight: 1.03 }}>
            {headingLine1}<br />{headingLine2}
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(250,250,250,0.62)", marginBottom: 52, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 52px" }}>
            {FinalCTADescription}
          </p>
          {/* <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#precios"
              style={{ background: C.bg, color: C.ink, padding: "16px 32px", borderRadius: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 9, transition: "all 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.bgAlt; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.bg; e.currentTarget.style.transform = "none"; }}>
              {FinalCTAPrimaryLabel} {CURRENCY}{PRICES.starter.monthly}/mes
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M10 4l4 4-4 4" stroke={C.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href={FinalCTAWhatsappUrl}
              style={{ background: "transparent", color: C.bg, padding: "16px 32px", borderRadius: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, textDecoration: "none", border: "1.5px solid rgba(250,250,250,0.28)", transition: "all 0.18s", display: "inline-flex", alignItems: "center", gap: 9 }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(250,250,250,0.8)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(250,250,250,0.28)"}>
              <MessageCircle size={18} />
              {FinalCTASecondaryLabel}
            </a>
          </div> */}
          {/* <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.36)", marginTop: 28 }}>
            {FinalCTAFooter}
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;

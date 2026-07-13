import { motion } from "framer-motion";
import { up } from "../utils";
import { C } from "../constants";
import HexLogo from "./HexLogo";
import MockupCard from "./MockupCard";
import { HeroAvailableSpots, HeroText, HeroStartNow } from "../constants/index";

function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: C.bg, paddingTop: 66, position: "relative", overflow: "hidden" }}>
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${C.border} 1px, transparent 1px)`, backgroundSize: "28px 28px", opacity: 0.8 }}/>
      {/* Faint watermark logo */}
      <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", opacity: 0.04, pointerEvents: "none" }}>
        <HexLogo size={640} color={C.ink}/>
      </div>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 28px 80px", position: "relative", width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <motion.div variants={up} initial="hidden" animate="visible" custom={0}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.bgAlt, border: `1px solid ${C.border}`, borderRadius: 100, padding: "5px 14px", marginBottom: 32 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.ink, display: "inline-block" }}/>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.ink, fontWeight: 500 }}>{HeroAvailableSpots}</span>
            </motion.div>

            <motion.h1 variants={up} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(40px, 5.5vw, 70px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.04em", color: C.ink, margin: "0 0 26px" }}>
              { HeroText }
            </motion.h1>

            {/* <motion.p variants={up} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.75, color: C.inkMuted, marginBottom: 44, maxWidth: 460 }}>
              para impulsar tu negocio — sitio web profesional.
            </motion.p> */}

            <motion.div variants={up} initial="hidden" animate="visible" custom={3}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#precios"
                style={{ background: C.ink, color: C.bg, padding: "15px 30px", borderRadius: 9, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 9, transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.84"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
                { HeroStartNow }
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 7.5h11M9 3.5l4 4-4 4" stroke={C.bg} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              {/* <a href="#como-funciona"
                style={{ background: "transparent", color: C.ink, padding: "15px 28px", borderRadius: 9, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 16, textDecoration: "none", border: `1.5px solid ${C.ink}`, transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.ink; e.currentTarget.style.color = C.bg; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.ink; }}>
                Ver ejemplos
              </a> */}
            </motion.div>

            {/* <motion.div variants={up} initial="hidden" animate="visible" custom={4}
              style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex" }}>
                {["CM", "AR", "LF", "DM", "SR"].map((initials, i) => (
                  <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: C.bgAlt, border: `2px solid ${C.bg}`, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: i > 0 ? -9 : 0, fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, color: C.ink }}>
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                  {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: C.ink, fontSize: 13 }}>★</span>)}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.inkMuted, margin: 0 }}>
                  <strong style={{ color: C.ink }}>+120 negocios</strong> lanzados online
                </p>
              </div>
            </motion.div> */}
          </div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
            <MockupCard />
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important}.hero-grid>div:last-child{display:none}}`}</style>
    </section>
  );
};

export default Hero;

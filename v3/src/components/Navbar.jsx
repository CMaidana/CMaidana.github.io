import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "../assets/icon.png";
import { C } from "../constants";
import HexLogo from "./HexLogo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { 'name': "Servicios", key: 'services' }, 
    { name: "Sobre nosotros", key: 'about-us' },
    { name: "Contacto", key: 'contact' },
    //{ name: "FAQ", key: 'faq'},
  ];
  return (
    <motion.nav
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(250,250,250,0.95)" : C.bg,
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "all 0.3s",
      }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <HexLogo size={30} color={C.ink}/>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, color: C.ink, letterSpacing: "-0.03em" }}>
            CMSYSTEMS<span style={{ color: C.inkMuted }}>.io</span>
          </span>
        </a>
        <div className="nav-links" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {links.map( ({name, key}) => (
            <a key={key} href={`#${key}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.inkMuted, textDecoration: "none", transition: "color 0.18s" }}
              onMouseEnter={e => e.target.style.color = C.ink}
              onMouseLeave={e => e.target.style.color = C.inkMuted}>{name}</a>
          ))}
        </div>
        <button onClick={() => setOpen(v => !v)} className="nav-burger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }} aria-label="Menu">
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 22, height: 1.5, background: C.ink, marginBottom: i < 2 ? 5 : 0, transition: "all 0.2s",
              transform: open ? (i === 0 ? "rotate(45deg) translateY(6.5px)" : i === 2 ? "rotate(-45deg) translateY(-6.5px)" : "scaleX(0)") : "none",
            }}/>
          ))}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: C.bg, borderTop: `1px solid ${C.border}`, overflow: "hidden" }}>
            <div style={{ padding: "16px 28px 24px" }}>
              {links.map(l => (
                <a key={l} href="#" onClick={() => setOpen(false)}
                  style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.ink, textDecoration: "none", padding: "13px 0", borderBottom: `1px solid ${C.border}` }}>{l}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        *{box-sizing:border-box}body{margin:0;background:${C.bg}}
        @media(max-width:800px){.nav-links{display:none!important}.nav-burger{display:block!important}}
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
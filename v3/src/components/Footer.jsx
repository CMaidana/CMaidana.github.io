import HexLogo from "./HexLogo";
import { C, FooterNote } from "../constants";

function Footer() {
  return (
    <footer style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, padding: "52px 28px 32px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 44 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <HexLogo size={30} color={C.ink}/>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: C.ink, letterSpacing: "-0.025em" }}>CMSYSTEMS<span style={{ color: C.inkMuted }}>.io</span></span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.inkMuted, lineHeight: 1.7, maxWidth: 280, margin: "0 0 20px" }}>
              {FooterNote}
            </p>
            <a href="mailto:hola@cmsystems.io" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, textDecoration: "none", borderBottom: `1px solid ${C.border}`, paddingBottom: 2 }}>hola@cmsystems.io</a>
          </div>
          {[
            { title: "Servicios", links: ["Landing page", "E-commerce", "Instagram setup", "Branding"] },
            { title: "Empresa", links: ["Sobre nosotros", "Casos de éxito", "Blog", "Trabajá con nosotros"] },
            { title: "Soporte", links: ["FAQ", "WhatsApp", "Estado", "Términos"] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: C.ink, margin: "0 0 16px", letterSpacing: "-0.01em" }}>{col.title}</p>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.inkMuted, textDecoration: "none", marginBottom: 10, transition: "color 0.18s" }}
                  onMouseEnter={e => e.target.style.color = C.ink}
                  onMouseLeave={e => e.target.style.color = C.inkMuted}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.inkMuted, margin: 0 }}>© 2025 CMSYSTEMS.io — Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Instagram", "LinkedIn", "WhatsApp"].map(s => (
              <a key={s} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.inkMuted, textDecoration: "none", transition: "color 0.18s" }}
                onMouseEnter={e => e.target.style.color = C.ink}
                onMouseLeave={e => e.target.style.color = C.inkMuted}>{s}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}

export default Footer;

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useReveal, up } from '../utils';
import HexLogo from "./HexLogo";
import { C, ContactLabel, ContactHeading, ContactDescription, contactChannels } from "../constants";

const iconMap = { Mail, MessageCircle, Phone, MapPin };

const channels = contactChannels.map(ch => ({ ...ch, icon: iconMap[ch.icon] }));

function Contact() {
  const [ref, inView] = useReveal();

  return (
    <section id="contacto" ref={ref} style={{ padding: "100px 28px", background: C.ink, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -80, top: "50%", transform: "translateY(-50%)", opacity: 0.06, pointerEvents: "none" }}>
        <HexLogo size={520} color={C.bg}/>
      </div>
      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.inkMuted, margin: "0 0 14px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {ContactLabel}
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, color: C.bg, margin: "0 0 18px", letterSpacing: "-0.04em", lineHeight: 1.08 }}>
            {ContactHeading}
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(250,250,250,0.55)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
            {ContactDescription}
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {channels.map((ch, i) => {
            const Tag = ch.href ? "a" : "div";
            return (
              <motion.div key={ch.label} variants={up} custom={i} initial="hidden" animate={inView ? "visible" : "hidden"}>
                <Tag
                  {...(ch.href ? { href: ch.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
                    padding: "36px 18px", borderRadius: 14,
                    background: "rgba(250,250,250,0.05)", border: "1px solid rgba(250,250,250,0.1)",
                    textDecoration: "none", transition: "all 0.2s", cursor: ch.href ? "pointer" : "default",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(250,250,250,0.10)"; e.currentTarget.style.borderColor = "rgba(250,250,250,0.22)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(250,250,250,0.05)"; e.currentTarget.style.borderColor = "rgba(250,250,250,0.1)"; }}
                >
                  <ch.icon size={24} strokeWidth={1.6} color={C.bg} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 600, color: C.bg, letterSpacing: "-0.01em" }}>{ch.label}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.5)", lineHeight: 1.5, textAlign: "center" }}>{ch.value}</span>
                </Tag>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

export default Contact;

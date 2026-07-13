import { motion } from "framer-motion";
import { useReveal, up } from '../utils';
import { C, PRICES, CURRENCY } from "../constants";

function Pricing() {
  const [ref, inView] = useReveal();
  const plans = [
    { name: "Starter", setup: PRICES.starter.setup, monthly: PRICES.starter.monthly, desc: "Ideal para empezar a tener presencia online hoy.", highlight: false,
      features: ["Landing page 1 página", "Hosting incluido 1 año", "Branding básico + logo", "Formulario de contacto", "WhatsApp integrado", "Soporte por email"],
      cta: "Empezar ahora" },
    { name: "Growth", setup: PRICES.growth.setup, monthly: PRICES.growth.monthly, desc: "Para negocios listos para crecer y conseguir más clientes.", highlight: true, badge: "Más elegido",
      features: ["Web hasta 5 páginas", "Instagram optimizado", "Google Analytics", "Formularios avanzados", "1 revisión mensual", "Soporte prioritario"],
      cta: "Elegir Growth" },
    { name: "Pro", setup: PRICES.pro.setup, monthly: PRICES.pro.monthly, desc: "Automatización completa y funcionalidades avanzadas.", highlight: false,
      features: ["Todo en Growth", "E-commerce o reservas", "Automatizaciones CRM", "Campañas básicas", "2 revisiones mensuales", "Soporte 24/7"],
      cta: "Hablar con asesor" },
  ];
  return (
    <section id="precios" ref={ref} style={{ padding: "100px 28px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Precios claros</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.ink, margin: "0 0 16px", letterSpacing: "-0.035em" }}>
            Invertí en clientes,<br />no en tecnología.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted, margin: 0 }}>Setup único + suscripción mensual. Sin contratos. Cancelás cuando quieras.</p>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {plans.map((plan, i) => (
            <motion.div key={plan.name} variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}
              style={{ background: plan.highlight ? C.ink : C.card, border: `1px solid ${plan.highlight ? C.ink : C.border}`, borderRadius: 16, padding: 36, position: "relative", overflow: "hidden", transition: "transform 0.2s" }}
              whileHover={{ y: -4 }}>
              {plan.badge && (
                <div style={{ position: "absolute", top: 18, right: 18, background: plan.highlight ? C.bg : C.ink, color: plan.highlight ? C.ink : C.bg, fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", padding: "4px 12px", borderRadius: 100, letterSpacing: "0.04em" }}>
                  {plan.badge}
                </div>
              )}
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, color: plan.highlight ? C.bg : C.ink, margin: "0 0 8px", letterSpacing: "-0.025em" }}>{plan.name}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: plan.highlight ? "rgba(250,250,250,0.6)" : C.inkMuted, margin: "0 0 24px" }}>{plan.desc}</p>
              <div style={{ marginBottom: 6 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: plan.highlight ? "rgba(250,250,250,0.55)" : C.inkMuted }}>Setup único: </span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: plan.highlight ? C.bg : C.ink }}>{CURRENCY}{plan.setup}</span>
              </div>
              <div style={{ marginBottom: 32 }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 38, fontWeight: 800, color: plan.highlight ? C.bg : C.ink, letterSpacing: "-0.04em" }}>{CURRENCY}{plan.monthly}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: plan.highlight ? "rgba(250,250,250,0.55)" : C.inkMuted }}>/mes</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ color: plan.highlight ? "rgba(250,250,250,0.7)" : C.inkLight, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: plan.highlight ? C.bg : C.inkMuted }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto"
                style={{ display: "block", textAlign: "center", padding: "13px 24px", borderRadius: 9,
                  background: plan.highlight ? C.bg : "transparent",
                  color: C.ink,
                  border: `1.5px solid ${plan.highlight ? C.bg : C.border}`,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.background = plan.highlight ? C.bgAlt : C.ink; e.currentTarget.style.color = plan.highlight ? C.ink : C.bg; e.currentTarget.style.borderColor = plan.highlight ? C.bgAlt : C.ink; }}
                onMouseLeave={e => { e.currentTarget.style.background = plan.highlight ? C.bg : "transparent"; e.currentTarget.style.color = C.ink; e.currentTarget.style.borderColor = plan.highlight ? C.bg : C.border; }}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
        <motion.p variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={4}
          style={{ textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.inkMuted, marginTop: 24 }}>
          🔒 Sin contratos largos · Cancelás cuando quieras · Soporte en español
        </motion.p>
      </div>
    </section>
  );
}

export default Pricing;

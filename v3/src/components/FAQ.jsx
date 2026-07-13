import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal, up } from '../utils';
import { C } from "../constants";

function FAQ() {
  const [ref, inView] = useReveal();
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "¿Cuánto tiempo tarda en estar listo mi sitio?", a: "Entre 5 y 7 días hábiles desde que aprobás el diseño. Trabajamos rápido para que empieces a conseguir clientes lo antes posible." },
    { q: "¿Puedo pedir cambios después del lanzamiento?", a: "Sí. Todos los planes incluyen revisiones mensuales. Cambios urgentes los resolvemos en menos de 48 horas por WhatsApp." },
    // { q: "¿Yo soy dueño del sitio web?", a: "Sí, el sitio es 100% tuyo. Te entregamos todos los accesos: hosting, dominio, panel de administración. Si cancelás, podés llevarte todo." },
    // { q: "¿Qué pasa si cancelo la suscripción?", a: "Podés cancelar en cualquier momento sin penalidades. Te entregamos todos los archivos y accesos del sitio." },
    { q: "¿Necesito saber de tecnología?", a: "Para nada. Nuestro proceso está diseñado para que vos solo respondas preguntas sobre tu negocio. Del resto nos encargamos nosotros." },
    { q: "¿En cuánto tiempo veo resultados?", a: "Muchos clientes reciben su primera consulta en la primera semana. Google tarda 30-90 días; Instagram y WhatsApp son inmediatos." },
  ];
  return (
    <section id="faq" ref={ref} style={{ padding: "100px 28px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <motion.div variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Preguntas frecuentes</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: C.ink, margin: 0, letterSpacing: "-0.035em" }}>Tenemos las respuestas.</h2>
        </motion.div>
        {faqs.map((faq, i) => (
          <motion.div key={i} variants={up} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i * 0.4}
            style={{ borderBottom: `1px solid ${C.border}` }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, textAlign: "left" }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: C.ink, letterSpacing: "-0.01em" }}>{faq.q}</span>
              <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                style={{ width: 28, height: 28, borderRadius: "50%", background: C.bgAlt, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: C.inkMuted, fontSize: 18, lineHeight: 1 }}>+</span>
              </motion.div>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: C.inkMuted, lineHeight: 1.72, paddingBottom: 22, margin: 0 }}>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;

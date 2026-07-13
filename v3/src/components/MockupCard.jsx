import { C } from "../constants";

function MockupCard() {
return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: 22, boxShadow: "0 20px 60px rgba(34,34,34,0.10), 0 4px 16px rgba(34,34,34,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 18 }}>
        {["#ff5f57", "#ffbd2e", "#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }}/>)}
        <div style={{ flex: 1, background: C.bgAlt, borderRadius: 5, padding: "4px 12px", marginLeft: 6 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.inkMuted }}>tuempresa.com</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
        {[{ l: "Visitas hoy", v: "248", d: "+18%" }, { l: "Leads", v: "12", d: "+5" }, { l: "Conversión", v: "4.8%", d: "↑" }].map(s => (
          <div key={s.l} style={{ background: C.bgAlt, borderRadius: 10, padding: "10px 11px", border: `1px solid ${C.border}` }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: C.inkMuted, margin: "0 0 4px" }}>{s.l}</p>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, color: C.ink, margin: "0 0 2px", fontWeight: 800 }}>{s.v}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: C.inkMuted, margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: C.bgAlt, borderRadius: 10, padding: "12px 14px", marginBottom: 12, border: `1px solid ${C.border}` }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.inkMuted, margin: "0 0 10px" }}>Tráfico esta semana</p>
        <svg width="100%" height="52" viewBox="0 0 260 52" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={C.ink} stopOpacity="0.1"/>
              <stop offset="100%" stopColor={C.ink} stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,44 L36,37 L72,31 L108,16 L144,24 L180,8 L216,14 L260,3 L260,52 L0,52Z" fill="url(#cg)"/>
          <path d="M0,44 L36,37 L72,31 L108,16 L144,24 L180,8 L216,14 L260,3" fill="none" stroke={C.ink} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
      <div style={{ background: C.bgAlt, borderRadius: 10, padding: 12, border: `1px solid ${C.border}` }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.inkMuted, margin: "0 0 8px" }}>Últimos contactos</p>
        {[{ n: "Carlos M.", v: "Formulario web", t: "hace 2h" }, { n: "Ana R.", v: "WhatsApp", t: "hace 4h" }, { n: "Pedro L.", v: "Instagram", t: "ayer" }].map((l, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderTop: i > 0 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: C.border, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 11, color: C.ink, fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>{l.n[0]}</span>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.ink, margin: 0, fontWeight: 600 }}>{l.n}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: C.inkMuted, margin: 0 }}>{l.v}</p>
              </div>
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: C.inkLight }}>{l.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MockupCard;

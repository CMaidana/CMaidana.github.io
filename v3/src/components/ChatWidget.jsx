import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HexLogo from "./HexLogo";
import { C, ChatTitle, ChatSubtitle, ChatMessage, ChatButtonLabel, ChatWhatsappUrl } from "../constants";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 200 }}>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 14, scale: 0.93 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.93 }} transition={{ duration: 0.22 }}
            style={{ position: "absolute", bottom: 66, right: 0, width: 288, background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 56px rgba(34,34,34,0.14)" }}>
            <div style={{ background: C.ink, padding: "15px 18px", display: "flex", alignItems: "center", gap: 10 }}>
              <HexLogo size={26} color={C.bg}/>
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: C.bg, margin: 0 }}>{ChatTitle}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(250,250,250,0.55)", margin: 0 }}>{ChatSubtitle}</p>
              </div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ background: C.bgAlt, borderRadius: 10, padding: "10px 14px", marginBottom: 12, border: `1px solid ${C.border}` }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, margin: 0, lineHeight: 1.55 }}>{ChatMessage}</p>
              </div>
              <a href={ChatWhatsappUrl}
                style={{ display: "block", background: C.ink, color: C.bg, padding: "11px 16px", borderRadius: 9, textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "opacity 0.18s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                {ChatButtonLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={() => setOpen(v => !v)} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
        style={{ width: 50, height: 50, borderRadius: "50%", background: C.ink, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 28px rgba(34,34,34,0.24)" }}>
        {open
          ? <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1 1l13 13M14 1L1 14" stroke={C.bg} strokeWidth="2" strokeLinecap="round"/></svg>
          : <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M2 3.5A2 2 0 014 1.5h11a2 2 0 012 2v8a2 2 0 01-2 2H6l-4 3V3.5z" fill={C.bg}/></svg>
        }
      </motion.button>
    </div>
  );
}

export default ChatWidget;

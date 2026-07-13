import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useReveal } from "../utils";

function Counter({ end, suffix = "" }) {
  const [n, setN] = useState(0);
  const [ref, inView] = useReveal(0.5);
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = end / 55;
    const t = setInterval(() => {
      v += step;
      if (v >= end) { setN(end); clearInterval(t); }
      else setN(Math.floor(v));
    }, 18);
    return () => clearInterval(t);
  }, [inView, end]);
  return <span ref={ref}>{n}{suffix}</span>;
};

export default Counter;
function HexLogo({ size = 32, color = "#222" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 4L95 28.5V77.5L50 102L5 77.5V28.5L50 4Z"
        stroke={color} strokeWidth="7" fill="none" strokeLinejoin="round"
      />
      <text x="50" y="62" dominantBaseline="middle" textAnchor="middle"
        fontFamily="'Courier New', monospace" fontWeight="700" fontSize="30"
        fill={color} letterSpacing="-1">&lt;/&gt;</text>
    </svg>
  );
}

export default HexLogo;

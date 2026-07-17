import React from "react";

const TickerBar = () => {
  const items = [
    { dot: "green",  text: "Same-day reports available for CBC, Lipid Profile & more", tag: "NEW" },
    { dot: "yellow", text: "NABL & NABH Accredited Laboratory — Trusted Diagnostics Since 1985" },
    { dot: "cyan",   text: "Home sample collection available across 200+ cities • Book now" },
    { dot: "pink",   text: "Whole Genome Sequencing now at MDRC Genomics Division", tag: "HOT" },
    { dot: "green",  text: "Flat 20% off on all Genomic Panels this month — Use code: GENE20" },
    { dot: "yellow", text: "Radiology • Pathology • Molecular Diagnostics — All under one roof" },
  ];

  const dotColors = {
    green:  { bg: "#4ade80", shadow: "0 0 6px #4ade80" },
    yellow: { bg: "#facc15", shadow: "none" },
    cyan:   { bg: "#67e8f9", shadow: "none" },
    pink:   { bg: "#f9a8d4", shadow: "none" },
  };

  const allItems = [...items, ...items]; // duplicate for seamless loop

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

       .ticker-bar {
  background: linear-gradient(90deg, #0a2a5e 0%, #1a4a8a 40%, #0e6b6b 100%);
  height: 36px;
  display: flex;
  align-items: center;
  overflow: hidden;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 99999;

  font-family: 'DM Sans', sans-serif;
}

        .ticker-bar::before,
        .ticker-bar::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 60px;
          z-index: 2;
          pointer-events: none;
        }
        .ticker-bar::before { left: 0; background: linear-gradient(90deg, #0a2a5e, transparent); }
        .ticker-bar::after  { right: 0; background: linear-gradient(-90deg, #0e6b6b, transparent); }

        .ticker-live-badge {
          flex-shrink: 0;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 3px 14px;
          border-radius: 99px;
          margin-left: 18px;
          white-space: nowrap;
          z-index: 3;
          font-family: 'DM Sans', sans-serif;
        }

        .ticker-track-wrap {
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        .ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-scroll 32s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 28px;
          white-space: nowrap;
          font-size: 12.5px;
          color: rgba(255,255,255,0.88);
          font-weight: 500;
          border-right: 1px solid rgba(255,255,255,0.15);
          height: 36px;
          font-family: 'DM Sans', sans-serif;
        }

        .ticker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ticker-dot.green {
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80;
          animation: ticker-blink 2s ease-in-out infinite;
        }

        @keyframes ticker-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }

        .ticker-tag {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 1px 8px;
          border-radius: 99px;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      <div className="ticker-bar">
        <span className="ticker-live-badge">Live</span>
        <div className="ticker-track-wrap">
          <div className="ticker-track">
            {allItems.map((item, i) => (
              <div key={i} className="ticker-item">
                <span
                  className={`ticker-dot ${item.dot === "green" ? "green" : ""}`}
                  style={{
                    background: dotColors[item.dot]?.bg,
                    boxShadow: dotColors[item.dot]?.shadow,
                  }}
                />
                {item.text}
                {item.tag && <span className="ticker-tag">{item.tag}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TickerBar;
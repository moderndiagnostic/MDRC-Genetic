import { useState, useEffect } from "react";

const STEPS = [
  { p: 18, t: "LOADING 18%", c: 0 },
  { p: 38, t: "LOADING 38%", c: 1 },
  { p: 62, t: "LOADING 62%", c: 2 },
  { p: 84, t: "LOADING 84%", c: 3 },
  { p: 100, t: "READY 100%", c: 3 },
];

const CHIPS = ["SYSTEM", "LABS", "IMAGING", "REPORTS"];

export default function ModernPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState("LOADING 0%");
  const [activeChip, setActiveChip] = useState(-1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let i = 0;

    const iv = setInterval(() => {
      if (i < STEPS.length) {
        const s = STEPS[i];

        setProgress(s.p);
        setLabel(s.t);
        setActiveChip(s.c);

        i++;
      } else {
        clearInterval(iv);

        setTimeout(() => {
          setFadeOut(true);

          setTimeout(() => {
            onComplete?.();
          }, 700);
        }, 400);
      }
    }, 600);

    return () => clearInterval(iv);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
        transition: "opacity 0.7s ease, visibility 0.7s ease",
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,131,176,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,131,176,0.03) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
          animation: "gridMove 10s linear infinite",
        }}
      />

      {/* Corner Brackets */}
      {[
        {
          top: 18,
          left: 18,
          borderTop: "2px solid #0083B0",
          borderLeft: "2px solid #0083B0",
        },
        {
          top: 18,
          right: 18,
          borderTop: "2px solid #0083B0",
          borderRight: "2px solid #0083B0",
        },
        {
          bottom: 18,
          left: 18,
          borderBottom: "2px solid #0083B0",
          borderLeft: "2px solid #0083B0",
        },
        {
          bottom: 18,
          right: 18,
          borderBottom: "2px solid #0083B0",
          borderRight: "2px solid #0083B0",
        },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            opacity: 0.2,
            ...s,
          }}
        />
      ))}

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: "blkIn 0.8s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        {/* Logo + Rectangle Ring */}
        <div
          style={{
            position: "relative",
            width: 280,
            height: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Spinning Rectangle */}
          <div
            style={{
              position: "absolute",
              width: 130,
              height: 130,
              border: "3px solid #05AF79",
              borderRadius: 30,
              animation: "spinCW 6s linear infinite",
              boxShadow: "0 0 20px rgba(0,131,176,0.15)",
            }}
          />

          {/* Logo */}
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1779092594/logo_bg_removed_uc7dnc.png"
            alt="Modern Diagnostic Logo"
            style={{
              position: "relative",
              zIndex: 5,
              width: 190,
              height: 190,
              objectFit: "contain",
              filter: "drop-shadow(0 4px 18px rgba(0,131,176,0.2))",
            }}
          />
        </div>

        {/* ECG Line */}
        <div
          style={{
            marginTop: -50,
            width: 280,
            height: 40,
            overflow: "hidden",
            position: "relative",
            animation: "fadeUp 0.7s ease 0.55s both",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: "100%",
              background: "linear-gradient(90deg,#fff,transparent)",
              zIndex: 2,
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 40,
              height: "100%",
              background: "linear-gradient(270deg,#fff,transparent)",
              zIndex: 2,
            }}
          />

          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 0,
              top: 0,
              animation: "ecgSlide 2.4s linear infinite",
            }}
          >
            {[0, 1].map((k) => (
              <svg
                key={k}
                width="280"
                height="40"
                viewBox="0 0 280 40"
                fill="none"
              >
                <path
                  d="M0 24 L28 24 L36 24 L42 7 L50 37 L56 3 L64 34 L72 24 L108 24 L124 24 L130 7 L138 37 L144 3 L152 34 L160 24 L196 24 L212 24 L218 7 L226 37 L232 3 L240 34 L248 24 L280 24"
                  stroke="#0083B0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            animation: "fadeUp 0.7s ease 0.7s both",
          }}
        >
          <div
            style={{
              width: 240,
              height: 3,
              background: "rgba(0,131,176,0.1)",
              borderRadius: 3,
              position: "relative",
              overflow: "visible",
            }}
          >
            <div
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg,#0055a5,#0083B0,#00b4d8)",
                borderRadius: 3,
                width: `${progress}%`,
                transition: "width 0.45s cubic-bezier(0.4,0,0.2,1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -5,
                  top: -4,
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "#0083B0",
                  boxShadow:
                    "0 0 10px rgba(0,131,176,0.9), 0 0 20px rgba(0,131,176,0.4)",
                }}
              />
            </div>
          </div>

          <div
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 3,
              color: "#0083B0",
            }}
          >
            {label}
          </div>

          <div style={{ display: "flex", gap: 6 }}>
            {CHIPS.map((chip, i) => (
              <div
                key={i}
                style={{
                  padding: "3px 12px",
                  borderRadius: 20,
                  fontFamily: "'Raleway',sans-serif",
                  fontSize: 10,
                  letterSpacing: "1.5px",
                  border:
                    i <= activeChip
                      ? "1px solid rgba(0,131,176,0.5)"
                      : "1px solid rgba(0,131,176,0.15)",
                  color:
                    i <= activeChip
                      ? "#0083B0"
                      : "rgba(0,131,176,0.3)",
                  background:
                    i <= activeChip
                      ? "rgba(0,131,176,0.06)"
                      : "transparent",
                  transition: "all 0.4s ease",
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Raleway:wght@400&display=swap');

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 44px 44px; }
        }

        @keyframes blkIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spinCW {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ecgSlide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-280px);
          }
        }
      `}</style>
    </div>
  );
}
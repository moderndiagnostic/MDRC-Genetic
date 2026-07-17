import React, { useState, useEffect } from "react";

const SupportWidget = () => {
  
  const [open, setOpen] = useState(false);
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);
  const [ripple, setRipple] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipple(true);
      setTimeout(() => setRipple(false), 1800);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .sw-root * {
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        /* ── Floating Button ── */
        .sw-btn-wrap {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
        }

        .sw-ripple-ring {
          position: absolute;
          inset: -10px;
          border-radius: 999px;
          border: 2px solid rgba(74, 222, 128, 0.55);
          animation: sw-ripple-out 1.8s ease-out forwards;
          pointer-events: none;
        }

        .sw-ripple-ring-2 {
          animation-delay: 0.3s;
          border-color: rgba(74, 222, 128, 0.3);
        }

        @keyframes sw-ripple-out {
          0%   { transform: scale(1);   opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .sw-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px 14px 14px;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.15) inset,
            0 8px 32px rgba(22, 163, 74, 0.55),
            0 2px 8px rgba(0,0,0,0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }

        .sw-btn::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%);
          border-radius: 999px 999px 0 0;
          pointer-events: none;
        }

        .sw-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.15) inset,
            0 14px 40px rgba(22, 163, 74, 0.65),
            0 4px 12px rgba(0,0,0,0.2);
        }

        .sw-btn:active { transform: scale(0.97); }

        .sw-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.3);
        }

        .sw-btn-label {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.3px;
          white-space: nowrap;
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        /* ── Support Box ── */
        .sw-box {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 360px;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.06),
            0 24px 64px rgba(0,0,0,0.14),
            0 8px 24px rgba(0,0,0,0.08);
          animation: sw-slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes sw-slide-up {
          from { transform: translateY(50px) scale(0.9); opacity: 0; }
          to   { transform: translateY(0)    scale(1);   opacity: 1; }
        }

        /* Header */
        .sw-header {
          position: relative;
          padding: 18px 20px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }

        .sw-header::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 130px; height: 130px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }

        .sw-header::after {
          content: '';
          position: absolute;
          bottom: -30px; left: 20px;
          width: 90px; height: 90px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }

        .sw-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .sw-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
        }

        .sw-header-text h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.2px;
        }

        .sw-header-text p {
          margin: 2px 0 0;
          font-size: 12px;
          color: rgba(255,255,255,0.75);
          font-weight: 400;
        }

        .sw-online-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          margin-right: 5px;
          animation: sw-blink 2s ease-in-out infinite;
          box-shadow: 0 0 6px #4ade80;
        }

        @keyframes sw-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }

        .sw-close-btn {
          position: relative;
          z-index: 1;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.15);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          backdrop-filter: blur(4px);
        }

        .sw-close-btn:hover { background: rgba(255,255,255,0.28); }

        /* Options */
        .sw-options { padding: 10px; }

        .sw-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 14px;
          border-radius: 14px;
          text-decoration: none;
          transition: background 0.18s, transform 0.18s;
          margin-bottom: 6px;
          border: 1px solid transparent;
        }

        .sw-option:last-child { margin-bottom: 0; }

        .sw-option:hover {
          transform: translateX(3px);
          border-color: rgba(0,0,0,0.06);
        }

        .sw-option.call:hover  { background: #eff6ff; }
        .sw-option.chat:hover  { background: #f0fdf4; }

        .sw-option-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .sw-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s;
        }

        .sw-option:hover .sw-icon-circle { transform: scale(1.08); }

        .sw-icon-circle.blue { background: linear-gradient(135deg, #dbeafe, #bfdbfe); }
        .sw-icon-circle.green { background: linear-gradient(135deg, #dcfce7, #bbf7d0); }

        .sw-option-text-label {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          margin: 0 0 3px;
        }

        .sw-option-text-value {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }

        .sw-option-text-value.blue-text  { color: #1d4ed8; }
        .sw-option-text-value.green-text { color: #15803d; }

        .sw-chevron {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }

        .sw-option:hover .sw-chevron {
          transform: translateX(2px);
        }

        .sw-option.call:hover  .sw-chevron { background: #dbeafe; }
        .sw-option.chat:hover  .sw-chevron { background: #dcfce7; }

        /* Divider */
        .sw-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent);
          margin: 0 14px;
        }

        /* Footer */
        .sw-footer {
          padding: 10px 18px 14px;
          text-align: center;
          font-size: 11px;
          color: #9ca3af;
          font-weight: 500;
        }

        .sw-footer span {
          color: #0ea5e9;
          font-weight: 600;
        }
          @media (max-width: 768px) {

  .sw-btn-wrap {
    bottom: 16px;
    right: 12px;
    transform: scale(0.82);
    transform-origin: bottom right;
    z-index: 100;
  }

  .sw-btn {
    gap: 8px;
    padding: 8px 14px 8px 8px;
  }

  .sw-icon-wrap {
    width: 28px;
    height: 29px;
  }

  .sw-btn-label {
    font-size: 13px;
  }

  .sw-box {
    width: calc(100% - 20px);
    left: 10px;
    right: 10px;
    bottom: 100px;
  }
}
      `}</style>

      <div className="sw-root">
        {/* ── Floating Button ── */}
        {!open && (
          <div className="sw-btn-wrap">
            {ripple && (
              <>
                <div className="sw-ripple-ring" />
                <div className="sw-ripple-ring sw-ripple-ring-2" />
              </>
            )}
            <button className="sw-btn" onClick={() => setOpen(true)}>
              <div className="sw-icon-wrap">
                {/* Headset SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12C3 7.029 7.029 3 12 3s9 4.029 9 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="2" y="12" width="4" height="7" rx="2" fill="white"/>
                  <rect x="18" y="12" width="4" height="7" rx="2" fill="white"/>
                  <path d="M22 19c0 1.657-2.239 3-5 3h-1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="sw-btn-label">Call / Chat</span>
            </button>
          </div>
        )}

        {/* ── Support Box ── */}
        {open && (
          <div className="sw-box">
            {/* Header */}
            <div className="sw-header">
              <div className="sw-header-left">
                <div className="sw-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 11C3 6.582 6.582 3 11 3s8 3.582 8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="2" y="11" width="3.5" height="6" rx="1.75" fill="white"/>
                    <rect x="16.5" y="11" width="3.5" height="6" rx="1.75" fill="white"/>
                    <path d="M20 17c0 1.5-2 2.5-4.5 2.5H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="sw-header-text">
                  <h2>Support Team</h2>
                  <p>
                    <span className="sw-online-dot" />
                    Available now · Typically replies instantly
                  </p>
                </div>
              </div>
              <button className="sw-close-btn" onClick={() => setOpen(false)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Options */}
            <div className="sw-options">
              {/* Call */}
              <a href="tel:+911246712000" className="sw-option call">
                <div className="sw-option-left">
                  <div className="sw-icon-circle blue">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#2563eb"/>
                    </svg>
                  </div>
                  <div>
                    <p className="sw-option-text-label">Call to Book Health Test</p>
                    <p className="sw-option-text-value blue-text">+91-124-6712000</p>
                  </div>
                </div>
                <div className="sw-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>

              <div className="sw-divider" />

              {/* WhatsApp */}
              <a href="https://wa.me/911246712000" target="_blank" rel="noopener noreferrer" className="sw-option chat">
                <div className="sw-option-left">
                  <div className="sw-icon-circle green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#16a34a">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                    </svg>
                  </div>
                  <div>
                    <p className="sw-option-text-value green-text">Chat on WhatsApp</p>
                    <p className="sw-option-text-label" style={{margin:'3px 0 0'}}>Book Radiology & Pathology Tests</p>
                  </div>
                </div>
                <div className="sw-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="sw-footer">
              Powered by <span>Modern Health</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SupportWidget;

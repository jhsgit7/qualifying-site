"use client";

export default function Home() {
  const floatingItems = [
    { type: "🤍", left: "8%", top: "12%", size: "32px", delay: "0s", duration: "6s" },
    { type: "🌸", left: "18%", top: "70%", size: "34px", delay: "1s", duration: "7s" },
    { type: "💗", left: "28%", top: "20%", size: "28px", delay: "2s", duration: "5.5s" },
    { type: "🌷", left: "40%", top: "78%", size: "30px", delay: "0.5s", duration: "6.5s" },
    { type: "🤍", left: "55%", top: "10%", size: "26px", delay: "1.5s", duration: "5.8s" },
    { type: "🌼", left: "68%", top: "72%", size: "34px", delay: "2.5s", duration: "7.2s" },
    { type: "💖", left: "78%", top: "18%", size: "30px", delay: "0.8s", duration: "6.3s" },
    { type: "🌹", left: "88%", top: "68%", size: "32px", delay: "1.8s", duration: "6.8s" },
    { type: "🌸", left: "12%", top: "42%", size: "26px", delay: "2.2s", duration: "5.7s" },
    { type: "💞", left: "84%", top: "42%", size: "28px", delay: "1.2s", duration: "6.1s" },
  ];

  return (
    <>
      <main className="container">
        <div className="overlay" />

        {floatingItems.map((item, index) => (
          <span
            key={index}
            className="floating"
            style={{
              left: item.left,
              top: item.top,
              fontSize: item.size,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.type}
          </span>
        ))}

        <div className="card">
          <p className="small">for yumi</p>
          <h1>
            유미야
            <br />
            500일 축하해
            <br />
            사랑해🩵
          </h1>
          <p className="sub">
            우리 함께한 500일,
            <br />
            앞으로도 예쁘게 오래오래 가자 🤍
          </p>
        </div>
      </main>

      <style jsx>{`
        .container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.65), transparent 32%),
            radial-gradient(circle at bottom right, rgba(255, 240, 245, 0.65), transparent 28%),
            linear-gradient(135deg, #f5e9dc 0%, #efe2d2 45%, #f8eee3 100%);
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px);
          background-size: 22px 22px;
          opacity: 0.35;
          pointer-events: none;
        }

        .card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 900px;
          text-align: center;
          padding: 48px 28px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.38);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow:
            0 12px 40px rgba(120, 90, 70, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.55);
          animation: fadeUp 1.2s ease;
        }

        .small {
          margin: 0 0 14px;
          font-size: 14px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #a07f69;
          font-weight: 600;
        }

        h1 {
          margin: 0;
          font-size: clamp(42px, 8vw, 92px);
          line-height: 1.15;
          font-weight: 800;
          color: #6e4f43;
          text-shadow: 0 4px 18px rgba(255, 255, 255, 0.45);
        }

        .sub {
          margin: 26px 0 0;
          font-size: clamp(17px, 2.2vw, 24px);
          line-height: 1.7;
          color: #86685b;
          font-weight: 500;
        }

        .floating {
          position: absolute;
          z-index: 1;
          user-select: none;
          pointer-events: none;
          opacity: 0.9;
          animation-name: floaty;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          filter: drop-shadow(0 6px 12px rgba(255, 255, 255, 0.35));
        }

        @keyframes floaty {
          0% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-12px) rotate(4deg) scale(1.05);
          }
          50% {
            transform: translateY(-24px) rotate(-4deg) scale(0.98);
          }
          75% {
            transform: translateY(-12px) rotate(3deg) scale(1.04);
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .card {
            padding: 38px 20px;
            border-radius: 24px;
          }

          .sub {
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
}

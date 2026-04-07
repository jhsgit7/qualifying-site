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
      <main className="page">
        <section className="hero">
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
              유미야!
              <br />
              500일 축하해
              <br />
              사랑해🩵
            </h1>

            <p className="sub">
              우주우주우주우주만큼 사랑해애💕
              <br />
              세상에서 유미를 젤 사랑하는 석이가🤍
            </p>

            <a href="#letter" className="scrollButton">
              눌러서 편지 보기❤️
            </a>
          </div>
        </section>

        <section id="letter" className="letterSection">
          <div className="letterCard">
            <p className="letterSmall">to. yumi 🩵</p>
            <h2>500일 편지</h2>

            <div className="letterBox">
              <p>
                유미야, 우리 500일 정말 축하해애💕
              </p>

              <p>
                자기랑 함께한 시간들이 쌓여서 어느새 500일이 되었다는 게
                너무 신기하고 전부 소중한 시간들이야.
                함께했던 날들이 나에게 전부 좋은 추억으로 남아써 히히.
              </p>

              <p>
                기분 좋은 날도 있었고, 툴툴거리는 날들도 있었지만
                그 시간들 속에 자기와 함께여서 더 예쁘고 따뜻하게 기억되는 거 가타.
                우리가 최근에 서로 예민해서 많이 다투기도 했지만 
                항상 믿어주고 지지해주면서 사이좋게 지내자아.
              </p>

              <p>
                500일 동안 내 곁에 있어줘서 고맙고,
                앞으로도 지금보다 더 서로 아껴주면서
                예쁜 추억 많이 만들고 즐겁게 보내자아.
              </p>

              <p>
                다시 한 번 500일 진심으로 축하하고,
                지금보다 더 많이 웃고 더 많이 사랑하자아!🤍
              </p>

              <p>
                유미야, 왕우주파이만큼 사랑해애🩵🩵
                (블루투스 뽀뽀 보낼게에😘)
              </p>

              <p className="sign">from. 세상에 하나 밖에 없는 석이가</p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .page {
          background: linear-gradient(180deg, #f5e9dc 0%, #efe2d2 45%, #f8eee3 100%);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
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

        .scrollButton {
          display: inline-block;
          margin-top: 30px;
          padding: 16px 28px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.78);
          color: #6e4f43;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 25px rgba(120, 90, 70, 0.12);
          transition: all 0.25s ease;
        }

        .scrollButton:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow:
            0 14px 32px rgba(120, 90, 70, 0.16),
            0 0 18px rgba(255, 255, 255, 0.95);
        }

        .letterSection {
          padding: 80px 24px 100px;
          display: flex;
          justify-content: center;
        }

        .letterCard {
          width: 100%;
          max-width: 920px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.42);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow:
            0 12px 40px rgba(120, 90, 70, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.6);
          padding: 42px 24px;
          text-align: center;
          animation: fadeUp 1.2s ease;
        }

        .letterSmall {
          margin: 0 0 10px;
          font-size: 14px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #8c7062;
          font-weight: 600;
        }

        h2 {
          margin: 0 0 24px;
          font-size: clamp(34px, 6vw, 56px);
          color: #6e4f43;
        }

        .letterBox {
          text-align: left;
          margin: 0 auto;
          max-width: 680px;
          padding: 30px 24px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.68);
          color: #6b564c;
          line-height: 1.95;
          font-size: clamp(16px, 2vw, 20px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .letterBox p {
          margin: 0 0 18px;
        }

        .sign {
          margin-top: 28px;
          text-align: right;
          font-weight: 700;
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
          .card,
          .letterCard {
            padding: 38px 20px;
            border-radius: 24px;
          }

          .sub {
            margin-top: 20px;
          }

          .scrollButton {
            margin-top: 24px;
            padding: 14px 22px;
            font-size: 15px;
          }

          .letterSection {
            padding: 60px 16px 80px;
          }

          .letterBox {
            padding: 24px 18px;
            line-height: 1.85;
          }
        }
      `}</style>
    </>
  );
}

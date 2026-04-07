'use client';

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

type Tournament = {
  name: string;
  time: string;
  subtitle: string;
  prize: string;
  buyIn: string;
  badge: string;
};

export default function Home() {
  const tournaments: Tournament[] = [
    {
      name: "Morning Blitz",
      time: "09:00",
      subtitle: "Fast daily warm-up",
      prize: "$50",
      buyIn: "$2",
      badge: "Fast Entry",
    },
    {
      name: "Evening Sprint",
      time: "18:00",
      subtitle: "Most active daily table",
      prize: "$150",
      buyIn: "$5",
      badge: "Most Active",
    },
    {
      name: "Night Stack",
      time: "23:00",
      subtitle: "Late grind for deeper players",
      prize: "$300",
      buyIn: "$10",
      badge: "Late Grind",
    },
  ];

  function getNextTournament(list: Tournament[]) {
    const now = new Date();

    const upcoming = list
      .map((t) => {
        const [hours, minutes] = t.time.split(":").map(Number);
        const target = new Date();
        target.setHours(hours, minutes, 0, 0);

        if (target.getTime() <= now.getTime()) {
          target.setDate(target.getDate() + 1);
        }

        return {
          ...t,
          target,
        };
      })
      .sort((a, b) => a.target.getTime() - b.target.getTime());

    return upcoming[0];
  }

  function formatTime(ms: number) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  const [nextTournamentName, setNextTournamentName] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const next = getNextTournament(tournaments);
      const diff = next.target.getTime() - Date.now();

      setNextTournamentName(next.name);
      setTimeLeft(formatTime(diff));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top center, rgba(130,20,55,0.18) 0%, transparent 26%), radial-gradient(circle at 85% 15%, rgba(95,20,60,0.12) 0%, transparent 22%), linear-gradient(180deg, #040405 0%, #08060a 55%, #040405 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          padding: "100px 20px 80px",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <style>{`
            * {
              box-sizing: border-box;
            }

            .rs-grid-hero {
              display: grid;
              grid-template-columns: 1.15fr 0.85fr;
              gap: 24px;
              align-items: stretch;
              margin-bottom: 28px;
            }

            .rs-daily-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }

            .rs-grand-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 14px;
            }

            .rs-title {
              font-size: 72px;
              line-height: 0.95;
              margin: 0;
              color: #fff5f7;
              letter-spacing: -0.05em;
              max-width: 760px;
            }

            .rs-section-title {
              margin: 0 0 24px 0;
              font-size: 44px;
              color: #fff4f7;
              letter-spacing: -0.04em;
            }

            .rs-card:hover {
              transform: translateY(-3px);
              border-color: rgba(170, 70, 105, 0.42) !important;
              box-shadow: 0 10px 30px rgba(90,20,50,0.16);
            }

            .rs-btn:hover {
              filter: brightness(1.08);
              transform: translateY(-1px);
            }

            .rs-btn, .rs-card {
              transition: all 0.22s ease;
            }

            @media (max-width: 980px) {
              .rs-grid-hero {
                grid-template-columns: 1fr;
              }

              .rs-daily-grid {
                grid-template-columns: 1fr;
              }

              .rs-grand-grid {
                grid-template-columns: repeat(2, 1fr);
              }

              .rs-title {
                font-size: 56px;
                max-width: 100%;
              }

              .rs-section-title {
                font-size: 36px;
              }
            }

            @media (max-width: 640px) {
              .rs-title {
                font-size: 42px;
                line-height: 1.02;
              }

              .rs-section-title {
                font-size: 30px;
              }

              .rs-grand-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

          {/* HERO */}
          <section className="rs-grid-hero">
            <div>
              <h1 className="rs-title">
                Built for tournaments,
                <br />
                not noise.
              </h1>

              <p
                style={{
                  marginTop: "22px",
                  maxWidth: "620px",
                  color: "#c8b6bc",
                  fontSize: "18px",
                  lineHeight: 1.7,
                }}
              >
                A cleaner poker platform with daily tournaments, bigger headline
                events, and a premium dark-cherry style.
              </p>

              {/* COUNTDOWN */}
              <div
                style={{
                  marginTop: "20px",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "inline-block",
                }}
              >
                <div style={{ color: "#aaa", fontSize: "13px" }}>
                  Next tournament:{" "}
                  <span style={{ color: "#f0c5d1", fontWeight: 700 }}>
                    {nextTournamentName}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#f0c5d1",
                    marginTop: "6px",
                  }}
                >
                  {timeLeft}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div
              style={{
                borderRadius: "30px",
                padding: "28px",
                background:
                  "linear-gradient(180deg, rgba(26,10,15,0.96) 0%, rgba(10,8,12,0.98) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "12px" }}>
                Today
              </div>

              {tournaments.map((t) => (
                <div
                  key={t.name}
                  style={{
                    marginBottom: "10px",
                    padding: "10px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {t.name} — {t.time}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

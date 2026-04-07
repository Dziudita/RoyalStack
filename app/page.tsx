'use client';

import { useEffect, useState } from "react";

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
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top center, rgba(130,20,55,0.18) 0%, transparent 26%), radial-gradient(circle at 85% 15%, rgba(95,20,60,0.12) 0%, transparent 22%), linear-gradient(180deg, #040405 0%, #08060a 55%, #040405 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "32px 20px 80px",
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

            .rs-topbar {
              flex-direction: column;
              align-items: flex-start !important;
            }

            .rs-actions {
              width: 100%;
            }

            .rs-actions button {
              width: 100%;
            }

            .rs-hero-buttons {
              flex-direction: column;
              width: 100%;
            }

            .rs-hero-buttons button {
              width: 100%;
            }
          }
        `}</style>

        <header
          className="rs-topbar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            marginBottom: "54px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#b695a0",
                marginBottom: "10px",
              }}
            >
              RoyalStack Poker
            </div>
            <div
              style={{
                fontSize: "24px",
                color: "#f7edf0",
                fontWeight: 700,
              }}
            >
              Daily rhythm. Grand moments.
            </div>
          </div>

          <div className="rs-actions">
            <button
              className="rs-btn"
              style={{
                padding: "13px 20px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Enter Lobby
            </button>
          </div>
        </header>

        <section className="rs-grid-hero">
          <div style={{ padding: "16px 0" }}>
            <div
              style={{
                display: "inline-block",
                padding: "7px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "#e6c7d0",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "18px",
              }}
            >
              Minimal Gothic / Dark Cherry
            </div>

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
              events, and a signature dark-cherry style that feels premium
              instead of overcrowded.
            </p>

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
              <div
                style={{
                  color: "#aaa",
                  fontSize: "13px",
                }}
              >
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
                  letterSpacing: "0.05em",
                }}
              >
                {timeLeft}
              </div>
            </div>

            <div
              className="rs-hero-buttons"
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <button
                className="rs-btn"
                style={{
                  padding: "15px 24px",
                  border: "none",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #9b2b4d, #34111b)",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(120,20,50,0.28)",
                }}
              >
                Join Today’s Tournaments
              </button>

              <button
                className="rs-btn"
                style={{
                  padding: "15px 24px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  color: "#fff4f7",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                View Schedule
              </button>
            </div>
          </div>

          <div
            style={{
              borderRadius: "30px",
              padding: "28px",
              background:
                "linear-gradient(180deg, rgba(26,10,15,0.96) 0%, rgba(10,8,12,0.98) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 0 40px rgba(90,20,40,0.14)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#ab919a",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "10px",
              }}
            >
              Today at a glance
            </div>

            <div
              style={{
                fontSize: "34px",
                fontWeight: 800,
                color: "#fff4f6",
                marginBottom: "18px",
              }}
            >
              3 Daily Tournaments
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              {tournaments.map((t) => (
                <div
                  className="rs-card"
                  key={t.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#fff4f7",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ color: "#9f8d93", fontSize: "13px" }}>
                      {t.subtitle}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#f0ccd5",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {t.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            marginBottom: "34px",
            borderRadius: "32px",
            padding: "34px",
            background:
              "linear-gradient(135deg, rgba(35,10,18,0.98) 0%, rgba(10,8,12,0.98) 100%)",
            border: "1px solid rgba(164, 62, 96, 0.32)",
            boxShadow: "0 0 50px rgba(120,20,50,0.18)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "#f1cad5",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "18px",
            }}
          >
            Featured Grand Tournament
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "56px",
              color: "#fff4f7",
              letterSpacing: "-0.05em",
            }}
          >
            Sunday Grand
          </h2>

          <p
            style={{
              maxWidth: "720px",
              color: "#c8b4bb",
              fontSize: "17px",
              lineHeight: 1.7,
              marginTop: "18px",
              marginBottom: "26px",
            }}
          >
            A bigger weekly spotlight event for players who want stronger tables,
            higher pressure, and a cleaner path to the top of the stack.
          </p>

          <div className="rs-grand-grid">
            {[
              ["Buy-in", "$25"],
              ["Prize Pool", "$2,500"],
              ["Seats", "74 / 150"],
              ["Starts", "20:00"],
            ].map(([label, value]) => (
              <div
                className="rs-card"
                key={label}
                style={{
                  padding: "15px 16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#a48f96",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "6px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#fff4f7",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div
            style={{
              fontSize: "12px",
              color: "#ad949b",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: "10px",
            }}
          >
            Daily Tournaments
          </div>

          <h2 className="rs-section-title">
            Three daily battles. One steady rhythm.
          </h2>

          <div className="rs-daily-grid">
            {tournaments.map((t, index) => (
              <div
                className="rs-card"
                key={t.name}
                style={{
                  borderRadius: "24px",
                  padding: "24px",
                  background:
                    "linear-gradient(180deg, rgba(28,10,16,0.96) 0%, rgba(12,8,12,0.98) 100%)",
                  border:
                    index === 2
                      ? "1px solid rgba(145, 58, 98, 0.42)"
                      : "1px solid rgba(255,255,255,0.06)",
                  boxShadow:
                    index === 2 ? "0 0 30px rgba(90,20,60,0.18)" : "none",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#d8b8c2",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  {t.badge}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "30px",
                    color: "#fff4f7",
                  }}
                >
                  {t.name}
                </h3>

                <p
                  style={{
                    marginTop: "12px",
                    color: "#c9b6bc",
                    lineHeight: 1.6,
                    fontSize: "15px",
                    minHeight: "48px",
                  }}
                >
                  {t.subtitle}
                </p>

                <div
                  style={{
                    marginTop: "18px",
                    display: "grid",
                    gap: "10px",
                  }}
                >
                  <div style={{ color: "#f0c9d3" }}>Buy-in: {t.buyIn}</div>
                  <div style={{ color: "#f0c9d3" }}>Prize Pool: {t.prize}</div>
                  <div style={{ color: "#f0c9d3" }}>Starts: {t.time}</div>
                </div>

                <button
                  className="rs-btn"
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    padding: "14px 18px",
                    border: "none",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #8f2744, #2d0f1b)",
                    color: "white",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Join Tournament
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

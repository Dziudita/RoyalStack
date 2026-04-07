export default function Home() {
  const tournaments = [
    {
      name: "Morning Blitz",
      time: "09:00",
      subtitle: "Fast daily warm-up",
      prize: "$50",
      buyIn: "$2",
    },
    {
      name: "Evening Sprint",
      time: "18:00",
      subtitle: "Most active daily table",
      prize: "$150",
      buyIn: "$5",
    },
    {
      name: "Night Stack",
      time: "23:00",
      subtitle: "Late grind for deeper players",
      prize: "$300",
      buyIn: "$10",
    },
  ];

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
        <header
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

          <button
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
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "24px",
            alignItems: "stretch",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              padding: "16px 0",
            }}
          >
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

            <h1
              style={{
                fontSize: "72px",
                lineHeight: 0.95,
                margin: 0,
                color: "#fff5f7",
                letterSpacing: "-0.05em",
                maxWidth: "760px",
              }}
            >
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
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <button
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "14px",
            }}
          >
            {[
              ["Buy-in", "$25"],
              ["Prize Pool", "$2,500"],
              ["Seats", "74 / 150"],
              ["Starts", "20:00"],
            ].map(([label, value]) => (
              <div
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

          <h2
            style={{
              margin: 0,
              fontSize: "44px",
              color: "#fff4f7",
              letterSpacing: "-0.04em",
              marginBottom: "24px",
            }}
          >
            Three daily battles. One steady rhythm.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {tournaments.map((t, index) => (
              <div
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
                  {index === 0
                    ? "Fast Entry"
                    : index === 1
                    ? "Most Active"
                    : "Late Grind"}
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

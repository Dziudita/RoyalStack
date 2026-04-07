export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(120, 20, 50, 0.22), transparent 30%), linear-gradient(180deg, #050507 0%, #09070a 100%)",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#b89ca7",
                marginBottom: "10px",
              }}
            >
              RoyalStack Poker
            </div>

            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#fff4f7",
              }}
            >
              Daily rhythm. Grand moments.
            </div>
          </div>

          <button
            style={{
              padding: "12px 20px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.1)",
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
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              padding: "20px 0",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "#e7c5cf",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Minimal Gothic / Dark Cherry
            </div>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: 1,
                margin: 0,
                color: "#fff4f7",
                letterSpacing: "-0.04em",
              }}
            >
              Built for tournaments,
              <br />
              not noise.
            </h1>

            <p
              style={{
                marginTop: "22px",
                maxWidth: "640px",
                color: "#c7b4bb",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              A cleaner poker experience with daily events, bigger weekend
              tournaments, and a darker signature style.
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
                  padding: "14px 22px",
                  border: "none",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #8f2744, #2b0e17)",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Join Today’s Tournaments
              </button>

              <button
                style={{
                  padding: "14px 22px",
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
              borderRadius: "28px",
              padding: "26px",
              background:
                "linear-gradient(180deg, rgba(28,10,16,0.95) 0%, rgba(12,8,12,0.98) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#aa9199",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "10px",
              }}
            >
              Today at a glance
            </div>

            <div
              style={{
                fontSize: "34px",
                fontWeight: 800,
                color: "#fff2f5",
                marginBottom: "18px",
              }}
            >
              3 Daily Tournaments
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              {[
                ["Morning Blitz", "09:00"],
                ["Evening Sprint", "18:00"],
                ["Night Stack", "23:00"],
              ].map(([name, time]) => (
                <div
                  key={name}
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
                        color: "#fff3f6",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      {name}
                    </div>
                    <div
                      style={{
                        color: "#a9939a",
                        fontSize: "13px",
                      }}
                    >
                      Daily tournament
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#f0c5d1",
                      fontWeight: 700,
                    }}
                  >
                    {time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "20px",
            borderRadius: "30px",
            padding: "32px",
            background:
              "linear-gradient(135deg, rgba(30,10,16,0.98) 0%, rgba(10,8,12,0.98) 100%)",
            border: "1px solid rgba(178, 62, 92, 0.35)",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "#f2c9d4",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Featured Grand Tournament
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "52px",
              color: "#fff4f7",
              letterSpacing: "-0.04em",
            }}
          >
            Sunday Grand
          </h2>

          <p
            style={{
              maxWidth: "720px",
              color: "#c7b2b9",
              fontSize: "17px",
              lineHeight: 1.7,
              marginTop: "18px",
              marginBottom: "26px",
            }}
          >
            A bigger weekly headline event for players who want more pressure,
            more seats, and a stronger finish to the week.
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
                  padding: "14px 16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#a89299",
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
                    color: "#fff3f6",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "13px",
              color: "#ad949b",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "10px",
            }}
          >
            Daily Tournaments
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "42px",
              color: "#fff4f7",
              letterSpacing: "-0.04em",
            }}
          >
            Three daily battles. One steady rhythm.
          </h2>

          <p
            style={{
              maxWidth: "720px",
              color: "#c2afb5",
              fontSize: "17px",
              lineHeight: 1.6,
              marginTop: "14px",
              marginBottom: "24px",
            }}
          >
            Clear, regular, easy to understand, and always ready to welcome the
            next table of players.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {[
              {
                name: "Morning Blitz",
                text: "A fast daily warm-up with low friction and quick pressure.",
                buyIn: "$2",
                prize: "$50",
              },
              {
                name: "Evening Sprint",
                text: "The busiest daily table with balanced pacing and bigger traffic.",
                buyIn: "$5",
                prize: "$150",
              },
              {
                name: "Night Stack",
                text: "A darker late-session tournament for players who like deeper momentum.",
                buyIn: "$10",
                prize: "$300",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  borderRadius: "24px",
                  padding: "24px",
                  background:
                    "linear-gradient(180deg, rgba(32,8,16,0.95) 0%, rgba(14,8,12,0.98) 100%)",
                  border: "1px solid rgba(140, 58, 92, 0.35)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "28px",
                    color: "#fff4f7",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    marginTop: "12px",
                    color: "#cbb8bf",
                    lineHeight: 1.6,
                    fontSize: "15px",
                  }}
                >
                  {item.text}
                </p>

                <div style={{ marginTop: "18px", display: "grid", gap: "10px" }}>
                  <div style={{ color: "#f0c5d1" }}>Buy-in: {item.buyIn}</div>
                  <div style={{ color: "#f0c5d1" }}>Prize Pool: {item.prize}</div>
                  <div style={{ color: "#f0c5d1" }}>Countdown: Coming soon</div>
                </div>

                <button
                  style={{
                    marginTop: "20px",
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
      </section>
    </main>
  );
}

export default function Home() {
  const tournaments = [
    { name: "Morning Blitz", time: "09:00" },
    { name: "Evening Sprint", time: "18:00" },
    { name: "Night Stack", time: "23:00" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #050507 0%, #0a0609 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "50px" }}>
          <h1 style={{ fontSize: "42px", margin: 0 }}>
            RoyalStack Poker
          </h1>
          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Daily rhythm. Grand moments.
          </p>
        </div>

        {/* Daily Section */}
        <div>
          <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
            Daily Tournaments
          </h2>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {tournaments.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 22px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "13px", color: "#888" }}>
                    Daily tournament
                  </div>
                </div>

                <div style={{ fontWeight: 700 }}>
                  {t.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

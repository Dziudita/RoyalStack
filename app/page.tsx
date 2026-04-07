export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top, rgba(120,20,50,0.25), transparent 30%), linear-gradient(180deg, #050507 0%, #09070a 100%)",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#b89ca7",
          marginBottom: "16px",
        }}
      >
        RoyalStack Poker
      </div>

      <h1
        style={{
          fontSize: "56px",
          margin: 0,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#fff4f7",
        }}
      >
        Rise through the stacks.
      </h1>

      <p
        style={{
          maxWidth: "620px",
          marginTop: "22px",
          color: "#c7b4bb",
          fontSize: "18px",
          lineHeight: 1.7,
        }}
      >
        Daily tournaments, sharper tables, and a darker signature style built
        for players who play to climb.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 24px",
          borderRadius: "16px",
          border: "none",
          background: "linear-gradient(135deg, #8f2744, #2b0e17)",
          color: "white",
          fontWeight: 700,
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        Enter Lobby
      </button>
    </main>
  );
}

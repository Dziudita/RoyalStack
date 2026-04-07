'use client';

export default function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background: "rgba(10, 6, 10, 0.75)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #9b2b4d, #2d0f1b)",
              boxShadow: "0 0 12px rgba(155, 43, 77, 0.6)",
            }}
          />

          <span
            style={{
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: "0.04em",
              color: "#fff4f7",
            }}
          >
            CHERZI
          </span>
        </div>

        {/* CENTER (future nav) */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            color: "#c7a9b3",
          }}
        >
          <span style={{ cursor: "pointer" }}>Tournaments</span>
          <span style={{ cursor: "pointer" }}>Leaderboard</span>
          <span style={{ cursor: "pointer" }}>Rewards</span>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "8px 14px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            Login
          </button>

          <button
            style={{
              padding: "8px 14px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(135deg, #9b2b4d, #34111b)",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "13px",
              boxShadow: "0 4px 14px rgba(120,20,50,0.3)",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "calc(100vh - 64px)",
      textAlign: "center",
      padding: "2rem",
      fontFamily: "inherit",
    }}>
      <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🔍</div>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827", margin: "0 0 0.5rem" }}>
        404 — Page not found
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          background: "#4f46e5",
          color: "#fff",
          padding: "0.55rem 1.4rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "0.9rem",
        }}
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}
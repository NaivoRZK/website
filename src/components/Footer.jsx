import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", background: "#222", color: "#fff" }}>
      <p>© {new Date().getFullYear()} Mon Portfolio - Tous droits réservés</p>
    </footer>
  );
}

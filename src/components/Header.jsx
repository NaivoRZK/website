import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

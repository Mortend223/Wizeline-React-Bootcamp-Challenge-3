import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.styles.css";

function NotFoundPage() {
  return (
    <section className="not-found">
      <Link to="/" className="home-link">
        Notes
      </Link>
      <h1>Error 404</h1>
      <h2>Page not Found!</h2>
    </section>
  );
}

export default NotFoundPage;

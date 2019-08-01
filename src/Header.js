import React from "react";
import { Link } from "@reach/router";

export default () => (
  <header
    style={{
      height: 48,
      paddingLeft: 24,
      display: "flex",
      alignItems: "center",
      fontWeight: 900,
      color: "white",
      backgroundColor: "rgb(2, 108, 223)",
      backgroundImage:
        "linear-gradient(90deg, rgb(1, 80, 167), rgb(2, 108, 223), rgb(1, 80, 167))"
    }}
  >
    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
      t
    </Link>
  </header>
);

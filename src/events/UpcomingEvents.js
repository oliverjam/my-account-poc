import React from "react";
import { Link } from "@reach/router";

export default () => (
  <div>
    <h1>Upcoming events</h1>
    <ul>
      <li>
        <Link to="../abc/123">Order 123</Link>
      </li>
      <li>
        <Link to="../def/321">Order 321</Link>
      </li>
      <li>
        <Link to="../xyz/123">Order 987</Link>
      </li>
    </ul>
  </div>
);

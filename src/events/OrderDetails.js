import React from "react";
import { Link } from "@reach/router";

export default ({ eventId, orderId }) => (
  <div>
    <ul>
      <li>
        <Link to="receipt">Order receipt</Link>
      </li>
      <li>
        <Link to="transfer">Transfer</Link>
      </li>
      <li>
        <Link to="sell">Sell</Link>
      </li>
    </ul>
  </div>
);

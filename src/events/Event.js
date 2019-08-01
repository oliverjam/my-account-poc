import React from "react";

export default ({ eventId, orderId, children }) => (
  <div>
    <header
      style={{ marginTop: 16, padding: 16, background: "hsl(220, 10%, 95%)" }}
    >
      <h1>Event {eventId}</h1>
      <small>Order ID: #{orderId}</small>
    </header>
    <div style={{ marginTop: 16 }}>{children}</div>
  </div>
);

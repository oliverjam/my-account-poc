import React from "react";

export default ({ eventId, orderId }) => (
  <div>
    <h1>Sell tickets for {eventId}</h1>
    <small>Order ID: #{orderId}</small>
  </div>
);

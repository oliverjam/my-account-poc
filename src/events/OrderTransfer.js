import React from "react";

export default ({ eventId, orderId }) => (
  <div>
    <h1>Transfer tickets for {eventId}</h1>
    <small>Order ID: #{orderId}</small>
  </div>
);

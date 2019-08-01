import React from "react";

export default ({ eventId, orderId }) => (
  <div>
    <h1>Your receipt for {eventId}</h1>
    <small>Order ID: #{orderId}</small>
  </div>
);

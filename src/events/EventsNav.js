import React from "react";
import NavLink from "../NavLink";

function EventsNav({ children }) {
  return (
    <div>
      <span style={{ fontWeight: 900, fontSize: 18 }}>My Tickets</span>
      <ul
        style={{
          display: "flex",
          marginTop: 16,
          listStyle: "none",
          padding: 0
        }}
      >
        <li>
          <NavLink to="upcoming">Upcoming events</NavLink>
        </li>
        <li style={{ marginLeft: 16 }}>
          <NavLink to="past">Past events</NavLink>
        </li>
        <li style={{ marginLeft: 16 }}>
          <NavLink to="additional">Additional items</NavLink>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default EventsNav;

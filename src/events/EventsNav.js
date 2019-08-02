import React from "react";
import PageNav from "../shared/PageNav";
import NavLink from "../NavLink";

function EventsNav({ children }) {
  return (
    <PageNav title="My Tickets">
      <NavLink to="upcoming">Upcoming events</NavLink>
      <NavLink to="past">Past events</NavLink>
      <NavLink to="additional">Additional items</NavLink>
    </PageNav>
  );
}

export default EventsNav;

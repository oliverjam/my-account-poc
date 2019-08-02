import React from "react";
import PageNav from "../shared/PageNav";
import NavLink from "../NavLink";

function SettingsNav() {
  return (
    <PageNav title="My Settings">
      <NavLink to="preferences">Preferences</NavLink>
      <NavLink to="favourites">Favourites</NavLink>
    </PageNav>
  );
}

export default SettingsNav;

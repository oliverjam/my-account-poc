import React from "react";
import NavLink from "../NavLink";

function SettingsNav() {
  return (
    <div>
      <span style={{ fontWeight: 900, fontSize: 18 }}>My Settings</span>

      <ul
        style={{
          display: "flex",
          marginTop: 24,
          listStyle: "none",
          padding: 0
        }}
      >
        <li>
          <NavLink to="preferences">Preferences</NavLink>
        </li>
        <li style={{ marginLeft: 16 }}>
          <NavLink to="favourites">Favourites</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SettingsNav;

import React from "react";
import NavLink from "../NavLink";

function ProfileNav() {
  return (
    <div>
      <span style={{ fontWeight: 900, fontSize: 18 }}>My Profile</span>

      <ul
        style={{
          display: "flex",
          marginTop: 16,
          listStyle: "none",
          padding: 0
        }}
      >
        <li>
          <NavLink to="details">Profile details</NavLink>
        </li>
        <li style={{ marginLeft: 16 }}>
          <NavLink to="payment">Payment details</NavLink>
        </li>
        <li style={{ marginLeft: 16 }}>
          <NavLink to="seller">Seller details</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProfileNav;

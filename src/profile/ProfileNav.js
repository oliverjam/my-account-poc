import React from "react";
import PageNav from "../shared/PageNav";
import NavLink from "../NavLink";

function ProfileNav() {
  return (
    <PageNav title="My Profile">
      <NavLink to="details">Profile details</NavLink>
      <NavLink to="payment">Payment details</NavLink>
      <NavLink to="seller">Seller details</NavLink>
    </PageNav>
  );
}

export default ProfileNav;

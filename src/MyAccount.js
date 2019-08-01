import React from "react";
import { Router } from "@reach/router";

import NavLink from "./NavLink";
import EventsNav from "./events/EventsNav";
import ProfileNav from "./profile/ProfileNav";
import SettingsNav from "./settings/SettingsNav";

function MyAccount({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 3rem)" }}>
      <SideNav />
      <main style={{ maxWidth: "50rem", padding: 32 }}>
        {/* <Breadcrumbs pathname={location.pathname} /> */}
        <Router primary={false}>
          <EventsNav path="events/*" />
          <ProfileNav path="profile/*" />
          <SettingsNav path="settings/*" />
        </Router>
        {children}
      </main>
    </div>
  );
}

function SideNav() {
  return (
    <nav
      style={{
        minWidth: "14rem",
        padding: 16,
        background: "hsl(220, 20%, 90%)"
      }}
    >
      <div style={{ paddingTop: 8, paddingBottom: 8 }}>
        <details style={{ padding: 8 }}>
          <summary>My Tickets</summary>
          <ul style={{ marginTop: 8 }}>
            <li>
              <NavLink to="events/upcoming">Upcoming events</NavLink>
            </li>
            <li>
              <NavLink to="events/past">Upcoming past</NavLink>
            </li>
            <li>
              <NavLink to="events/additional">Upcoming additional</NavLink>
            </li>
          </ul>
        </details>
        <details style={{ padding: 8 }}>
          <summary>My Profile</summary>
          <ul style={{ marginTop: 8 }}>
            <li>
              <NavLink to="profile/details">Profile details</NavLink>
            </li>
            <li>
              <NavLink to="profile/billing">Billing details</NavLink>
            </li>
            <li>
              <NavLink to="profile/seller">Seller details</NavLink>
            </li>
          </ul>
        </details>
        <details style={{ padding: 8 }}>
          <summary>My Settings</summary>
          <ul style={{ marginTop: 8 }}>
            <li>
              <NavLink to="settings/preferences">Preferences</NavLink>
            </li>
            <li>
              <NavLink to="settings/favourites">Favourites</NavLink>
            </li>
            <li />
          </ul>
        </details>
      </div>
    </nav>
  );
}

// function Breadcrumbs({ pathname }) {
//   const paths = pathname
//     .split("/")
//     .slice(1)
//     .reduce((acc, curr, i) => {
//       const prevPath = acc[i - 1] ? acc[i - 1].path : "";
//       const newItem = {
//         path: `${prevPath}/${curr}`,
//         label: curr
//       };
//       return [...acc, newItem];
//     }, []);
//   return (
//     <nav>
//       <ul style={{ display: "flex" }}>
//         {paths.map(({ path, label }, i) => (
//           <li style={{ marginLeft: i ? 8 : 0 }}>
//             <NavLink to={path}>{label}</NavLink> /
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

export default MyAccount;

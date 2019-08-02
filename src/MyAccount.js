import React from "react";
import { Router } from "@reach/router";

import NavLink from "./NavLink";
import EventsNav from "./events/EventsNav";
import ProfileNav from "./profile/ProfileNav";
import SettingsNav from "./settings/SettingsNav";
import PageHeader from "./shared/PageHeader";

function MyAccount({ children }) {
  return (
    <div>
      <SideNav />
      <main>
        <PageHeader style={{ height: "12rem" }}>
          {/* <Breadcrumbs pathname={location.pathname} /> */}
          <div style={{ marginLeft: "18rem" }}>
            <Router primary={false}>
              <EventsNav path="events/*" />
              <ProfileNav path="profile/*" />
              <SettingsNav path="settings/*" />
            </Router>
          </div>
        </PageHeader>
        <div style={{ maxWidth: "50rem", marginLeft: "18rem", padding: 32 }}>
          {children}
        </div>
      </main>
    </div>
  );
}

function SideNav() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        minHeight: "calc(100vh - 3rem)",
        width: "16rem",
        left: "2rem",
        zIndex: 10,
        boxShadow: "0 2px 4px hsla(220, 20%, 40%, 0.4)"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "12rem",
          padding: "2rem 1.5rem",
          backgroundColor: "hsla(220, 20%, 90%, 0.2)",
          color: "white"
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 22 }}>Sarah Thompson</div>
        <div style={{ color: "hsl(220, 10%, 90%)" }}>musicfan101@yahoo.nl</div>
      </div>
      <nav
        style={{
          padding: 24,
          flex: 1,
          background: "white"
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
    </div>
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

import React from "react";
import { Router } from "@reach/router";

import NavLink from "./NavLink";
import EventsNav from "./events/EventsNav";
import ProfileNav from "./profile/ProfileNav";
import SettingsNav from "./settings/SettingsNav";

function MyAccount({ children }) {
  return (
    <div className="page-layout">
      <BlurredBackground />
      <UserInfo style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }} />
      <SideNav style={{ gridColumn: "2 / 3", gridRow: "3 / -1" }} />

      {/* <Breadcrumbs pathname={location.pathname} /> */}
      <div
        style={{
          gridColumn: "4 / -1",
          gridRow: "1 / 3",
          padding: "4rem 2rem",
          color: "white",
          zIndex: 0
        }}
      >
        <Router primary={false}>
          <EventsNav path="events/*" />
          <ProfileNav path="profile/*" />
          <SettingsNav path="settings/*" />
        </Router>
      </div>
      <div style={{ gridColumn: "4 / 5", gridRow: "2 / -1", padding: 32 }}>
        {children}
      </div>
    </div>
  );
}

function UserInfo({ style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "2rem 1.5rem",
        backgroundColor: "hsla(220, 20%, 90%, 0.2)",
        color: "white",
        zIndex: 0,
        ...style
      }}
      {...rest}
    >
      <div style={{ fontWeight: 600, fontSize: 22 }}>Sarah Thompson</div>
      <div style={{ color: "hsl(220, 10%, 90%)" }}>musicfan101@yahoo.nl</div>
    </div>
  );
}

function SideNav({ style, ...rest }) {
  return (
    <nav
      style={{
        padding: 24,
        flex: 1,
        background: "white",
        boxShadow: "0 2px 4px hsla(220, 20%, 40%, 0.4)",
        ...style
      }}
      {...rest}
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

function BlurredBackground({ style, ...rest }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        gridColumn: "1 / -1",
        gridRow: "1 / 3",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        ...style
      }}
      {...rest}
    >
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          bottom: -20,
          left: -20,
          zIndex: -10,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485056275338-73391179709e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          filter: "blur(12px)"
        }}
      />
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

import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "./global.css";

import Header from "./Header";

import Home from "./Home";

import MyAccount from "./MyAccount";
import Events from "./events/Events";
import Event from "./events/Event";
import UpcomingEvents from "./events/UpcomingEvents";
import PastEvents from "./events/PastEvents";
import AdditionalItems from "./events/AdditionalItems";
import OrderDetails from "./events/OrderDetails";
import OrderReceipt from "./events/OrderReceipt";
import OrderTransfer from "./events/OrderTransfer";
import OrderResale from "./events/OrderResale";

import Profile from "./profile/Profile";
import ProfileDetails from "./profile/ProfileDetails";
import BillingDetails from "./profile/BillingDetails";
import SellerDetails from "./profile/SellerDetails";

import Settings from "./settings/Settings";
import Preferences from "./settings/Preferences";
import Favourites from "./settings/Favourites";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Router>
        <Home path="/" />
        <MyAccount path="/user">
          <Events path="events">
            <UpcomingEvents path="upcoming" />
            <PastEvents path="past" />
            <AdditionalItems path="additional" />
            <Event path=":eventId/:orderId">
              <OrderDetails path="/" />
              <OrderReceipt path="receipt" />
              <OrderTransfer path="transfer" />
              <OrderResale path="sell" />
            </Event>
          </Events>
          <Profile path="profile">
            <ProfileDetails path="details" />
            <BillingDetails path="billing" />
            <SellerDetails path="seller" />
          </Profile>
          <Settings path="settings">
            <Preferences path="preferences" />
            <Favourites path="favourites" />
          </Settings>
        </MyAccount>
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));

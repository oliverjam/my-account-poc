import React from "react";
import { Link } from "@reach/router";

export default ({ partial = true, ...props }) => (
  <Link
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      const isActive = isPartiallyCurrent || isCurrent;
      return {
        style: {
          fontWeight: isActive ? 600 : 400,
          borderBottom: isActive && "2px solid white"
        }
      };
    }}
  />
);

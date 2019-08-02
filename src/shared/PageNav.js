import React from "react";
import Stack from "./Stack";

function PageNav({ title, children, ...rest }) {
  return (
    <div {...rest}>
      <span style={{ fontWeight: 600, fontSize: 32 }}>{title}</span>

      <Stack
        as="nav"
        direction="horizontal"
        space="1.5rem"
        style={{
          marginTop: 32
        }}
      >
        {children}
      </Stack>
    </div>
  );
}

export default PageNav;

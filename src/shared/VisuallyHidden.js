import React from "react";

function VisuallyHidden({ as: Comp = "div", ...rest }) {
  return (
    <Comp
      {...rest}
      style={{
        border: "0",
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
      }}
    />
  );
}

export default VisuallyHidden;

import React from "react";

function Stack({
  as: Comp = "div",
  direction = "vertical",
  space = "1rem",
  style,
  ...rest
}) {
  return (
    <Comp
      className={`stack--${direction}`}
      style={{ ...style, "--space": space }}
      {...rest}
    />
  );
}

export default Stack;

import React from "react";

function Stack({ as: Comp = "div", space = "1rem", style, ...rest }) {
  return (
    <Comp className="stack" style={{ ...style, "--space": space }} {...rest} />
  );
}

export default Stack;

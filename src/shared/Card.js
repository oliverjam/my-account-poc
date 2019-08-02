import React from "react";

function Card({ as: Comp = "div", style, ...rest }) {
  return (
    <Comp
      style={{
        position: "relative",
        boxShadow: "0 2px 6px hsla(220, 10%, 40%, 0.3",
        borderRadius: 4,
        padding: 32,
        backgroundColor: "white",
        ...style
      }}
      {...rest}
    />
  );
}

function Title({ as: Comp = "h2", ...rest }) {
  return (
    <Comp
      style={{
        fontSize: "1.125rem",
        fontWeight: 600
      }}
      {...rest}
    />
  );
}

function Action({ as: Comp = "button", ...rest }) {
  return (
    <Comp
      style={{
        position: "absolute",
        top: 16,
        right: 16,
        border: 0,
        padding: 0,
        background: "none"
      }}
      {...rest}
    />
  );
}

function Body({ as: Comp = "div", ...rest }) {
  return <Comp style={{ marginTop: 32 }} {...rest} />;
}

Card.Title = Title;
Card.Action = Action;
Card.Body = Body;

export default Card;

import React from "react";

function Card({ as: Comp = "div", ...rest }) {
  return (
    <Comp
      style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "white",
        boxShadow: "0 2px 6px hsla(220, 10%, 40%, 0.3"
      }}
      {...rest}
    />
  );
}

function Title({ as: Comp = "h2", ...rest }) {
  return (
    <Comp
      style={{
        padding: 16,
        fontSize: "1rem",
        fontWeight: 600,
        borderBottom: "1px solid hsl(220, 10%, 90%)"
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
  return <Comp style={{ padding: 16 }} {...rest} />;
}

Card.Title = Title;
Card.Action = Action;
Card.Body = Body;

export default Card;

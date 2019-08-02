import React from "react";

function PageHeader({ children, style, ...rest }) {
  return (
    <header
      style={{
        position: "relative",
        padding: "4rem 2rem",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.34)",
        overflow: "hidden",
        ...style
      }}
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
      {children}
    </header>
  );
}

export function Title({ as: Comp = "span", ...rest }) {
  return <Comp {...rest} />;
}

export default PageHeader;

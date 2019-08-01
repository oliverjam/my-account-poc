import React from "react";
import Card from "../shared/Card";

function SellerDetails() {
  const [editing, setEditing] = React.useState(false);
  return (
    <div>
      <h1>Seller details</h1>
      <p>
        On this page you can edit how you would like to get paid for any tickets
        you sell on Ticketmaster. Any changes will affect any resale listings
        you already have.
      </p>
      <Card>
        <Card.Title>Personal information</Card.Title>
        <Card.Action onClick={() => setEditing(!editing)}>Edit</Card.Action>
        <Card.Body>
          <InputField
            disabled={!editing}
            label="Date of birth"
            defaultValue="12/12/1996"
          />
          <InputField
            disabled={!editing}
            label="Phone number"
            defaultValue="+447789998888"
          />
        </Card.Body>
      </Card>
    </div>
  );
}

function InputField({ id, label, disabled, ...rest }) {
  return (
    <div style={{ display: disabled && "flex", marginTop: disabled ? 8 : 16 }}>
      <label
        htmlFor={id}
        style={{ fontWeight: 500, fontSize: disabled ? 16 : 14 }}
      >
        {label}
        {disabled && ": "}
      </label>
      <Input id={id} disabled={disabled} {...rest} />
    </div>
  );
}

const disabledStyles = {
  border: "none",
  background: "none"
};

const inputStyles = {
  marginTop: 4,
  padding: 8,
  border: "1px solid hsl(220, 10%, 90%)",
  borderRadius: 4
};

function Input({ disabled, ...rest }) {
  return <input style={disabled ? disabledStyles : inputStyles} {...rest} />;
}

export default SellerDetails;

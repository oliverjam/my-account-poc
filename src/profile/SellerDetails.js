import React from "react";
import Card from "../shared/Card";

function SellerDetails({ location }) {
  const searchParams = new URLSearchParams(location.search);
  const kyc = searchParams.getAll("kyc");

  const [editingInfo, setEditingInfo] = React.useState(false);
  const [editingPayment, setEditingPayment] = React.useState(false);
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
        <Card.Action onClick={() => setEditingInfo(!editingInfo)}>
          <span aria-hidden="true" style={{ marginRight: 8 }}>
            ✎
          </span>
          Edit
        </Card.Action>
        <Card.Body>
          <Kyc kyc={kyc} type="id">
            Please upload proof of identity
          </Kyc>
          <InputField
            disabled={!editingInfo}
            label="Date of birth"
            defaultValue="12/12/1996"
            style={{ marginTop: kyc.includes("id") && 16 }}
          />
          <InputField
            disabled={!editingInfo}
            label="Phone number"
            defaultValue="+447789998888"
            style={{ marginTop: editingInfo ? 16 : 8 }}
          />
        </Card.Body>
      </Card>
      <Card style={{ marginTop: 24 }}>
        <Card.Title>Payment details</Card.Title>
        <Card.Action onClick={() => setEditingPayment(!editingPayment)}>
          <span aria-hidden="true" style={{ marginRight: 8 }}>
            ✎
          </span>
          Edit
        </Card.Action>
        <Card.Body>
          <Kyc kyc={kyc} type="bank">
            Please upload a bank statement
          </Kyc>
          <InputField
            disabled={!editingPayment}
            label="Account holder name"
            defaultValue="Sarah Thompson"
            style={{ marginTop: kyc.includes("bank") && 16 }}
          />
          <InputField
            disabled={!editingPayment}
            label="Account number"
            defaultValue="**** 1234"
            style={{ marginTop: editingPayment ? 16 : 8 }}
          />
          <InputField
            disabled={!editingPayment}
            label="Sort code"
            defaultValue="00-00-00"
            style={{ marginTop: editingPayment ? 16 : 8 }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

function Kyc({ kyc, type, children, ...rest }) {
  if (!kyc.includes(type)) return null;
  return (
    <details
      style={{
        boxShadow: "0 2px 4px hsla(220, 10%, 40%, 0.2)",
        borderRadius: 4,
        borderLeft: "4px solid red",
        padding: 24
      }}
      {...rest}
    >
      <summary
        style={{
          fontWeight: 600
        }}
      >
        <span>{children}</span>
        {/* <span aria-hidden="true">〉</span> */}
      </summary>
      <InputField label="Document type" style={{ marginTop: 16 }} />
      <input type="file" style={{ marginTop: 16 }} />
    </details>
  );
}

function InputField({ id, label, disabled, style, ...rest }) {
  return (
    <div style={{ display: disabled && "flex", ...style }}>
      <label
        htmlFor={id}
        style={{ fontWeight: 600, fontSize: disabled ? 16 : 14 }}
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
  return (
    <input
      style={disabled ? disabledStyles : inputStyles}
      disabled={disabled}
      {...rest}
    />
  );
}

export default SellerDetails;

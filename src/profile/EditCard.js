import React from "react";
import Card from "../shared/Card";
import Stack from "../shared/Stack";

const EditContext = React.createContext();

function useEditing() {
  const editing = React.useContext(EditContext);
  if (editing === undefined)
    throw new Error("EditCard.Input must be rendered within an EditCard");
  return editing;
}

function EditCard({ title, children, onEditing, disabled, ...rest }) {
  const [editing, setEditing] = React.useState(false);

  React.useEffect(() => {
    if (onEditing) onEditing(editing);
  }, [onEditing, editing]);

  return (
    <Card {...rest}>
      <Card.Title>{title}</Card.Title>
      {!editing && (
        <Card.Action disabled={disabled} onClick={() => setEditing(true)}>
          <span aria-hidden="true" style={{ marginRight: 8 }}>
            ✎
          </span>
          Edit
        </Card.Action>
      )}
      <Card.Body>
        <Stack space="2rem">
          <EditContext.Provider value={editing}>
            {children}
          </EditContext.Provider>
          {editing && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <button onClick={() => setEditing(false)}>Cancel</button>
              <button
                onClick={() => setEditing(false)}
                style={{
                  marginLeft: 8,
                  background: "var(--primary)",
                  color: "white"
                }}
              >
                Save changes
              </button>
            </div>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}

function Kyc({ kyc, type, children, ...rest }) {
  const editing = useEditing();
  if (!kyc.includes(type) || editing) return null;
  return (
    <details
      style={{
        boxShadow: "0 2px 4px hsla(220, 10%, 40%, 0.2)",
        border: "1px solid hsl(220, 10%, 96%)",
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
      </summary>
      <Stack style={{ marginTop: 16 }}>
        <Input label="Document type" />
        <input type="file" />
      </Stack>
    </details>
  );
}

function Input({ id, label, style, ...rest }) {
  const editing = useEditing();
  return (
    <div style={style}>
      <label
        htmlFor={id}
        style={{ paddingLeft: editing && 12, fontSize: 14, fontWeight: 600 }}
      >
        {label}
      </label>
      <input
        id={id}
        style={!editing ? disabledStyles : inputStyles}
        disabled={!editing}
        {...rest}
      />
    </div>
  );
}

const disabledStyles = {
  marginTop: 4,
  border: "none",
  background: "none"
};

const inputStyles = {
  width: "100%",
  marginTop: 4,
  padding: "0.5rem 0.75rem",
  border: "1px solid hsl(220, 10%, 90%)",
  borderRadius: 4
};

EditCard.Kyc = Kyc;
EditCard.Input = Input;

export default EditCard;

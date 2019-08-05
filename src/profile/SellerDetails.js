import React from "react";
import Stack from "../shared/Stack";
import Card from "../shared/Card";
import EditCard from "./EditCard";
import VisuallyHidden from "../shared/VisuallyHidden";

function SellerDetails({ location }) {
  const searchParams = new URLSearchParams(location.search);
  const kyc = searchParams.getAll("kyc");

  const [someEditing, setSomeEditing] = React.useState(false);
  return (
    <div>
      <VisuallyHidden>Seller details</VisuallyHidden>
      <Stack space="1.5rem">
        {kyc.length > 0 && (
          <Stack as={Card} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "3rem",
                height: "3rem",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                fontSize: "1.5rem",
                fontWeight: "900",
                backgroundColor: "red",
                color: "white"
              }}
            >
              !
            </div>
            <p style={{ fontWeight: 600 }}>
              Before we can process any payments, we need to verify your
              details.
            </p>
            <p>
              <a href="#" style={{ color: "var(--primary)" }}>
                Learn more
              </a>
            </p>
          </Stack>
        )}
        <EditCard
          title="Personal information"
          disabled={someEditing}
          onEditing={editing => setSomeEditing(editing)}
        >
          <Stack space="1.5rem">
            <EditCard.Kyc kyc={kyc} type="id">
              Please upload proof of identity
            </EditCard.Kyc>
            <EditCard.Input label="Date of birth" defaultValue="12/12/1996" />
            <EditCard.Input label="Phone number" defaultValue="+447789998888" />
          </Stack>
        </EditCard>
        <EditCard
          title="Payment details"
          disabled={someEditing}
          onEditing={editing => setSomeEditing(editing)}
        >
          <Stack space="1.5rem">
            <EditCard.Kyc kyc={kyc} type="bank">
              Please upload a bank statement
            </EditCard.Kyc>
            <EditCard.Input
              label="Account holder name"
              defaultValue="Sarah Thompson"
            />
            <EditCard.Input label="Account number" defaultValue="**** 1234" />
            <EditCard.Input label="Sort code" defaultValue="00-00-00" />
          </Stack>
        </EditCard>
      </Stack>
    </div>
  );
}

export default SellerDetails;

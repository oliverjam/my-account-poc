import React from "react";
import Stack from "../shared/Stack";
import EditCard from "./EditCard";

function SellerDetails({ location }) {
  const searchParams = new URLSearchParams(location.search);
  const kyc = searchParams.getAll("kyc");

  const [someEditing, setSomeEditing] = React.useState(false);
  return (
    <div>
      <Stack space="1.5rem">
        <h1>Seller details</h1>
        <p>
          On this page you can edit how you would like to get paid for any
          tickets you sell on Ticketmaster. Any changes will affect any resale
          listings you already have.
        </p>
        <EditCard
          title="Personal information"
          disabled={someEditing}
          onEditing={editing => setSomeEditing(editing)}
        >
          <Stack>
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
          <Stack>
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

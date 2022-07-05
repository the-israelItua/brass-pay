import { useState } from "react";
import TransferForm from "components/TransferForm";
import TransferDetails from "components/TransferDetails";
import { Container } from "./styles";
import { useVerifyBank } from "utils/payments";

const MakePayment = () => {
  const [details, setDetails] = useState({});

  const [verifyBank, verifyStatus] = useVerifyBank();

  const handleVerify = (account_number, bank_code, amount) => {
    setDetails({ amount, bank: bank_code });
    verifyBank({
      account_number,
      bank: bank_code,
    });
  };

  return (
    <Container>
      <h3>Transfer Funds </h3>
      {!verifyStatus.isSuccess ? (
        <TransferForm
          onSubmit={handleVerify}
          isLoading={verifyStatus.isLoading}
        />
      ) : (
        <TransferDetails
          details={{ ...verifyStatus.data?.data, ...details }}
          onCancel={() => verifyStatus.reset()}
        />
      )}
    </Container>
  );
};

export default MakePayment;

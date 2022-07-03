import { useState, useEffect } from "react";
import { Container, Form } from "./styles";
import { useBankList, useVerifyBank } from "utils/payments";
import TransferDetails from "components/TransferDetails";
import TextInput from "components/Input/Text-input";
import Select from "components/Input/Select";
import { Button } from "components/Button";

const MakePayment = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({});

  const banks = useBankList();

  const [verifyBank, verifyStatus] = useVerifyBank();

  useEffect(() => {});
  const formattedBanks = banks.map((item) => {
    return {
      value: item.code,
      label: item.name,
    };
  });

  const handleVerify = (e) => {
    e.preventDefault();

    const { recipient_bank, recipient_account_number, amount } =
      e.target.elements;

    verifyBank({
      recipient_account_number: recipient_account_number.value,
      recipient_bank: recipient_bank.value,
    });
  };

  return (
    <Container>
      <h3>Transfer Funds </h3>
      {verifyStatus.isSuccess ? (
        <Form onSubmit={handleVerify}>
          <Select
            options={formattedBanks}
            name="recipient_bank"
            label="Recipient Bank"
          />
          <TextInput
            name="recipient_account_number"
            label="Recipient account number"
            type="number"
          />
          <TextInput name="amount" label="Amount to send" />
          <Button type="submit">
            {verifyStatus.isLoading ? "Please wait..." : "Continue"}
          </Button>
        </Form>
      ) : (
        <TransferDetails details={details} />
      )}
    </Container>
  );
};

export default MakePayment;

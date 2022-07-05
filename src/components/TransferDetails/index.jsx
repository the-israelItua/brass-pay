import { useEffect } from "react";
import {
  useCreateRecipient,
  useInitiateTransfer,
  useTransfer,
} from "utils/payments";
import { formatCurrency } from "utils/misc";
import { Button } from "components/Button";
import SuccessModal from "components/Modals/Success";
import OtpModal from "components/Modals/Otp";
import { DetailsWrapper, DetailsItem, ButtonsWrapper } from "./styles";

const TransferDetails = ({ details, onCancel }) => {
  const [createRecipient, recipients] = useCreateRecipient();
  const [initiateTransfer, initiateDetails] = useInitiateTransfer();
  const [finalizeTransfer, transferDetails] = useTransfer();

  useEffect(() => {
    const params = {
      type: "nuban",
      name: details.account_name,
      account_number: details.account_number,
      bank_code: details.bank_code,
      currency: "NGN",
    };

    createRecipient(params);
  }, [
    createRecipient,
    details.account_name,
    details.account_number,
    details.bank_code,
  ]);

  const handleInitiateTransfer = () => {
    const params = {
      source: "balance",
      amount: details.amount,
      recipient: recipients.data?.data[0]?.recipient_code,
      reason: "Customer Payout",
    };
    initiateTransfer(params);
  };

  const handleOtpEntered = (otp) => {
    finalizeTransfer({
      otp,
      transfer_code: initiateDetails.data?.data?.transfer_code,
    });
  };

  return (
    <DetailsWrapper>
      <DetailsItem>
        <h5>Account Name</h5>
        <p>{details.account_name}</p>
      </DetailsItem>
      <DetailsItem>
        <h5>Account Number</h5>
        <p>{details.account_number}</p>
      </DetailsItem>
      <DetailsItem>
        <h5>Amount to send</h5>
        <p>{formatCurrency(parseInt(details.amount || 0))}</p>
      </DetailsItem>
      <ButtonsWrapper>
        <Button onClick={onCancel} variant="secondary" mr="2rem">
          Cancel Transaction
        </Button>
        <Button
          width="50%"
          onClick={handleInitiateTransfer}
          disabled={initiateDetails.isLoading}
        >
          {initiateDetails.isLoading ? "Please wait..." : "Make Payment"}
        </Button>
      </ButtonsWrapper>

      <OtpModal
        openModal={initiateDetails.isSuccess}
        handleOtpEntered={handleOtpEntered}
        isLoading={transferDetails.isLoading}
      />
      <SuccessModal openModal={transferDetails.isSuccess} />
    </DetailsWrapper>
  );
};

export default TransferDetails;

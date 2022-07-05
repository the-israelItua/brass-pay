import { useState, useEffect } from "react";
import { Dialog } from "evergreen-ui";
import OtpInput from "react-otp-input";
import { Button } from "components/Button";
import { ModalWrapper } from "./styles";

const OtpModal = ({ openModal, handleOtpEntered, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);

  return (
    <>
      {isOpen && (
        <Dialog
          isShown={isOpen}
          title="Success"
          hasFooter={false}
          onCloseComplete={() => setIsOpen(false)}
          minHeightContent="50vh"
        >
          <ModalWrapper>
            <p>Enter Otp Sent to your phone</p>
            <OtpInput
              value={otp}
              onChange={(val) => setOtp(val)}
              numInputs={6}
              shouldAutoFocus
            />
            <Button mt="2rem" onClick={() => handleOtpEntered(otp)}>
              {isLoading ? "Please wait..." : "Continue"}
            </Button>
          </ModalWrapper>
        </Dialog>
      )}
    </>
  );
};

export default OtpModal;

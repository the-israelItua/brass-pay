import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "evergreen-ui";
import { Button } from "components/Button";
import { ModalWrapper } from "./styles";

const SuccessModal = ({ openModal }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);

  const handleSuccess = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      {isOpen && (
        <Dialog
          isShown={isOpen}
          title="Success"
          hasFooter={false}
          onCloseComplete={handleSuccess}
          minHeightContent="50vh"
        >
          <ModalWrapper>
            <p>Your transaction was successful.</p>
            <Button onClick={handleSuccess}>Go to Dashboard</Button>
          </ModalWrapper>
        </Dialog>
      )}
    </>
  );
};

export default SuccessModal;

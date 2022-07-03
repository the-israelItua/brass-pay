const TransferDetails = ({ details }) => {
  return (
    <div>
      <div>
        <h5>Recipient Name</h5>
        <p>{details.recipient_name}</p>
      </div>
      <div>
        <h5>Recipient Account Number</h5>
        <p>{details.recipient_account_number}</p>
      </div>
      <div>
        <h5>Amount to send</h5>
        <p>{details.amount}</p>
      </div>
    </div>
  );
};

export default TransferDetails;

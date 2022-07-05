const validate = (data) => {
  let errors = {};

  if (data.account_number.length < 9 || !data.account_number.length > 11) {
    errors.account_number = "Invalid Account Number";
  }

  if (!data.account_number) {
    errors.account_number = "Enter Account Number";
  }

  if (!data.bank) {
    errors.bank = "Select Bank";
  }

  if (data.amount < 100 || data.amount > 10000000) {
    errors.amount = "Amount should be between ₦100 and ₦10,000,000";
  }

  if (!data.amount) {
    errors.amount = "Enter Amount";
  }

  return errors;
};

export { validate };

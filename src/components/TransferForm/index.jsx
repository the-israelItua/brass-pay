import { useState } from "react";
import { useBankList } from "utils/payments";
import TextInput from "../Input/Text-input";
import CurrencyInputField from "../Input/Currency-input";
import Select from "../Input/Select";
import { Button } from "../Button";
import { validate } from "./validation";
import { Form } from "./styles";

const TransferForm = ({ onSubmit, isLoading }) => {
  const [amount, setAmount] = useState(null);
  const [errors, setErrors] = useState({});

  const banks = useBankList();

  const formattedBanks = banks.map((item) => {
    return {
      value: item.code,
      label: item.name,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { bank, account_number } = e.target.elements;

    const validateErr = validate({
      account_number: account_number.value,
      bank: bank.value,
      amount,
    });

    if (!!Object.keys(validateErr).length) {
      setErrors(validateErr);
    } else {
      onSubmit(account_number.value, bank.value, amount);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        name="account_number"
        label="Account number"
        type="number"
        error={errors.account_number}
        onChange={() => setErrors({ ...errors, account_number: null })}
        autoFocus
      />
      <Select
        options={formattedBanks}
        name="bank"
        label="Bank"
        error={errors.bank}
        onChange={() => setErrors({ ...errors, bank: null })}
      />

      <CurrencyInputField
        name="amount"
        label="Amount to send"
        value={amount}
        onChange={(val) => {
          setAmount(val);
          setErrors({ ...errors, amount: null });
        }}
        error={errors.amount}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Please wait..." : "Continue"}
      </Button>
    </Form>
  );
};

export default TransferForm;

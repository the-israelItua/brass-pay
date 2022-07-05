import CurrencyInput from "react-currency-input-field";
import {
  InputWrapper,
  CurrencyInputItem,
  InputItemErrorWrapper,
  Label,
} from "./styles";

const CurrencyInputField = ({
  label,
  name,
  value,
  onChange,
  disabled,
  error,
  placeholder,
  width,
  ...props
}) => {
  return (
    <InputWrapper width={width} disabled={disabled}>
      <Label>{label}</Label>
      <CurrencyInputItem>
        <CurrencyInput
          name={name}
          decimalsLimit={2}
          onValueChange={(value) => onChange(value)}
          prefix="₦"
          placeholder="₦0.00"
        />
      </CurrencyInputItem>
      {error ? (
        <InputItemErrorWrapper>
          <span> {error} </span>
        </InputItemErrorWrapper>
      ) : null}
    </InputWrapper>
  );
};

export default CurrencyInputField;

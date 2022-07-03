import {
  InputWrapper,
  SelectField,
  InputItemErrorWrapper,
  Label,
} from "./styles";

const Select = ({ label, name, value, onChange, options, error }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <SelectField name={name}>
        <option>Select</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectField>

      {error ? (
        <InputItemErrorWrapper>
          <span> {error} </span>
        </InputItemErrorWrapper>
      ) : null}
    </InputWrapper>
  );
};

export default Select;

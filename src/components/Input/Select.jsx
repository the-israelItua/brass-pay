import {
  InputWrapper,
  SelectField,
  InputItemErrorWrapper,
  Label,
} from "./styles";

const Select = ({ label, name, onChange, options, error }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <SelectField name={name} onChange={onChange}>
        <option value="">Select</option>
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

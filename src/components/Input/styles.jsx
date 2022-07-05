import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 0.2rem;
  width: ${({ width }) => (width ? width : "100%")};
  position: relative;

  input {
    height: 3.125rem;
  }
`;

const InputItemErrorWrapper = styled.div`
  margin: -1.8rem 0 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9em;
  line-height: 150%;
  color: red;
`;

const InputItem = styled.input`
  border-radius: 0.2rem;
  outline: none;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  font-size: 1em;
  height: 3.125rem;
  width: 100%;
  padding: 0 1rem;
  letter-spacing: 0.1rem;
  &:focus {
    border: 1px solid black;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const SelectField = styled.select`
  border-radius: 0.2rem;
  outline: none;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  font-size: 1em;
  height: 3.125rem;
  width: 100%;
  padding: 0 1rem;
  letter-spacing: 0.1rem;
  &:focus {
    border: 1px solid black;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey200};
  font-weight: 500;
  font-size: 0.9em;
  line-height: 150%;
  margin-bottom: 0.1rem;
  font-weight: 700;
`;

const CurrencyInputItem = styled.div`
  input {
    border-radius: 0.2rem;
    outline: none;
    margin-bottom: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.grey100};
    font-size: 1em;
    height: 3.125rem;
    width: 100%;
    padding: 0 1rem;
    letter-spacing: 0.1rem;
    &:focus {
      border: 1px solid black;
    }
  }
`;

export {
  InputItem,
  InputItemErrorWrapper,
  InputWrapper,
  SelectField,
  Label,
  CurrencyInputItem,
};

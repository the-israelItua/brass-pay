import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  height: 3rem;
  border-radius: 0.3rem;
  background: ${(props) =>
    props.variant === "secondary" ? props.theme.colors.grey100 : "black"};
  color: ${(props) => (props.variant === "secondary" ? "black" : "white")};
  width: ${(props) => (props.width ? props.width : "13rem")};
  margin-top: ${(props) => (props.mt ? props.mt : "0")};
  margin-bottom: ${(props) => (props.mb ? props.mt : "0")};
  margin-left: ${(props) => (props.ml ? props.mt : "0")};
  margin-right: ${(props) => (props.mr ? props.mr : "0")};
`;

export { Button };

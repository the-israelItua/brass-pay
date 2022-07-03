import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  height: 3rem;
  border-radius: 0.3rem;
  background: ${(props) => (props.bg ? props.bg : "black")};
  color: ${(props) => (props.color ? props.color : "white")};
  width: ${(props) => (props.width ? props.width : "13rem")};
  margin-top: ${(props) => (props.mt ? props.mt : "0")};
  margin-bottom: ${(props) => (props.mb ? props.mt : "0")};
  margin-left: ${(props) => (props.ml ? props.mt : "0")};
  margin-right: ${(props) => (props.mr ? props.mt : "0")};
`;

export { Button };

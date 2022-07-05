import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 4rem;

  p {
    margin-bottom: 2rem;
  }

  input {
    width: 3rem !important;
    height: 3rem !important;
    margin-left: 1rem;
  }
`;

export { ModalWrapper };

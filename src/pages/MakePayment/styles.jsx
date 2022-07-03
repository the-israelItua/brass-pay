import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content:: center;
min-height: 100vh
`;

const Form = styled.form`
  background: ${({ theme }) => theme.colors.grey300};
  min-height: 60vh;
  width: 50vw;
  margin-top: 2rem;
  padding: 3rem;
  border-radius: 0.4rem;
`;

export { Container, Form };

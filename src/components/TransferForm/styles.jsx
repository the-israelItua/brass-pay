import styled from "styled-components";

const Form = styled.form`
  background: ${({ theme }) => theme.colors.grey300};
  min-height: 60vh;
  width: 50vw;
  margin-top: 2rem;
  padding: 3rem;
  border-radius: 0.4rem;

  @media ${({ theme }) => `${theme.media.sm}`} {
    width: 100%;
    padding: 0;
    background: none;
  }
`;

export { Form };

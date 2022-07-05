import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 6rem;

  @media ${({ theme }) => `${theme.media.sm}`} {
    display: block;
    padding: 2rem 1rem;
    width: 100%;
  }
`;

export { Container };

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem;
  @media ${({ theme }) => `${theme.media.sm}`} {
    padding: 3rem 1rem;
  }
`;

const WrapperTop = styled.div`
  margin-bottom: 4rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4rem 8rem 2rem 0;
  background: white;
  top: 6rem;
  h3 {
    font-size: 1.4em;
  }
  @media ${({ theme }) => `${theme.media.sm}`} {
    padding: 3rem 2rem 3rem 0;
  }
`;

export { Wrapper, WrapperTop };

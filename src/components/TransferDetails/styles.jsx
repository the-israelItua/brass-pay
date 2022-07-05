import styled from "styled-components";

const DetailsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey300};
  min-height: 50vh;
  width: 50vw;
  margin-top: 2rem;
  padding: 3rem;
  border-radius: 0.4rem;
  @media ${({ theme }) => `${theme.media.sm}`} {
    padding: 2rem 1rem;
    width: 100%;
  }
`;

const DetailsItem = styled.div`
  margin-bottom: 2rem;

  h5 {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.grey100};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

export { DetailsWrapper, DetailsItem, ButtonsWrapper };

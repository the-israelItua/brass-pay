import styled from "styled-components";

const TemplateChildren = styled.div`
  padding: 8rem 1rem;
  @media ${({ theme }) => `${theme.media.sm}`} {
    padding: 8rem 0;
  }
`;

export { TemplateChildren };

import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  box-shadow: 0px 5px 6px -2px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  z-index: 100;
  background: white;
`;

const NavHeader = styled(Link)`
  font-size: 1.5em;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.colors.grey400};
`;

export { NavWrapper, NavHeader };

import styled from "styled-components";

const variants = {
  success: {
    bg: "#e5f7e7",
    color: "#32d269",
  },
  otp: {
    bg: "#ffeed9",
    color: "#d29b52",
  },
  failed: {
    bg: "#ffebeb",
    color: "#ff5b5b",
  },
  abandoned: {
    bg: "#e0e1e2",
    color: "#748cad",
  },
};

const BadgeWrapper = styled.div`
  border-radius: 0.4rem;
  background: ${(props) => variants[props.children]?.bg};
  color: ${(props) => variants[props.children]?.color};
  text-align: center;
`;

export { BadgeWrapper };

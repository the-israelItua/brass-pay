import { BadgeWrapper } from "./styles";

const Badge = ({ children }) => {
  console.log(children);
  return <BadgeWrapper>{children}</BadgeWrapper>;
};

export default Badge;

import { Outlet } from "react-router-dom";
import { TemplateChildren } from "./styles";
import NavBar from "../Nav";

const Template = () => {
  return (
    <section>
      <NavBar />
      <TemplateChildren>
        <Outlet />
      </TemplateChildren>
    </section>
  );
};

export default Template;

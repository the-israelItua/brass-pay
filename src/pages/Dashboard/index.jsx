import { useNavigate } from "react-router-dom";
import Table from "components/Table";
import { TableSchema } from "./table-schema";
import { Wrapper, WrapperTop } from "./styles";
import { Button } from "components/Button";

export const dummyData = [
  {
    recipient_name: "Lekki Outlet",
    recipient_account_number: "398765435678",
    date: "07, Jan 2022",
    recipient_bank: "zenith",
    amount: "₦1,210,540.00",
  },
  {
    recipient_name: "Lekki Outlet",
    recipient_account_number: "398765435678",
    date: "07, Jan 2022",
    recipient_bank: "zenith",
    amount: "₦1,210,540.00",
  },
  {
    recipient_name: "Lekki Outlet",
    recipient_account_number: "398765435678",
    date: "07, Jan 2022",
    recipient_bank: "zenith",
    amount: "₦1,210,540.00",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <WrapperTop>
        <h3>Overview</h3>
        <Button onClick={() => navigate("/transfer")}>Make new payment</Button>
      </WrapperTop>
      <Table schema={TableSchema} data={[]} isLoading={false} />
    </Wrapper>
  );
};

export default Dashboard;

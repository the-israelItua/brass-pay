import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "utils/payments";
import { formatCurrency, formatDateWithTime } from "utils/misc";
import Table from "components/Table";
import { Button } from "components/Button";
import Pagination from "components/Pagination";
import { TableSchema } from "./table-schema";
import { Wrapper, WrapperTop } from "./styles";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const navigate = useNavigate();

  const { transactions, meta, isLoading } = useTransactions(
    currentPage,
    pageSize
  );

  const formattedDetails = transactions.map((item) => {
    return {
      recipient_name: item?.recipient?.details.account_name,
      recipient_account_number: item?.recipient?.details.account_number,
      date: formatDateWithTime(item?.updatedAt),
      recipient_bank: item?.recipient?.details.bank_name,
      amount: formatCurrency(item.amount),
      status: item.status,
    };
  });

  return (
    <Wrapper>
      <WrapperTop>
        <h3>Overview</h3>
        <Button onClick={() => navigate("/transfer")}>Make new payment</Button>
      </WrapperTop>
      <Table
        schema={TableSchema}
        data={formattedDetails}
        isLoading={isLoading}
      />

      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        totalPages={meta.total / pageSize}
        totalRows={meta.total}
      />
    </Wrapper>
  );
};

export default Dashboard;

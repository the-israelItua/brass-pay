const TableSchema = [
  {
    visible: true,
    text: "Name",
    accessor: "recipient_name",
  },
  {
    visible: true,
    text: "Account Number",
    accessor: "recipient_account_number",
  },
  {
    visible: true,
    text: "Bank Name",
    accessor: "recipient_bank",
  },
  {
    visible: true,
    text: "Amount",
    accessor: "amount",
  },
  {
    visible: true,
    text: "Status",
    accessor: "status",
  },
  {
    visible: true,
    text: "Date",
    isDate: true,
    accessor: "date",
  },
];

export { TableSchema };

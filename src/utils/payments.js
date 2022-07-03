import { useQuery, useMutation } from "react-query";
import { queryCache } from "react-query";
import { client } from "utils/api-client";

const useBankList = () => {
  const { data: banks } = useQuery({
    queryKey: "bank-list",
    queryFn: () => client("bank").then(({ data }) => data),
  });
  return banks ?? [];
};

const useVerifyBank = () => {
  return useMutation(({ recipient_account_number, recipient_bank }) =>
    client(
      `bank/resolve?account_number=${recipient_account_number}&bank_code=${recipient_bank}`
    )
  );
};

export { useBankList, useVerifyBank };

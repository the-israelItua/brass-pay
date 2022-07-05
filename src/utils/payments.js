import { useQuery, useMutation } from "react-query";
import { queryCache } from "react-query";
import { client } from "utils/api-client";

const useTransactions = (currentPage, pageSize) => {
  const { data, isLoading } = useQuery({
    queryKey: ["transactions", currentPage, pageSize],
    queryFn: () =>
      client(`transfer?perPage=${pageSize}&page=${currentPage}`).then(
        (res) => res
      ),
  });

  return { transactions: data?.data ?? [], meta: data?.meta ?? [], isLoading };
};

const useBankList = () => {
  const { data: banks } = useQuery({
    queryKey: "bank-list",
    queryFn: () => client("bank").then(({ data }) => data),
  });
  return banks ?? [];
};

const useVerifyBank = () => {
  return useMutation(({ account_number, bank }) =>
    client(`bank/resolve?account_number=${account_number}&bank_code=${bank}`)
  );
};

const useCreateRecipient = () => {
  return useMutation((paymentDetails) =>
    client(`transferrecipient`, paymentDetails)
  );
};

const useInitiateTransfer = () => {
  return useMutation((details) => client(`transfer`, { data: details }));
};

const useTransfer = () => {
  return useMutation(
    (details) => client(`transfer/finalize_transfer`, { data: details }),
    {
      onSettled: () => queryCache.invalidateQueries("transactions"),
    }
  );
};

export {
  useTransactions,
  useBankList,
  useVerifyBank,
  useCreateRecipient,
  useInitiateTransfer,
  useTransfer,
};

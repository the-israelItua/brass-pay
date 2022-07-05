import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;
  border-bottom: 0;
  overflow-x: auto;
  padding-top: 6rem;
`;

const Table = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors.grey400};
  overflow: auto;
  th {
    text-align: start;
    padding: 1.4rem 2rem;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2.2rem;
    @media ${({ theme }) => `${theme.media.sm}`} {
      min-width: 15rem;
    }
  }
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  }

  td {
    padding: 1.4rem 2rem;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2.2rem;
  }
`;

const EmptyTable = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #999999;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.grey400};
  overflow: hidden;
`;

export { TableWrapper, Table, EmptyTable };

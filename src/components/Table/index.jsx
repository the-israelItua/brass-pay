import { useNavigate } from "react-router-dom";
import { TableWrapper, Table, EmptyTable } from "./styles";
import Badge from "components/Badge";
import { Button } from "../Button";
import Skeleton from "../Skeleton";

const TableGen = ({ data, schema, onRowClick = () => {}, isLoading }) => {
  const navigate = useNavigate();

  if (!isLoading && !data?.length) {
    return (
      <EmptyTable>
        <p>You don't have any recent payment.</p>
        <Button mt="3rem" onClick={() => navigate("/transfer")}>
          Make payment
        </Button>
      </EmptyTable>
    );
  }

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {schema &&
              schema.map((item, index) => (
                <th key={`heading-${index}`}>{item.text}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            !isLoading &&
            data.map((rowData, rowIndex) => (
              <tr
                key={`table-row-${rowIndex}`}
                onClick={() => {
                  onRowClick(rowData);
                }}
              >
                {schema &&
                  schema.map((item, index) => (
                    <td key={`table-row-${rowIndex}-data-${index}`}>
                      {item?.accessor === "status" ? (
                        <Badge>{rowData[item?.accessor]}</Badge>
                      ) : (
                        rowData[item?.accessor]
                      )}
                    </td>
                  ))}
              </tr>
            ))}
          {isLoading
            ? Array(10)
                .fill({})
                .map((_item, index) => (
                  <tr key={`table-row-data-${index}`}>
                    {schema &&
                      schema.map(() => (
                        <td>
                          <Skeleton
                            key={`mobile-skeleton-${index}`}
                            width="100%"
                            height="3rem"
                          />
                        </td>
                      ))}
                  </tr>
                ))
            : null}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableGen;

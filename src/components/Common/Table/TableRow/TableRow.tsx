import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { GTHeaderCell } from "../TableHeader/TableHeader";

import "./TableRow.css";

interface ITableRow<T> {
  rowData: Array<T>[];
  tableKeys: GTHeaderCell<T>[];
  index: number;
  currentPage?: number;
}

export function TableRow<T>({
  rowData,
  tableKeys,
  index,
  currentPage,
}: ITableRow<T>) {
  const renderValue = ({
    renderItem,
    headerData,
  }: {
    renderItem: string | ReactNode;
    headerData: any;
  }) => {
    if (headerData.type === "serialNo") {
      if (currentPage !== undefined) {
        return currentPage * 20 + index + 1;
      }
    }
    if (headerData.type === "price") {
      return <>{`₹ ${renderItem?.toLocaleString()}`}</>;
    }

    if (headerData.type === "dateTime") {
      return <>{renderItem}</>;
    }

    if (headerData.redirectTo) {
      return (
        <Link
          to={headerData.redirectTo(renderItem)}
          className="link"
          target="_blank"
        >
          {renderItem}
        </Link>
      );
    }

    return renderItem;
  };
  return (
    <tr className="clickable-row">
      {tableKeys.map((headerData) => {
        // TODO: Figure out why the error, committed sin by updating tsconfig to suppress this.
        const renderItem = rowData[headerData["key"]];
        return (
          <td key={headerData["key"]} className="table-row-cell">
            {renderValue({
              renderItem,
              headerData,
            })}
          </td>
        );
      })}
    </tr>
  );
}

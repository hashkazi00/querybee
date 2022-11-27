import { TableRow } from "../TableRow/TableRow";
import { ITable } from "../Table";

import "./TableRows.css";

export function TableRows<T>({ tableKeys, data, keyId }: ITable<T>) {
  const renderRows = () =>
    data.map((rowData: any, index: number) => {
      const key = keyId ? rowData[keyId] : index;
      return (
        <TableRow
          key={key}
          tableKeys={tableKeys}
          rowData={rowData}
          index={index}
        />
      );
    });
  return <tbody>{renderRows()}</tbody>;
}

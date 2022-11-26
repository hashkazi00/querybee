import { Button } from "../../Button/Button";
import "./TableHeader.scss";

export type GTHeaderCell<DataType> = {
  label: Extract<keyof DataType, string>;
  key: string;
  redirectTo?: (_: string) => string;
};

export function TableHeader<T>({
  tableKeys,
  sortFiltersList,
}: {
  tableKeys: GTHeaderCell<T>[];
  sortFiltersList: any[] | undefined;
}) {
  const headers = tableKeys.map((tableKey, index) => {
    const sortFilter =
      sortFiltersList &&
      sortFiltersList.find(
        (item: any) => item["columnName"] === tableKey["key"]
      );

    if (typeof sortFilter !== "undefined") {
      const sortButton =
        sortFilter.value === "+" ? (
          <div className="sort">{tableKey["key"] + " 🔼"}</div>
        ) : (
          <div className="sort">{tableKey["key"] + " 🔽"}</div>
        );

      return (
        <th key={`${tableKey["key"]}__${index}`} className="table-heading-cell">
          <Button render={sortButton} action={sortFilter.action} />
        </th>
      );
    }
    return (
      <th key={`${tableKey["key"]}__${index}`} className="table-heading-cell">
        {tableKey["key"]}
      </th>
    );
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
}

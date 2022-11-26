import { useEffect, useRef } from "react";

import { useVisibility } from "../../../hooks/useVisibility";

import { GTHeaderCell, TableHeader } from "./TableHeader/TableHeader";
import { TableRows } from "./TableRows/TableRows";
import { ColGroup } from "./ColGroup/ColGroup";

import "./Table.scss";

export interface ITable<T> {
  tableKeys: GTHeaderCell<T>[];
  data: Array<T>;
  keyId: string;
  refreshTime?: number | null;
  action?: () => void;
  refreshOnFocus?: boolean;
  tableFilters?: object[];
}

export function Table<T>({
  tableKeys,
  data,
  keyId,
  refreshTime,
  action,
  refreshOnFocus = false,
  tableFilters,
}: ITable<T>) {
  const actionRef = useRef(action);

  useEffect(() => {
    if (!refreshTime || !actionRef.current) return;
    const interval = setInterval(
      () => actionRef.current && actionRef.current(),
      refreshTime
    );
    return () => clearInterval(interval);
  }, [refreshTime]);

  useVisibility({
    action,
    shouldActOnFocus: refreshOnFocus,
  });

  if (data.length === 0)
    return <div className="no-results">No Results Found</div>;

  return (
    <table>
      <ColGroup headers={tableKeys} />
      <TableHeader tableKeys={tableKeys} sortFiltersList={tableFilters} />
      <TableRows tableKeys={tableKeys} data={data} keyId={keyId} />
    </table>
  );
}

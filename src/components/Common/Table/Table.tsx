import { useEffect, useRef, useState } from "react";

import { GTHeaderCell, TableHeader } from "./TableHeader/TableHeader";
import { TableRows } from "./TableRows/TableRows";
import { ColGroup } from "./ColGroup/ColGroup";

import { useVisibility } from "../../../hooks/useVisibility";
import { Pagination } from "./Pagination/Pagination";

import "./Table.scss";

export interface ITable<T> {
  tableKeys: GTHeaderCell<T>[];
  data: Array<T>;
  keyId: string;
  refreshTime?: number | null;
  action?: () => void;
  refreshOnFocus?: boolean;
  tableFilters?: object[];
  currentPage?: number;
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

  const tableRef = useRef<HTMLTableElement>(null);
  const [currentPage, updateCurrentPage] = useState<number>(0);

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

  if (data.length === 0) {
    return <div className="no-results">No Results Found</div>;
  }

  return (
    <div className="table">
      <div className="table-container">
        <table ref={tableRef}>
          <ColGroup headers={tableKeys} />
          <TableHeader tableKeys={tableKeys} sortFiltersList={tableFilters} />
          <TableRows
            tableKeys={tableKeys}
            data={data.slice(currentPage * 20, currentPage * 20 + 20)}
            currentPage={currentPage}
            keyId={keyId}
          />
        </table>
      </div>
      <div className="pagination-container">
        <Pagination
          totalPages={Math.ceil(data.length / 20)}
          currentPage={currentPage}
          onPageChange={(page) => {
            if (tableRef.current) {
              tableRef.current.scrollTo(0, 0);
            }
            updateCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
}

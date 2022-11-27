import { useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "../../components/Common/Table/Pagination/Pagination";
import { Table } from "../../components/Common/Table/Table";
import { customers } from "../../static/data/customers.table";
import { employees } from "../../static/data/employees.table";
import { CustomersTableKeys } from "./CustomersTable.config";
import { EmployeesTableKeys } from "./EmployeesTable.config";

import "./QBTable.scss";

export const QBTable = () => {
  const { table = "customers" } = useParams<{ table: string }>();
  const tableRef = useRef<HTMLDivElement>(null);

  const [currentPage, updateCurrentPage] = useState<number>(0);

  const whichTable = useMemo(() => {
    const tables = {
      employees: {
        tableKeys: EmployeesTableKeys,
        data: employees,
        keyId: "employeeID",
      },
      customers: {
        tableKeys: CustomersTableKeys,
        data: customers,
        keyId: "customerID",
      },
    };
    return tables[table];
  }, [table]);

  return (
    <section className="qb-table-dashboard-container">
      <div className="qb-table-container" ref={tableRef}>
        <Table
          tableKeys={whichTable.tableKeys}
          keyId={whichTable.keyId}
          data={whichTable.data.slice(currentPage * 20, currentPage * 20 + 20)}
        />
      </div>
      <Pagination
        totalPages={Math.ceil(whichTable.data.length / 20)}
        currentPage={currentPage}
        onPageChange={(page) => {
          if (tableRef.current) {
            tableRef.current.scrollTo(0, 0);
          }
          updateCurrentPage(page);
        }}
      />
    </section>
  );
};

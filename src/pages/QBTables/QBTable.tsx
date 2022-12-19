import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { Table } from "../../components/Common/Table/Table";

import { CustomersTableKeys } from "./CustomersTable.config";
import { EmployeesTableKeys } from "./EmployeesTable.config";

import { customers } from "../../static/data/customers.table";
import { employees } from "../../static/data/employees.table";

import "./QBTable.scss";

export const QBTable = () => {
  const { table = "customers" } = useParams<{ table: string }>();

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
      <div className="qb-table-container">
        <Table
          tableKeys={whichTable.tableKeys}
          keyId={whichTable.keyId}
          data={whichTable.data}
        />
      </div>
    </section>
  );
};

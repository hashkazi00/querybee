import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { NewQuery } from "../NewQuery/NewQuery";

import { CustomersTableKeys } from "../QBTables/CustomersTable.config";
import { EmployeesTableKeys } from "../QBTables/EmployeesTable.config";

import { customers } from "../../static/data/customers.table";
import { employees } from "../../static/data/employees.table";

export default function AllQueries() {
  const { query } = useParams<{ query: string }>();

  const whichQuery = useMemo(() => {
    const queries = {
      all_employees: {
        tableKeys: EmployeesTableKeys,
        data: employees,
        keyId: "employeeID",
        query: "SELECT * from employees;",
      },
      all_customers: {
        tableKeys: CustomersTableKeys,
        data: customers,
        keyId: "customerID",
        query: "SELECT * from customers;",
      },
    };
    return queries[query];
  }, [query]);

  return (
    <NewQuery
      query={whichQuery.query}
      data={whichQuery.data}
      tableKeys={whichQuery.tableKeys}
    />
  );

  return null;
}

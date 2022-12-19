import { useState } from "react";
import { Button } from "../../components/Common/Button/Button";
import CodeEditor from "../../components/Common/CodeEditor/CodeEditor";
import { Table } from "../../components/Common/Table/Table";
import { customers } from "../../static/data/customers.table";
import { CustomersTableKeys } from "../QBTables/CustomersTable.config";

import "./NewQuery.scss";

export const NewQuery = ({
  query,
  tableKeys = CustomersTableKeys,
  data = customers,
}: {
  query?: string;
  tableKeys: any;
  data: any;
}) => {
  const [ranQuery, updateRanQuery] = useState<boolean>(false);

  return (
    <div className="section-container">
      <div className="ce-container">
        <CodeEditor query={query} />
        <div className="ce-actions">
          <Button
            render="RUN"
            action={() => updateRanQuery(true)}
            className="neutral"
          />
          <Button render="SAVE" action={() => ({})} className="neutral" />
        </div>
      </div>
      {ranQuery ? (
        <div className="table-container">
          <div className="results-text-container">
            <div className="results">Results</div>
            <div className="status">
              <div className="status-colored">Success</div>
              <div className="status-rows">{`(${data.length} Rows | 0.012 ms)`}</div>
            </div>
            <Button
              render="Extract results as CSV"
              action={() => ({})}
              className="neutral"
            />
          </div>
          <Table tableKeys={tableKeys} data={data} keyId="customerID" />
        </div>
      ) : null}
    </div>
  );
};

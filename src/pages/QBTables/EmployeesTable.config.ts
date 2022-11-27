export interface IEmployeesTableKeys {
  label: any;
  key: any;
  type?: string;
}

export const EmployeesTableKeys: IEmployeesTableKeys[] = [
  {
    label: "Sr. No.",
    key: "serialNo",
    type: "serialNo",
  },
  {
    label: "Employee ID",
    key: "employeeID",
  },
  {
    label: "First Name",
    key: "firstName",
  },
  {
    label: "Last Name",
    key: "lastName",
  },
  {
    label: "City",
    key: "city",
  },
  {
    label: "Postal Code",
    key: "postalCode",
  },
  {
    label: "Reports To",
    key: "reportsTo",
  },
];

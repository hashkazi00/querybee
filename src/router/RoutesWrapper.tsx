import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Loader } from "../components/Common/Loader/Loader";
import { QBNavbar } from "../components/QBNavBar/QBNavbar";
import { QBTable } from "../pages/QBTables/QBTable";

export const RoutesWrapper = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={QBNavbar} />
      </Switch>
      <Switch>
        <Route exact path="/tables/:table" component={QBTable} />
      </Switch>
    </Suspense>
  );
};

import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Loader } from "../components/Common/Loader/Loader";
import { QBNavbar } from "../components/QBNavBar/QBNavbar";
import AllQueries from "../pages/AllQueries/AllQueries";
import { NewQuery } from "../pages/NewQuery/NewQuery";
import { QBTable } from "../pages/QBTables/QBTable";

export const RoutesWrapper = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={QBNavbar} />
      </Switch>
      <Switch>
        <Route exact path="/new-query" component={NewQuery} />
        <Route exact path="/queries/:query" component={AllQueries} />
        <Route exact path="/tables/:table" component={QBTable} />
      </Switch>
    </Suspense>
  );
};

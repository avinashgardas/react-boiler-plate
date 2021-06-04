import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import LazyLoadModal from "./common/components/LazyLoadModal";
import PrivateRoute from "./common/hoc/private-route";

// include global stylings
import "./global.scss";

// without lazy load
import Authentication from "./features/authentication";
import About from "./features/about";
import Dashboard from "./features/dashboard";
import Header from "./features/header";
import PageNotFound from "./features/page-not-found";

// with lazy load
// const Authentication = React.lazy(() =>
//   import("./features/authentication/login")
// );
// const About = React.lazy(() => import("./features/about"));
// const Dashboard = React.lazy(() => import("./features/dashboard"));
// const Header = React.lazy(() => import("./features/header"));
// const PageNotFound = React.lazy(() => import("./features/page-not-found"));

const Routes = () => {
  return (
    <>
      {/* <Suspense fallback={<LazyLoadModal />}> */}
      <Header />
      <Switch>
        <Route path="/" component={Authentication} exact />

        <Route path="/about" component={About} exact />

        {/* remove `exact` keyword if route has nested routes */}
        <PrivateRoute path="/dashboard" component={Dashboard} />

        {/* <Route path="*" component={PageNotFound} /> */}
        <Redirect path="*" to="/" />
      </Switch>
      {/* </Suspense> */}
    </>
  );
};

// class Routes extends Component {
//   render() {
//     return (
//       <>
//         <Suspense fallback={<LazyLoadModal />}>
//           <Header />
//           <Switch>
//             <Route path="/" component={Authentication} exact />

//             <Route path="/about" component={About} exact />

//             {/* remove `exact` keyword if route has nested routes */}
//             {/* <Route path="/dashboard" component={Dashboard} /> */}
//             <PrivateRoute path="/dashboard" component={Dashboard} />

//             {/* <Route path="*" component={PageNotFound} /> */}
//             <Redirect path="*" to="/" />
//           </Switch>
//         </Suspense>
//       </>
//     );
//   }
// }

export default Routes;

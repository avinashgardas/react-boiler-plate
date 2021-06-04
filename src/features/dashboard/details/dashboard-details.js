import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const DashboardDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const goToSearch = () => {
    history.push(`${path}/search`);
  };

  const logout = () => {
    // clear local storage
    localStorage.clear();

    // redirect user to LOGIN when logged out
    const redirectPath = "/";
    history.push(redirectPath);
  };

  return (
    <div>
      <p>Dashboard</p>

      <button onClick={goToSearch}>GO TO SEARCH</button>
      <br />
      <hr />
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default DashboardDetails;

import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const mockLogin = () => {
    // set local storage
    localStorage.setItem("isLoggedIn", true);
    // redirect to dashboard
    history.push("/dashboard");
  };

  return (
    <div>
      <p>Authentication</p>
      <button onClick={mockLogin}>SIGN IN</button>
    </div>
  );
};

export default Login;

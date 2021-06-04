import React, { Component } from "react";
import { useHistory } from "react-router-dom";

// const DashboardSearch = () => {
//   const history = useHistory();

//   const goBack = () => {
//     history.push('/dashboard')
//   }

//   return (
//     <div>
//       <p>Dashboard Search</p>

//       <button onClick={goBack}>GO BACK</button>
//     </div>
//   );
// };

class DashboardSearch extends Component {
  goBack = () => {
    const history = this.props.history;
    history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <p>Dashboard - Search</p>

        <button onClick={this.goBack}>GO BACK</button>
      </div>
    );
  }
}

export default DashboardSearch;

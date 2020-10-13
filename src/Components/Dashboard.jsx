import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <em>this comment will always be there!</em>
      <Route path="/dashboard/setting" component={Setting}/>
      {/* while this will nly abears when the route match with a link! */}
      <nav>
        <Link to="/dashboard/setting">Setting</Link>
        <Link to="/dashboard/search">Search</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/dashboard/setting" component={Setting} />
          <Route path="/dashboard/search" component={Search} />
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;

const Setting = () => {
  return <div>Setting</div>;
};

function Search() {
  return <div>Search</div>;
}

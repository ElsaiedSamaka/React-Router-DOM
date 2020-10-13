import { Switch } from "@material-ui/core";
import React from "react";
import { Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Products from "./Products";

const AutherizedLayout = () => {
  return (
    <div className="autherized-layout">
      <header>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">products</Link>
        <Link to="/auth">logout</Link>
      </header>
      <div className="content">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
      <footer/>
    </div>
  );
};

export default AutherizedLayout;

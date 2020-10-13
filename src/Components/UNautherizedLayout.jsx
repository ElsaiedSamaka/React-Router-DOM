import React from "react";
import {Link} from "react-router-dom"
const UNautherizedLayout = () => {
  return (
    <div>
      UNautherizedLayout<br/>
      <Link to="/">login</Link>
      <em>try login :(</em>
    </div>
  );
};

export default UNautherizedLayout;

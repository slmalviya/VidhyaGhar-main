import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
export default function Dashboard_comp(props) {
  return (
    <div>
      <div className="sub-comp">
        <br />
        <Link to={props.path}>{props.heading}</Link>
      </div>
    </div>
  );
}

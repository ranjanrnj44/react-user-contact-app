import React from "react";
import image from "../images/user.jpg";
import { Link } from "react-router-dom";

function ContactCardComponent({ id, name, email, deleteData }) {
  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={image} alt="user" />
      <div
        className="ui container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link
          to={{
            pathname: `/contact/${name}`,
            state: { name: name, email: email },
          }}
        >
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
        </Link>
        <Link to="/delete">
          <i
            className="trash alternate outline icon"
            style={{ color: "red" }}
            onClick={() => deleteData(id)}
          ></i>
        </Link>
      </div>
    </div>
  );
}

export default ContactCardComponent;

import React from "react";
import image from "../images/user.jpg";
import { Link } from "react-router-dom";

function ContactDetail(props) {
  console.log(props);
  let { name, email } = props.location.state;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={image} alt="user" />
          <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
          </div>
        </div>
        <Link to="/">
          <button className="ui button primary" type="button">
            {"<--"} back to contactList
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetail;

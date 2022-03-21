import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useHistory } from "react-router-dom";

function AddContactComponent({ addContacts }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let history = useHistory();
  return (
    <div className="ui main">
      <h2>Add contacts</h2>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name || !email) {
            alert("please enter valid credentials");
            return;
          }
          let newContact = {
            name,
            email,
            id: nanoid(),
          };
          console.log(newContact);
          addContacts(newContact);
          setName("");
          setEmail("");
          history.push("/");
        }}
      >
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="user name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="user email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add
        </button>
        <button
          type="button"
          className="ui button green"
          onClick={() => history.push("/")}
        >
          ViewList
        </button>
      </form>
    </div>
  );
}

export default AddContactComponent;

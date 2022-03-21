import React, { useState, useEffect } from "react";
import "./App.css";

import HeaderComponent from "./components/header";
import AddContactComponent from "./components/addcontact";
import ContactListComponent from "./components/contactlist";
import ContactDetail from "./components/contactDetail";
import ConfirmDelete from "./components/confirmDelete";

//perform router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let contacts = [];

function App() {
  let [contact, setContact] = useState(contacts);

  //localStorage (in this useCase, we can use 2 useEffect, also we are free to add more, depends upon our need)
  //useEffect for retrieve data
  useEffect(() => {
    let retrievedData = JSON.parse(localStorage.getItem("localKey"));
    if (retrievedData) {
      setContact(retrievedData);
    }
  }, []);

  //useEffect for store data
  useEffect(() => {
    localStorage.setItem("localKey", JSON.stringify(contact));
  }, [contact]);

  //adding a new contact
  let addContacts = (childContact) => {
    setContact([...contact, childContact]);
  };

  let deleteContacts = (childContactDelete) => {
    console.log(`Delete : ${childContactDelete}`);
    let remaining = contact.filter((item) => childContactDelete !== item.id);
    setContact(remaining);
  };
  return (
    <div className="ui container">
      <Router>
        <HeaderComponent />
        <br />
        <br />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ContactListComponent
                {...props}
                contacts={contact}
                deleteContacts={deleteContacts}
              />
            )}
            //in below way, this is a repetitive code, anything inside the component will be created as React.createElement, and since our Add use a callback function we are recreating it in each click, to avoid this we should use RENDER PROP pattern, just liks above.
            // component={() => (
            //   <ContactListComponent
            //     contacts={contact}
            //     deleteContacts={deleteContacts}
            //   />
            // )}
          />
          <Route
            exact
            path="/add"
            render={(props) => (
              <AddContactComponent {...props} addContacts={addContacts} />
            )}
            // component={() => <AddContactComponent addContacts={addContacts} />}
          />
          <Route
            exact
            path="/contact/:name"
            render={(props) => <ContactDetail {...props} />}
          />
          <Route
            exact
            path="/delete"
            render={(props) => <ConfirmDelete {...props} />}
          />
          {/* <HeaderComponent />
          <AddContactComponent addContacts={addContacts} />
          {contact.length > 0 ? (
            <ContactListComponent
              contacts={contact}
              deleteContacts={deleteContacts}
            />
          ) : (
            <h3 style={{ color: "green" }}>
              No task found yet... Feel free to add one or many
            </h3>
          )} */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

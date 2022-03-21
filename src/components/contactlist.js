import React from "react";
import ContactCardComponent from "./contactcard";
import { Link } from "react-router-dom";

function ContactListComponent({ contacts, deleteContacts }) {
  console.log(contacts);

  //deletingData from ContactCard
  function deleteDataList(childDeleteCard) {
    deleteContacts(childDeleteCard);
  }

  let renderedContactList = contacts.map((contact) => (
    <ContactCardComponent
      id={contact.id}
      name={contact.name}
      email={contact.email}
      key={contact.id}
      deleteData={deleteDataList}
    />
  ));
  return (
    <>
      <h2>Contact List</h2>
      <div className="ui celled list">{renderedContactList}</div>
      <Link to="/add">
        <button className="ui button primary" type="button">
          {"<--"} back to AddContact
        </button>
      </Link>
    </>
  );
}

export default ContactListComponent;

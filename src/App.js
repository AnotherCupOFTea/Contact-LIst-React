import { useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import List from "./components/List";
import UpdateContact from "./components/UpdateContact";

function App() {
  const [contacts, setContacts] = useState("");
  const [contactToEdit, setContactToEdit] = useState(null);

  function bringContact(newContact) {
    setContacts([...contacts, newContact]);
  }

  function getContactToEdit(contact) {
    setContactToEdit(contact);
  }

  function saveEditedContact(editedContact) {
    let newContacts = [...contacts];
    let index = newContacts.findIndex((item) => {
      return item.id === editedContact.id;
    });
    newContacts.splice(index, 1, editedContact);
    setContacts(newContacts);
    setContactToEdit(null);
  }

  function deleteContact(contactId) {
    let newContacts = contacts.filter((item) => item.id !== contactId);
    setContacts(newContacts);
  }

  if (contactToEdit) {
    return (
      <UpdateContact
        saveEditedContact={saveEditedContact}
        contactToEdit={contactToEdit}
      />
    );
  }

  return (
    <div className="App container">
      <Header />
      <AddContact bringContact={bringContact} />
      <List
        deleteContact={deleteContact}
        getContactToEdit={getContactToEdit}
        contacts={contacts}
      />
    </div>
  );
}

export default App;

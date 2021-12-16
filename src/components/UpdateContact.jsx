import React, { useState } from "react";

const UpdateContact = ({ contactToEdit, saveEditedContact }) => {
  const [name, setName] = useState(contactToEdit.name);
  const [surname, setSurname] = useState(contactToEdit.surname);
  const [phoneNumber, setPhoneNubmer] = useState(contactToEdit.phoneNumber);
  const [country, setCountry] = useState(contactToEdit.country);

  function handleSubmit(event) {
    event.preventDefault();

    let editedContact = { ...contactToEdit };
    editedContact.name = name;
    editedContact.surname = surname;
    editedContact.phoneNumber = phoneNumber;
    editedContact.country = country;
    saveEditedContact(editedContact);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          placeholder="Enter new name"
          value={name}
        />
        <input
          onChange={(event) => {
            setSurname(event.target.value);
          }}
          type="text"
          placeholder="Enter new surname"
          value={surname}
        />
        <input
          onChange={(event) => {
            setPhoneNubmer(event.target.value);
          }}
          type="text"
          placeholder="Enter new phone number"
          value={phoneNumber}
        />
        <input
          onChange={(event) => {
            setCountry(event.target.value);
          }}
          type="text"
          placeholder="Enter new country"
          value={country}
        />
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default UpdateContact;

import React, { useState } from "react";

const AddContact = ({ bringContact }) => {
  const [contactName, setContactName] = useState("");
  const [contactSurname, setContactSurname] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");
  const [contactCountry, setContactCountry] = useState("");
  // const [showContact, setShowContact] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();

    const newContact = {
      name: contactName.trim(),
      surname: contactSurname.trim(),
      phoneNumber: contactPhoneNumber.trim(),
      country: contactCountry.trim(),
      id: Date.now(),
    };

    for (let key in newContact) {
      if (!newContact[key]) {
        alert("Fill all the spaces");
        return;
      }
    }

    bringContact(newContact);

    setContactName("");
    setContactSurname("");
    setContactPhoneNumber("");
    setContactCountry("");
  }

  //   if (showContact === true)
  return (
    <div>
      {/* <button onClick={() => setShowContact(true)}>Add contact</button> */}
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">Добавить контакт</div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(event) => {
                  setContactName(event.target.value);
                }}
                type="text"
                placeholder="Enter name..."
                value={contactName}
              />
              <input
                onChange={(event) => {
                  setContactSurname(event.target.value);
                }}
                type="text"
                placeholder="Enter surname..."
                value={contactSurname}
              />
              <input
                onChange={(event) => {
                  setContactPhoneNumber(event.target.value);
                }}
                type="text"
                placeholder="Enter phone number..."
                value={contactPhoneNumber}
              />
              <input
                onChange={(event) => {
                  setContactCountry(event.target.value);
                }}
                type="text"
                placeholder="Enter country"
                value={contactCountry}
              />
              <button type="submit">Send Contact</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

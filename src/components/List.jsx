import React from "react";

const List = ({ contacts, getContactToEdit, deleteContact }) => {
  if (contacts.length === 0) {
    return (
      <div className="no-contacts">
        <h2>Пока что контактов нет...</h2>;
      </div>
    );
  }
  return (
    <div className="contacts-all">
      <table>
        <thead>
          <tr className="tr">
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item, index) => {
            return (
              <tr key={item.id} className="tr">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.country}</td>
                <td className="btn">
                  <button
                    onClick={() => {
                      getContactToEdit(item);
                    }}
                  >
                    &#9998;
                  </button>
                </td>
                <td className="btn">
                  <button
                    onClick={() => {
                      deleteContact(item.id);
                    }}
                  >
                    &#10006;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;

import axios from 'axios';
import React, { useState } from "react";
import TableContact from "./layout/TableContact/TableContact";
import FormContact from "./layout/FormContact/FormContact";


const App = () => {
  const url = "http://localhost:5066/api/ContactManagement/contacts";
  axios.get(url).then(
    res => console.log(res.data) // ответ сервера
  );
  const [contacts, setContacts] = useState(
    [
      { id: 21, name: 'Иван 1', email: 'ivan@mail1.ru' },
      { id: 12, name: 'Иван 2', email: 'ivan@mail2.ru' },
      { id: 6, name: 'Иван 3', email: 'ivan@mail3.ru' },
    ]
  );

  const addContact = (contactName, contactEmail) => {
    if (!contactName || !contactEmail) {
      alert('Заполните все поля');
    }
    else {
      const newId = contacts.length === 0 ? 1 : Math.max(...contacts.map(e => e.id)) + 1;
      for (let i = 0; i < contacts.length; i++) {
        const elementId = contacts[i].id;
        if (newId < elementId) {
          newId = elementId;
        }
      }
      const item = {
        id: newId,
        name: contactName,
        email: contactEmail
      }
      setContacts([...contacts, item]);
    }
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(item => item.id !== id));
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <TableContact
            contacts={contacts}
            deleteContact={deleteContact}
          />
          <FormContact addContact={addContact} />


        </div>
      </div>
    </div >
  );
}

export default App;

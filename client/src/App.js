import React, { useState } from "react";
import TableContact from "./layout/TableContact/TableContact";


const App = () => {
  const [contacts, setContacts] = useState(
    [
      { id: 21, name: 'Иван 1', email: 'ivan@mail1.ru' },
      { id: 12, name: 'Иван 2', email: 'ivan@mail2.ru' },
      { id: 6, name: 'Иван 3', email: 'ivan@mail3.ru' },
    ]
  );

  const addContact = () => {
    //const newId = contacts.sort((x, y) => x.id - y.id)[contacts.length - 1].id + 1;
    let newId = -1;
    // Math.max() м исп-ть
    for (let i = 0; i < contacts.length; i++) {
      const elementId = contacts[i].id;
      if (newId < elementId) {
        newId = elementId;
      }
    }
    const item = {
      id: newId + 1,
      name: 'Иван 3',
      email: 'ivan@mail3.ru'
    }
    setContacts([...contacts, item]);
    console.log(contacts);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <TableContact contacts={contacts} />
          <div>
            <button
              className="btn btn-primary"
              onClick={() => { addContact() }}
            >
              Добавить контакт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

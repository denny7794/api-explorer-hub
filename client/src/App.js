import React, { useState } from "react";
import TableContact from "./layout/TableContact/TableContact";


const App = () => {
  const [contacts, setContacts] = useState(
    [
      { id: 1, name: 'Иван 1', email: 'ivan@mail1.ru' },
      { id: 2, name: 'Иван 2', email: 'ivan@mail2.ru' },
      { id: 3, name: 'Иван 3', email: 'ivan@mail3.ru' },
    ]
  );

  const addContact = () => {
    const item = {
      id: Math.floor(Math.random() * 100),
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

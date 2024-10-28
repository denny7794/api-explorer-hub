import TableContact from "./layout/TableContact/TableContact";

const contacts = [
  { id: 1, name: 'Иван 1', email: 'ivan@mail1.ru' },
  { id: 2, name: 'Иван 2', email: 'ivan@mail2.ru' },
  { id: 3, name: 'Иван 3', email: 'ivan@mail3.ru' },
];

const App = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <TableContact contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default App;

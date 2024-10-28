import React from 'react';
import RowTableContact from './components/RowTableContact';



const TableContact = (props) => {
    const contacts = props.contacts;
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя контакта</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <RowTableContact
                        id={contacts[0].id}
                        name={contacts[0].name}
                        email={contacts[0].email}
                    />
                    <RowTableContact
                        id={contacts[1].id}
                        name={contacts[1].name}
                        email={contacts[1].email}
                    />
                </tbody>
            </table>
        </div>
    );
}

export default TableContact;
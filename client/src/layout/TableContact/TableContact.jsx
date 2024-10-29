import React from 'react';
import RowTableContact from './components/RowTableContact';



const TableContact = (props) => {
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
                    {
                        props.contacts.map(
                            contact =>
                            (<RowTableContact
                                id={contact.id}
                                name={contact.name}
                                email={contact.email}
                                deleteContact={props.deleteContact}
                            />)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableContact;
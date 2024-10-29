import React, { useState } from "react";

const FormContact = (props) => {

    const [contactName, setContactName] = useState(""); //выбираем значение из state и передаем в функцию setContactName(e.target.value)
    const [contactEmail, setContactEmail] = useState("");

    const submit = () => {
        props.addContact(contactName, contactEmail);
    }

    return (
        <div>
            <div className="mb-3">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Введите имя:</label>
                        <input className="form-control" type="text" placeholder="вася пупкин"
                            onChange={(e) => { setContactName(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Введите e-mail:</label>
                        {/*<input className="form-control" type="text" />*/}
                        <textarea
                            className="form-control"
                            onChange={(e) => { setContactEmail(e.target.value) }}
                            rows={2}>
                        </textarea>
                    </div>
                </form>
            </div>
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => { submit() }}
                >
                    Добавить контакт
                </button>
            </div>
        </div>
    );
}

export default FormContact;
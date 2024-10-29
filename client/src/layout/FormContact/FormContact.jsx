import React from "react";

const FormContact = (props) => {
    return (
        <div>
            <div className="mb-3">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Введите имя:</label>
                        <input className="form-control" type="text" placeholder="вася пупкин" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Введите e-mail:</label>
                        {/*<input className="form-control" type="text" />*/}
                        <textarea
                            className="form-control"
                            rows={2}>
                        </textarea>
                    </div>
                </form>
            </div>
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => { props.addContact() }}
                >
                    Добавить контакт
                </button>
            </div>
        </div>
    );
}

export default FormContact;
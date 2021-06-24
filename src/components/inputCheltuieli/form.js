import React, { useState } from 'react';
import "./form.css";

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = event => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = event => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = event => {
        setDate(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        const item = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.saveInputItem(item);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titlu</label>
                    <input type="text"
                        value={title}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Pret</label>
                    <input type="number" min="0.01" step="0.01"
                        value={amount}
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Data</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                        value={date}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Adauga</button>
            </div>
        </form>
    );
};
export default Form;
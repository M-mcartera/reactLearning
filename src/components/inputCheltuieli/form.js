import React from 'react';
import "./form.css";

const form = () => {
    return(
        <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Titlu</label>
                        <input type="text" />
                    </div>
                    <div className="new-expense__control">
                        <label>Pret</label>
                        <input type="number" min="0.01" step="0.01"/>
                    </div>
                    <div className="new-expense__control">
                        <label>Data</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Adauga</button>
                </div>
        </form>
    );
};
export default form;
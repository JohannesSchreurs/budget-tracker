import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'; 

const ExpenseForm = (props) => {
    const [description, setDescription] = useState(props.expense ? props.expense.description : "");
    const [note, setNote] = useState(props.expense ? props.expense.note : "");
    const [amount, setAmount] = useState(props.expense ? (props.expense.amount / 100).toString() : "");
    //Using moment.js to use for dates, because the Date() API is a piece hot garbage
    const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment());
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState("");

    const onNoteChange = (e) => {
        const note = e.target.value;
        setNote(note);
    }

    const onAmountChange = (e) => {
        const amount = e.target.value;
        //Online generated RegEx, I honestly can't bother writing the myself
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(amount);
        }
    }

    const onDateChange = (createdAt) => {
        if(createdAt) {
            setCreatedAt(createdAt);
        }
    }

    const onFocusChange = ({ focused }) => {
        setFocused(focused)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        //Some error handling
        if(!description || !amount){
            setError("The description and amount fields can't be empty.");
        } else {
            setError("");
            props.onSubmit({
                description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note
            })
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={onAmountChange}
                />
                <SingleDatePicker 
                    date={createdAt}
                    onDateChange={onDateChange}
                    focused={focused}
                    onFocusChange={onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    displayFormat={() => "DD/MM/YYYY"}
                />
                <textarea 
                    placeholder="Add a note to your expense (optional)"
                    value={note}
                    onChange={onNoteChange}
                >
                </textarea>
                <button>{props.expense ? "Update expense" : "Create expense"}</button>
            </form>
            {error ? (
                <p>{error}</p>
            ) : ( null )}
        </div>
    )
}

export default ExpenseForm;
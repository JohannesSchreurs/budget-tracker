import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <ul>
        <li>Name: { description }</li>
        <li>Amount: { amount }</li>
        <li>Created at: { createdAt }</li>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove this expense</button>
    </ul>
)



export default connect()(ExpenseListItem);
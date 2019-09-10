import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <ul>
        <li>Name: { description }</li>
        <li>Amount: { amount }</li>
        <li>Created at: { createdAt }</li>
    </ul>
)

export default ExpenseListItem;
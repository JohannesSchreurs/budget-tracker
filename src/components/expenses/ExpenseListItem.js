import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <ul>
        <Link to={`/edit/${id}`}>
            <li>Name: { description }</li>
        </Link>
        <li>Amount: { amount }</li>
        <li>Created at: { createdAt }</li>
    </ul>
)



export default connect()(ExpenseListItem);
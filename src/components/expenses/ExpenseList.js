import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../../selectors/expenses';

const ExpenseList = ({ name, expenses }) => {
    return (
        <div>
            <h1>Expense List for {name}</h1>
            { expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: 'Johannes',
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

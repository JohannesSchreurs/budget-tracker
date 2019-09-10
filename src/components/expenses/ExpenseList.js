import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = ({ name, expenses, filters }) => {
    return (
        <div>
            <h1>Expense List for {name}</h1>
            {expenses.length}
            <p>{filters.text}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: 'Johannes',
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);

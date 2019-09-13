import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

const ExpenseSummary = ({ expenseCount, total }) => {
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses';
    const formattedTotal = numeral(total / 100).format('0,0.00');

    return (
        <div>
            <h1>Showing {expenseCount} {expenseWord}, total is: €{formattedTotal}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        total: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);

import React from 'react';
import ExpenseList from '../expenses/ExpenseList';
import ExpenseListFilter from '../expenses/ExpenseListFilter';
import ExpenseSummary from '../expenses/ExpenseSummary';

const ExpenseDashboardPage = () => {
    return (
        <div>
            This is from the dashboard component
            <ExpenseSummary />
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboardPage;
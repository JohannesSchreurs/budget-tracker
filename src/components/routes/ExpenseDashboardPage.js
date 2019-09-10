import React from 'react';
import ExpenseList from '../expenses/ExpenseList';
import ExpenseListFilter from '../expenses/ExpenseListFilter';

const ExpenseDashboardPage = () => {
    return (
        <div>
            This is from the dashboard component
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboardPage;
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../../components/expenses/ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <p>This is from the edit page</p>
            <p>Chosen id was: {props.match.params.id || "No ID given"}</p>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={expense => {
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove this expense</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);
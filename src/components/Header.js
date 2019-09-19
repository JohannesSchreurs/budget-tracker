import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({startLogout }) => {
    return (
        <header>
            <h1>Budget Tracker</h1>
            <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create an expense</NavLink>
            <button onClick={startLogout}>Log out</button>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
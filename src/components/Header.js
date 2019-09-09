import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Budget Tracker</h1>
            <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create an expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit an expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    )
}

export default Header;
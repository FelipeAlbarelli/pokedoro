import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
            <NavLink to='/' exact activeClassName='is-active'>Dashboard</NavLink>
            <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
            <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
            <NavLink to='/24234234' activeClassName='is-active'>404</NavLink>
    </header>
)

export default Header
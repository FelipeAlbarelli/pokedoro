import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'

// description, amount, createdAt

const ExpenseListItem = ({ id ,description , amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {moment(createdAt).format('DD/MM/YYYY')}</p>
        <Link to={`/edit/${id}`} ><button>edit</button></Link>
    </div>
)


export default ExpenseListItem
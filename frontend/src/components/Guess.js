import React from 'react';
import { Link } from 'react-router-dom';
import EditAccount from '../guess/EditAccount';
import ViewHistory from '../guess/ViewHistory';

export default function Guess() {
    return (
        <div>
            <Link to="/guess/edit">Edit Account</Link>
            <Link to="/guess/edit">History</Link>
        </div>
    )
}

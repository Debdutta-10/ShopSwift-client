import React from 'react'
import { NavLink } from 'react-router-dom';
const UserMenu = () => {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Dashboard</h2>
            <ul className="list-group">
                <NavLink to='/dashboard/user/profile' className="list-group-item">Profile</NavLink>
                <NavLink to='/dashboard/user/orders' className="list-group-item">My Orders</NavLink>
            </ul>
        </>
    )
}

export default UserMenu

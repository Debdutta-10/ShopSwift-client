import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <h2 style={{textAlign:"center"}}>Admin Panel</h2>
            <ul className="list-group">
                <NavLink to='/dashboard/admin/create-categories' className="list-group-item">Create Categories</NavLink>
                <NavLink to='/dashboard/admin/create-products' className="list-group-item">Create Products</NavLink>
                <NavLink to='/dashboard/admin/show-users' className="list-group-item">Show Users</NavLink>
            </ul>
        </>
    );
}

export default AdminMenu;

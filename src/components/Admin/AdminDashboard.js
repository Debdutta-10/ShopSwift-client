import React from 'react'
import AdminMenu from './AdminMenu'
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <>
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-md-3">
                <AdminMenu></AdminMenu>
                </div>
                <div className="col-md-9">
                    <div className="card p-2 w-75 my-2 mx-auto">
                        <h4>Admin name: {auth?.user?.name}</h4>
                        <h4>Admin Email: {auth?.user?.email}</h4>
                        <h4>Admin Phone: {auth?.user?.phone}</h4>
                        <h4>Admin Address: {auth?.user?.address}</h4>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default AdminDashboard

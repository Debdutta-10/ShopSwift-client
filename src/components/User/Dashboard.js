import React from 'react'
import UserMenu from './UserMenu'
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-3">
            <UserMenu></UserMenu>
          </div>
          <div className="col-md-9">
            <div className="card p-2 w-75 my-2 mx-auto">
              <h4>Name: {auth?.user?.name}</h4>
              <h4>Email: {auth?.user?.email}</h4>
              <h4>Phone: {auth?.user?.phone}</h4>
              <h4>Address: {auth?.user?.address}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

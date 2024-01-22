import React from 'react'
import UserMenu from './UserMenu'

const Orders = () => {
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu></UserMenu>
                    </div>
                    <div className="col-md-9">
                        <h2>My Orders:</h2>
                        <div className="card p-2 w-75 my-2 mx-auto">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders

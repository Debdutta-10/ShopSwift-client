import React from 'react'
import AdminMenu from './AdminMenu'

const ShowUsers = () => {
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu></AdminMenu>
                    </div>
                    <div className="col-md-9">
                        <h2>All Users:</h2>
                        <div className="card p-2 w-75 my-2 mx-auto">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowUsers

import React from 'react'
// import './style4.css'
const admin_panel = () => {
  return (
    <>
    <h1 className='welcome'>Welcome Admin</h1>
    <div className="container">
        <div className="lost">
            <h1>Lost Reports</h1>
        </div>
        <div className="found">
            <h1>Sucessfully claimed</h1>
        </div>
        <div className="post">
            <h1>Current Posts</h1>
        </div>
        </div>
    </>
  )
}

export default admin_panel
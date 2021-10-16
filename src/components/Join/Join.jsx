import React from 'react'
import JoinForm from "./JoinForm";

function Join() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-md-10 mx-auto col-lg-5">
          <h1 className="text-center">Join us</h1>
          <JoinForm/>
        </div>
      </div>
    </div>
  )
}

export default Join

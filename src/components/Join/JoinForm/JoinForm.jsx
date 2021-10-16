import React from 'react'

function JoinForm() {
  return (
    <form className="p-4 p-md-5 border rounded-3 bg-light">
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-dark" type="submit">Sign up</button>
      <hr className="my-4"/>
      <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
    </form>
  )
}

export default JoinForm

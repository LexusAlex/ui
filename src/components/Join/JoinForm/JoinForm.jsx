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
          <input type="checkbox" value="agree" required/>
          I agree with privacy policy
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-dark" type="submit">Join to Us</button>
      <hr className="my-4"/>
    </form>
  )
}

export default JoinForm

import React, {useState} from 'react'
import api, { parseError, parseErrors } from '../../Api'
import InputError from "./InputError";

function JoinForm() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agree: false
  })

  const handleChange = (event) => {
    const input = event.target
    setFormData({
      ...formData,
      [input.name]: input.type === 'checkbox' ? input.checked : input.value,
    })
  }

  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.agree) {
      setErrors({ agree: 'Please agree with terms.' })
      return
    }

    //setButtonActive(false)
    setErrors({})
    setError(null)
    setSuccess(null)

    api
      .post('/v1/authentication/join', {
        email: formData.email,
        password: formData.password,
      })
      .then(() => {
        setSuccess('Confirm join by link in email.')
        //setButtonActive(true)
      })
      .catch(async (error) => {
        setErrors(await parseErrors(error))
        setError(await parseError(error))
        //setButtonActive(true)
      })


    //if(errors.email){console.log('error email')}
  }
  return (
    <form className="p-4 p-md-5 border rounded-3 bg-light" method="post" onSubmit={handleSubmit}>
      <div className="form-floating mb-3 has-validation">
        <input
          type="email"
          className={"form-control"}
          id="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="floatingInput">Email address</label>
        <InputError error={errors.email} />
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input
            type="checkbox"
            value="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          I agree with privacy policy
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-dark" type="submit">Join to Us</button>
      <hr className="my-4"/>
    </form>
  )
}

export default JoinForm

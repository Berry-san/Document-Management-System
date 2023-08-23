/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import loginLogo from '../assets/images/loginLogo.svg'
const SignUp = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleLoginClick = () => {
    // Simulate a login action
    onLogin()
    console.log(
      `First Name: ${formData.firstName},Last Name: ${formData.lastName}, Email: ${formData.email}, Password: ${formData.password}`
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      `First Name: ${formData.firstName},Last Name: ${formData.lastName}, Email: ${formData.email}, Password: ${formData.password}`
    )
  }

  return (
    <div className="flex items-center justify-center h-screen bg-dull_white">
      <div className="flex flex-col items-center justify-center bg-[#fff] text-dark_color border border-dull_white max-w-xl mx-auto rounded-md">
        <div className="flex items-end justify-start w-full px-10 py-6 bg-white border-b border-slate-400">
          <img src={loginLogo} alt="" />
        </div>
        <div className="px-10 py-6">
          <div className="flex items-center justify-between mb-5 ">
            <h4 className="text-sm font-semibold text-dark_color">
              User Registration
            </h4>
            <Link to="/login">
              <span className="text-xs font-semibold text-black_color">
                Sign In
              </span>
            </Link>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 text-left md:grid-cols-2 gap-x-5 gap-y-5 "
            >
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  First Name:
                </label>
                <input
                  type="text"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <Link to="/layout">
                  <button
                    type="submit"
                    className="px-4 py-3 mt-5 text-xs font-semibold rounded bg-green text-black_color"
                    onClick={handleLoginClick}
                  >
                    Register
                  </button>
                </Link>
                <span className="text-xs font-semibold text-black_color">
                  Forgot Password?
                </span>
              </div>
            </form>
          </div>
          <p className="mt-5 text-xs font-semibold text-black_color">
            Admin will contact you after submitting this form.
          </p>
        </div>
      </div>
      {/* <div className="w-10 h-10 bg-black"></div>

      <div className="w-10 h-10 bg-black"></div> */}
    </div>
  )
}

export default SignUp

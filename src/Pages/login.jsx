/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import loginLogo from '../assets/images/loginLogo.svg'
import { useState } from 'react'
function Login({ onLogin }) {
  // const [email, setEmail] = useState('hello')
  // const [password, setPassword] = useState('')

  const initialFormData = {
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    setFormData(initialFormData)
    onLogin()
  }

  const handleLoginClick = () => {
    onLogin()
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   onLogin()
  //   console.log(email, password)
  // }

  return (
    <div className="flex items-center justify-center h-screen bg-dull_white">
      <div className="bg-[#fff] text-dark_color border border-dull_white max-w-xl mx-auto rounded-md">
        <div className="flex items-end justify-start w-full px-10 py-6 bg-white border-b border-slate-400">
          <img src={loginLogo} alt="" />
        </div>
        <div className="px-10 py-6">
          <div className="flex items-center justify-between mb-5 ">
            <h4 className="text-sm font-semibold">Sign In</h4>
            <Link to="/signUp">
              <span className="text-xs font-semibold text-black_color">
                User registration
              </span>
            </Link>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 text-left md:grid-cols-2 gap-x-5 gap-y-5 ">
                <div>
                  <label htmlFor="" className="text-xs font-semibold">
                    Email Address:
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-xs font-semibold">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                    required
                  />
                </div>
              </div>

              <Link to="/layout">
                <button
                  className="px-4 py-3 mt-5 text-xs font-semibold rounded bg-green text-black_color"
                  type="submit"
                  onClick={handleLoginClick}
                >
                  Sign In
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

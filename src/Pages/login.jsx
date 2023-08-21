/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import loginLogo from '../assets/images/loginLogo.svg'
function Login({ onLogin }) {
  const handleLoginClick = () => {
    // Simulate a login action
    onLogin()
  }

  return (
    <div className="h-screen bg-dull_white">
      <div className="grid place-items-center bg-[#fff] text-dark_color border border-dull_white max-w-xl mx-auto rounded-md">
        <div className="flex items-end justify-start w-full px-10 py-6 bg-white border-b border-slate-400">
          <img src={loginLogo} alt="" />
        </div>
        <div className="px-10 py-6">
          <div className="flex items-center justify-between mb-5 ">
            <h4 className="text-sm font-semibold">User Registration</h4>
            <Link to="/signUp">
              <span className="text-xs font-semibold text-black_color">
                User registration
              </span>
            </Link>
          </div>
          <div>
            <form
              action=""
              className="grid grid-cols-1 text-left md:grid-cols-2 gap-x-5 gap-y-5 "
            >
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  First Name:
                </label>
                <input
                  type="text"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                />
              </div>
            </form>
            <Link to="/layout">
              <button
                className="px-4 py-3 mt-5 text-xs font-semibold rounded bg-green text-black_color"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <h2>Login Page</h2>
    //   <Link to="/signUp">
    //     <button className="px-4 py-3 bg-green" onClick={handleLoginClick}>
    //       Sign Up
    //     </button>
    //   </Link>
    //   <Link to="/layout">
    //     <button className="px-4 py-3 bg-green" onClick={handleLoginClick}>
    //       Login
    //     </button>
    //   </Link>
    // </div>
  )
}

export default Login

import { Link } from 'react-router-dom'
import loginLogo from '../assets/images/loginLogo.svg'
const signUp = ({ onLogin }) => {
  const handleLoginClick = () => {
    // Simulate a login action
    onLogin()
  }

  return (
    <div className="h-screen bg-dull_white">
      <div className="flex flex-col items-center justify-center  bg-[#fff] text-dark_color border border-dull_white max-w-xl mx-auto rounded-md">
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
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  Email Address:
                </label>
                <input
                  type="tel"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="text-xs font-semibold">
                  Password:
                </label>
                <input
                  type="text"
                  className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
                />
              </div>
            </form>
            <div className="flex items-center justify-between">
              <Link to="/layout">
                <button
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
          </div>
          <p className="mt-5 text-xs font-semibold text-black_color">
            Admin will contact you after submitting this form.
          </p>
        </div>
      </div>
    </div>
  )
}

export default signUp

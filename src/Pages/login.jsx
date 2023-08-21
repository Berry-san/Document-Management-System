/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
function Login({ onLogin }) {
  const handleLoginClick = () => {
    // Simulate a login action
    onLogin()
  }

  return (
    <div>
      <h2>Login Page</h2>
      <Link to="/signUp">
        <button className="px-4 py-3 bg-green" onClick={handleLoginClick}>
          Sign Up
        </button>
      </Link>
      <Link to="/layout">
        <button className="px-4 py-3 bg-green" onClick={handleLoginClick}>
          Login
        </button>
      </Link>
    </div>
  )
}

export default Login

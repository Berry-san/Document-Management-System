// components/Logout.js
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  }

  return <button onClick={handleClick}>Logout</button>
}

export default Logout

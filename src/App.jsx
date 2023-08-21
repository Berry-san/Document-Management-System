import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import Login from './Pages/login'
import SignUp from './Pages/signUp'
import Layout from './Pages/global/layout'
import Dashboard from './Pages/dashboard'
import CreateUser from './Pages/CreateUser'
import DocumentOwners from './Pages/documentOwners'
import UploadDocument from './Pages/uploadDocument'
// import Departments from './Pages/departments'
import Documents from './Pages/documents'

import { useState } from 'react'
import {
  // BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    // Simulate a successful login
    setIsLoggedIn(true)
  }

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route
        path="/layout"
        element={isLoggedIn ? <Layout /> : <Navigate to="/" />}
      >
        <Route index element={<Dashboard />} />
        <Route path="createUser" element={<CreateUser />} />
        <Route path="documentOwners" element={<DocumentOwners />} />
        <Route path="uploadDocument" element={<UploadDocument />} />
        <Route path="documents" element={<Documents />} />
      </Route>
      <Route index element={<Navigate to="/login" />} />
    </Routes>
  )
}

{
  /* <Routes>
  <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
  <Route
    path="/dashboard"
    element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}
  />
  <Route index element={<Navigate to="/login" />} />
</Routes> */
}

export default App

// function App() {
//   return (
//     <Routes>
//       <Route path="login" element={<>This is login Page</>} />
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="/createUser" element={<CreateUser />} />
//         <Route path="/documentOwners" element={<DocumentOwners />} />
//         <Route path="/uploadDocument" element={<UploadDocument />} />
//         <Route path="/documents" element={<Documents />} />
//         {/* <Route path="/createUser" element={<CreateUser />} /> */}
//       </Route>
//     </Routes>
//   )
// }

// export default App

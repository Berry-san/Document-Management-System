import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages/global/layout'
import Dashboard from './Pages/dashboard'
import CreateUser from './Pages/CreateUser'
import DocumentOwners from './Pages/documentOwners'
import UploadDocument from './Pages/uploadDocument'
// import Departments from './Pages/departments'
import Documents from './Pages/documents'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/documentOwners" element={<DocumentOwners />} />
        <Route path="/uploadDocument" element={<UploadDocument />} />
        <Route path="/documents" element={<Documents />} />
        {/* <Route path="/createUser" element={<CreateUser />} /> */}
      </Route>
      <Route path="login" element={<>This is login Page</>} />
    </Routes>
  )
}

export default App

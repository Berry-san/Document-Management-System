// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
// import hamburger from '../../assets/svgs/hamburger.svg'

// export const Button = () => {
//   const [showSidebar, setShowSidebar] = useState(false)
//   return (
//     <button>
//       <img src={hamburger} className="w-8 h-8" alt="" />
//     </button>
//   )
// }
export const Layout = () => {
  return (
    <div className="flex flex-row gap-2 m-1 overflow-hidden">
      <div className="hidden xl:flex">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Topbar />
        <div className="px-4 py-10 md:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

{
  /* <button onClick={() => setShowSidebar(!showSidebar)}>
        <img src={hamburger} className="w-8 h-8" alt="" />
      </button> */
}

export default Layout

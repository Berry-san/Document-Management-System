import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import hamburger from '../../assets/svgs/hamburger.svg'
import close from '../../assets/svgs/close.svg'

// export const Button = () => {
//   const [showSidebar, setShowSidebar] = useState(false)
//   return (
//     <button>
//       <img src={hamburger} className="w-8 h-8" alt="" />
//     </button>
//   )
// }
export const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleClick = () => {
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }
  return (
    <div className="flex flex-row gap-2 m-1 overflow-hidden">
      <div className="absolute">
        {showSidebar ? (
          <div className="flex relative top-[-0.1rem] justify-end w-full p-4 border-r border-b-0 bg-green border-dark_color">
            <img src={close} alt="" onClick={handleClick} />
          </div>
        ) : (
          <img
            src={hamburger}
            onClick={handleClick}
            alt=""
            className="relative w-10 h-10 top-4 md:top-9 left-5 xl:hidden"
          />
        )}

        <div
          className={
            showSidebar
              ? 'flex h-screen relative top-[-0.1rem]'
              : 'hidden xl:flex'
          }
        >
          <Sidebar />
        </div>
      </div>
      <div className="flex-1 ml-0 xl:ml-72">
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

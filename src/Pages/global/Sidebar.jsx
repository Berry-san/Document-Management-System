/* eslint-disable react/prop-types */
import logo from '../../assets/svgs/logo.svg'
import leftArrow from '../../assets/svgs/leftArrow.svg'
import dashboard from '../../assets/svgs/dashboard.svg'
import user from '../../assets/svgs/user.svg'
import users from '../../assets/svgs/users.svg'
import upload from '../../assets/svgs/upload.svg'
import departments from '../../assets/svgs/departments.svg'
import documents from '../../assets/svgs/documents.svg'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null)
  const sidebar = useRef(null)

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [sidebarOpen, setSidebarOpen])

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [sidebarOpen, setSidebarOpen])

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-40 flex h-screen w-80 flex-col overflow-y-hidden bg-green  duration-300 ease-linear  lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* SIDEBAR HEADER */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 border-b border-[#393E46]">
        <NavLink to="/">
          <div className="flex items- w-full gap-2 pt-3 pb-3 ">
            <img src={logo} alt="logo" />
            <span className="font-bold text-neutral-700 ">
              DOCUMENT MANAGEMENT SYSTEM
            </span>
          </div>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <img src={leftArrow} alt="" />
        </button>
      </div>
      {/* SIDEBAR HEADER */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* Sidebar Menu */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* Menu Group */}
          <div>
            <ul className="mb-6 flex flex-col gap-2">
              {/* Menu Item Dashboard */}

              {/* Menu Item Dashboard */}
              <li>
                <NavLink
                  to="./"
                  className={`group relative flex items-center gap-2.5 font-semibold rounded-sm py-2 px-4 text-dark_color duration-300 ease-in-out`}
                >
                  <img src={dashboard} className="w-6 h-6" alt="" /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="createUser"
                  className={`group relative flex items-center gap-2.5 font-semibold rounded-sm py-2 px-4 text-dark_color duration-300 ease-in-out`}
                >
                  <img src={user} alt="" /> Create User
                </NavLink>
              </li>

              {/* Menu Item Calendar */}
              <li>
                <NavLink
                  to="uploadDocument"
                  className={`group relative flex items-center gap-2.5 font-semibold rounded-sm py-2 px-4 text-dark_color duration-300 ease-in-out`}
                >
                  <img src={upload} alt="" /> Upload new Document
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="documentOwners"
                  className={`group relative flex items-center gap-2.5 font-semibold rounded-sm py-2 px-4 text-dark_color duration-300 ease-in-out `}
                >
                  <img src={users} alt="" /> Document Owners
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="departments"
                  className={`group relative flex items-center gap-2.5 font-semibold rounded-sm py-2 px-4 text-dark_color duration-300 ease-in-out `}
                >
                  <img src={departments} alt="" />
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="documents"
                  className={`group relative flex items-center gap-2.5 font-semibold rounded-sm py-2 px-4 text-dark_color duration-300 ease-in-out`}
                >
                  <img src={documents} alt="" />
                  Documents
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

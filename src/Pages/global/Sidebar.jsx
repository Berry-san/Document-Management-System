/* eslint-disable react/prop-types */
import logo from '../../assets/svgs/logo.svg'
import leftArrow from '../../assets/svgs/leftArrow.svg'
import logout from '../../assets/svgs/logout.svg'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import Logout from '../logout'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null)
  const sidebar = useRef(null)

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  const [overlayActive, setOverlayActive] = useState(false)

  // useEffect(() => {
  //   setShowOverlay(sidebarOpen) // Update overlay state based on sidebarOpen
  // }, [sidebarOpen])

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
    setOverlayActive(sidebarOpen)
  }, [sidebarExpanded, sidebarOpen])

  return (
    <div className="relative">
      {overlayActive && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black opacity-40"
        ></div>
      )}
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 z-40 flex h-screen w-80 flex-col overflow-y-hidden bg-green px-2 duration-300 ease-linear  lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between gap-2 py-5.5 lg:py-6.5 border-b border-black_color">
          <NavLink to="./">
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

        <div className="no-scrollbar flex-1 flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* Sidebar Menu */}
          <nav className="mt-5 py-6 px-4 lg:mt-5 lg:pb-10 lg:px-6 border-b border-dashed border-black_color">
            {/* Menu Group */}
            <div>
              <ul className="mb-6 flex flex-col gap-2">
                {/* Menu Item Dashboard */}

                {/* Menu Item Dashboard */}
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                  <SidebarLinks
                    key={link.key}
                    link={link}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  />
                ))}
                <li className="group relative flex items-center gap-2.5 font-semibold rounded-sm py-2  text-dark_color duration-300 ease-in-out">
                  <img src={logout} className="w-6 h-6" alt="" />
                  <Logout />
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex-1 flex items-center justify-start space-x-5 px-4 lg:px-6">
            <div className="bg-black_color text-dull_white text-sm font-semibold p-3 rounded-[50px] tracking-[0.7px]">
              BM
            </div>
            <div className="my-auto">
              <p className="text-sm font-semibold tracking-[0.7px]">
                Bob Marley
              </p>
              <p className="text-xs text-black_color font-medium">
                Monday, July 16 2023
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

function SidebarLinks({ link, onClick }) {
  return (
    <li>
      <NavLink
        onClick={onClick}
        to={link.path}
        className="group relative flex items-center gap-2.5 font-semibold rounded-sm py-2  text-dark_color duration-300 ease-in-out"
      >
        <img src={link.icon} className="w-6 h-6" alt="" />
        {link.label}
      </NavLink>
    </li>
  )
}

export default Sidebar

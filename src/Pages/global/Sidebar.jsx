/* eslint-disable react/prop-types */
// import { FcBullish } from 'react-icons/fa'
import logo from '../../assets/svgs/logo.svg'
import hamburger from '../../assets/svgs/hamburger.svg'
import { Link } from 'react-router-dom'
import data from '../lib/constants/navigation'
// import classNames from 'classnames'

// const linkClasses =
//   'flex items-center gap-x-2 p-3 hover:bg-neutral-700 hover:no-underline flex items-center gap-2 p-3 hover:bg-neutral-700 hover:no-underline active:bg-neutral-700 rounded-md text-base'
const Sidebar = () => {
  return (
    <div className="bg-[#4ECCA3] w-72 p-2 text-neutral-700 flex flex-col border-r border-[#393E46]">
      <div className="flex items-center gap-2 pb-5 border-b border-[#393E46]">
        <img src={logo} alt="logo" />
        <span className="font-bold text-neutral-700 ">
          DOCUMENT MANAGEMENT SYSTEM
        </span>
      </div>

      <div className="flex-1 flex flex-col py-8 gap-0.5 pb-32 border-b border-[#393E46] border-dashed">
        {data.map((link) => (
          <SidebarLinks key={link.key} link={link} />
        ))}
      </div>
      <div>
        <div className="flex gap-3 px-6 my-20">
          <div className="bg-black_color text-dull_white text-sm font-semibold p-3 rounded-[50px] tracking-[0.7px]">
            BM
          </div>
          <div className="my-auto">
            <p className="text-sm font-semibold tracking-[0.7px]">Bob Marley</p>
            <p className="text-xs font-medium text-black_color">
              Monday, July 16 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

function SidebarLinks({ link }) {
  // const { pathname } = useLocation()
  return (
    <Link
      to={link.path}
      className="flex items-center p-3 font-bold gap-x-2 hover:no-underline"
      // className={classNames(
      //   pathname === link.path
      //     ? ' text-neutral-100 bg-neutral-700'
      //     : 'text-white ',
      //   linkClasses

      // )}
    >
      <img src={link.icon} className="w-6 h-6" alt="" />
      {link.label}
    </Link>
  )
}

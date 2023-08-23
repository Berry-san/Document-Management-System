/* eslint-disable react/prop-types */
import right from '../assets/svgs/right.svg'
import back from '../assets/svgs/back.svg'
import playGif from '../assets/svgs/play.gif'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { DEPARTMENT_LINKS } from './lib/constants/navigation'

const Departments = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-between w-full mb-5">
          <div className="flex items-center space-x-5">
            <img
              src={back}
              className="w-6 h-6 cursor-pointer hover:scale-125"
              alt=""
              onClick={goBack}
            />
            <h3 className="flex text-lg font-bold text-left">
              Upload a document
            </h3>
          </div>
          <div className="">
            <a>
              <img src={playGif} />
            </a>
          </div>
        </div>
      </div>
      <ul className="mb-6 flex flex-col gap-4">
        {DEPARTMENT_LINKS.map((link) => (
          <DepartmentLinks key={link.key} link={link} />
        ))}
      </ul>
    </>
  )
}

function DepartmentLinks({ link }) {
  return (
    <li>
      <NavLink
        to={link.path}
        className="group relative w-80 flex items-center justify-between gap-2.5 font-semibold rounded-sm py-2  text-dark_color duration-300 ease-in-out"
      >
        <p className="font-semibold">{link.label}</p>
        <img src={right} className="w-6 h-6" alt="" />
      </NavLink>
    </li>
  )
}

export default Departments

/* eslint-disable react/prop-types */
// import light from '../../assets/svgs/light.svg'
import hamburger from '../../assets/svgs/hamburger.svg'

const Topbar = (props) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white border-b border-slate-900  drop-shadow-1 ">
      <div className="flex flex-grow items-center justify-between pt-7 pb-6 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
            className="z-40 block  bg-white p-1.5 lg:hidden"
          >
            <img src={hamburger} className="w-8 h-8" alt="" />
          </button>

          {/* <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={hamburger} className="w-6 h-6" alt="Logo" />
          </Link> */}
        </div>

        <div className="hidden sm:block">
          <p className="font-semibold">Hello, Bob</p>
        </div>
      </div>
    </header>
  )
}

export default Topbar

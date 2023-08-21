import light from '../../assets/svgs/light.svg'
import hamburger from '../../assets/svgs/hamburger.svg'
const Topbar = () => {
  return (
    <div className="flex border-b border-[#D6D6D6] pt-6 md:pt-11 pb-3 px-4 md:px-6 items-center justify-between">
      <div>{/* <img src={hamburger} className="w-6 h-6" alt="" /> */}</div>
      <div className="flex space-x-3">
        <p className="font-bold">Good morning, Bob</p>
        <img src={light} alt="" />
      </div>
    </div>
  )
}

export default Topbar

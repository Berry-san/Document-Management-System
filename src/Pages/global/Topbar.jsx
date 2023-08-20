import light from '../../assets/svgs/light.svg'
// import { Button } from './layout'

const Topbar = () => {
  return (
    <div className="flex border-b border-[#D6D6D6] pt-6 md:pt-11 pb-3 px-4 md:px-6 items-center justify-end">
      <div className="flex space-x-3">
        <p className="font-bold">Good morning, Bob</p>
        <img src={light} alt="" />
      </div>
    </div>
  )
}

export default Topbar

import light from '../../assets/svgs/light.svg'

const Topbar = () => {
  return (
    <div className="flex space-x-3 border-b border-[#D6D6D6] pt-11 pb-3 pr-6 items-center justify-end">
      <p className="font-bold">Good morning, Bob</p>
      <img src={light} alt="" />
    </div>
  )
}

export default Topbar

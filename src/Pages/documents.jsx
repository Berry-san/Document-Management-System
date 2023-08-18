import folders from '../assets/svgs/folders.svg'
// import Search from '../components/Search/Search'
import playGif from '../assets/svgs/play.gif'
import back from '../assets/svgs/back.svg'
import { useNavigate } from 'react-router-dom'

const Documents = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-5">
          <img
            src={back}
            className="w-6 h-6 cursor-pointer hover:scale-125"
            alt=""
            onClick={goBack}
          />
          <h3 className="flex text-lg font-bold text-left">Document</h3>
        </div>
        <div className="">
          {' '}
          <a href>
            {' '}
            <img src={playGif} alt srcSet />
          </a>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <a href className="hover:scale-105">
            <div className="flex-shrink py-8 text-center rounded bg-dull_white">
              <img src={folders} className="mx-auto" />
              <div className="text-dark_color text-sm pt-2 font-semibold tracking-[0.7px] truncate px-3">
                Vouchers
              </div>
            </div>
          </a>
          <a href className="hover:scale-105">
            <div className="flex-shrink py-8 text-center rounded bg-dull_white">
              <img src={folders} className="mx-auto" />
              <div className="text-dark_color text-sm pt-2 font-semibold tracking-[0.7px] truncate px-3">
                Receipts
              </div>
            </div>
          </a>
          <a href className="hover:scale-105">
            <div className="flex-shrink py-8 text-center rounded bg-dull_white">
              <img src={folders} className="mx-auto" />
              <div className="text-dark_color text-sm pt-2 font-semibold tracking-[0.7px] truncate px-3">
                Auto Vouchers
              </div>
            </div>
          </a>
          <a href className="hover:scale-105">
            <div className="flex-shrink py-8 text-center rounded bg-dull_white">
              <img src={folders} className="mx-auto" />
              <div className="text-dark_color text-sm pt-2 font-semibold tracking-[0.7px] truncate px-3">
                Power Receipts
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Documents

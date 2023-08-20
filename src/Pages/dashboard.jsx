import folders from '../assets/svgs/folders.svg'
import networking from '../assets/svgs/networking.svg'
import file from '../assets/svgs/file.svg'
import man from '../assets/svgs/man.svg'
import { Link } from 'react-router-dom'

const dashboard = () => {
  return (
    <>
      <div>
        <p className="pb-6 text-lg font-bold">System Overview.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-md">
            <div className="flex px-5 py-8 bg-green/50">
              <div className>
                <img src={man} />
              </div>
              <div className="ps-7">
                <p className="text-sm font-bold">Document Owners</p>
                <p className="pt-1 text-sm font-medium text-black_color">
                  Count: 32
                </p>
              </div>
            </div>
            <Link to="/uploadDocument">
              <div className="flex justify-between p-5 text-xs text-white bg-black_color hover:scale-105">
                <span className="font-semibold">View all Users</span>
                <span className>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="rgba(255,255,255,1)"
                    ></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden rounded-md">
            <div className="flex px-5 py-8 bg-green/50">
              <div className>
                <img src={folders} />
              </div>
              <div className="ps-7">
                <p className="text-sm font-bold">Documents</p>
                <p className="pt-1 text-sm font-medium text-black_color">
                  Count: 128
                </p>
              </div>
            </div>
            <a href>
              <div className="flex justify-between p-5 text-xs text-white bg-black_color hover:scale-105">
                <span className="font-semibold">View all documents</span>
                <span className>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="rgba(255,255,255,1)"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
          <div className="overflow-hidden rounded-md">
            <div className="flex px-5 py-8 bg-green/50">
              <div className>
                <img src={networking} />
              </div>
              <div className="ps-7">
                <p className="text-sm font-bold">Departments</p>
                <p className="pt-1 text-sm font-medium text-black_color">
                  Count: 6
                </p>
              </div>
            </div>
            <a href>
              <div className="flex justify-between p-5 text-xs text-white bg-black_color hover:scale-105">
                <span className="font-semibold">View all departments</span>
                <span className>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="rgba(255,255,255,1)"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 pt-[40px]">
          <div className="flex col-span-7 rounded bg-green/50 pe-5">
            <div className="flex-none hidden md:block lg:block">
              <img className="mix-blend-multiply" src={file} />
            </div>
            <div className="flex-grow py-8 text-center md:py-14 lg:py-14">
              <p className="text-sm font-bold">Upload a new document</p>
              <p className="font-semibold text-xs opacity-50 pt-2 tracking-[0.6px]">
                You'll need the name of the document owner, department, phone
                number and email address.
              </p>
              <a href>
                <button className="bg-black_color text-dull_white mt-7 px-4 py-2 rounded-md text-xs tracking-[0.6px] hover:bg-green hover:text-black hover:font-semibold">
                  Upload Document
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default dashboard

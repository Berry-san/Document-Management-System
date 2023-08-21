import playGif from '../assets/svgs/play.gif'
// import Datepicker from 'flowbite-datepicker/Datepicker'
import { useNavigate } from 'react-router-dom'
import back from '../assets/svgs/back.svg'

const UploadDocument = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
      {/* pb-7 sm:pb-5 lg:pb-5 */}
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
          {' '}
          <a>
            {' '}
            <img src={playGif} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 pb-7">
        <div className="col-span-7 md:col-span-5">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-black_color font-bold tracking-[0.7px]">
                  Click to add a file
                </p>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Supported file types
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOC, XLS, PNG, jPEG, DOCS, PPT
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <div className="flex justify-between px-5 py-2 mt-4 mb-3 rounded bg-dull_white">
            <div className="flex items-center gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.64587 14.7917H13.3542V13.5417H6.64587V14.7917ZM6.64587 11.25H13.3542V10H6.64587V11.25ZM4.58337 18.3333C4.25004 18.3333 3.95837 18.2083 3.70837 17.9583C3.45837 17.7083 3.33337 17.4167 3.33337 17.0833V2.91666C3.33337 2.58333 3.45837 2.29166 3.70837 2.04166C3.95837 1.79166 4.25004 1.66666 4.58337 1.66666H12.1042L16.6667 6.22916V17.0833C16.6667 17.4167 16.5417 17.7083 16.2917 17.9583C16.0417 18.2083 15.75 18.3333 15.4167 18.3333H4.58337ZM11.4792 6.79166H15.4167L11.4792 2.91666V6.79166Z"
                    fill="#393E46"
                  />
                </svg>
              </span>
              <span className="text-xs font-semibold text-black_color">
                File1_name.pdf
              </span>
            </div>
            <div>
              <button className="pt-1">
                <svg
                  className="hover:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z"
                    fill="#393E46"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between px-5 py-2 mb-3 rounded bg-dull_white">
            <div className="flex items-center gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.64587 14.7917H13.3542V13.5417H6.64587V14.7917ZM6.64587 11.25H13.3542V10H6.64587V11.25ZM4.58337 18.3333C4.25004 18.3333 3.95837 18.2083 3.70837 17.9583C3.45837 17.7083 3.33337 17.4167 3.33337 17.0833V2.91666C3.33337 2.58333 3.45837 2.29166 3.70837 2.04166C3.95837 1.79166 4.25004 1.66666 4.58337 1.66666H12.1042L16.6667 6.22916V17.0833C16.6667 17.4167 16.5417 17.7083 16.2917 17.9583C16.0417 18.2083 15.75 18.3333 15.4167 18.3333H4.58337ZM11.4792 6.79166H15.4167L11.4792 2.91666V6.79166Z"
                    fill="#393E46"
                  />
                </svg>
              </span>
              <span className="text-xs font-semibold text-black_color">
                File2_name.pdf
              </span>
            </div>
            <div>
              <button className="pt-1">
                <svg
                  className="hover:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z"
                    fill="#393E46"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between px-5 py-2 mb-3 rounded bg-dull_white">
            <div className="flex items-center gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.64587 14.7917H13.3542V13.5417H6.64587V14.7917ZM6.64587 11.25H13.3542V10H6.64587V11.25ZM4.58337 18.3333C4.25004 18.3333 3.95837 18.2083 3.70837 17.9583C3.45837 17.7083 3.33337 17.4167 3.33337 17.0833V2.91666C3.33337 2.58333 3.45837 2.29166 3.70837 2.04166C3.95837 1.79166 4.25004 1.66666 4.58337 1.66666H12.1042L16.6667 6.22916V17.0833C16.6667 17.4167 16.5417 17.7083 16.2917 17.9583C16.0417 18.2083 15.75 18.3333 15.4167 18.3333H4.58337ZM11.4792 6.79166H15.4167L11.4792 2.91666V6.79166Z"
                    fill="#393E46"
                  />
                </svg>
              </span>
              <span className="text-xs font-semibold text-black_color">
                File2_name.pdf
              </span>
            </div>
            <div>
              <button className="pt-1">
                <svg
                  className="hover:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z"
                    fill="#393E46"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <div className="px-5 py-4 border rounded border-border_color">
            <div className="mb-3">
              <div className="mb-1">
                <label htmlFor="" className="text-xs font-semibold">
                  Document owner:
                </label>
              </div>
              <input
                type="text"
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 mb-3 md:grid-cols-2 md:gap-5">
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Document type:
                  </label>
                </div>
                <div className="relative">
                  <select
                    type="text"
                    className="appearance-none rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  >
                    <option value=""></option>
                    <option value="">Document 1</option>
                    <option value="">Document 2</option>
                  </select>
                  <div className="absolute flex transform -translate-y-1/2 right-4 top-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99996 10L4.66663 6.68333H11.3333L7.99996 10Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Select department:
                  </label>
                </div>
                <div className="relative">
                  <select
                    type="text"
                    className="appearance-none rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  >
                    <option value=""></option>
                    <option value="">Department 1</option>
                    <option value="">Department 2</option>
                  </select>
                  <div className="absolute flex transform -translate-y-1/2 right-4 top-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99996 10L4.66663 6.68333H11.3333L7.99996 10Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-3 md:grid-cols-2 md:gap-5">
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Select Unit:
                  </label>
                </div>
                <div className="relative">
                  <select
                    type="text"
                    className="appearance-none rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  >
                    <option value=""></option>
                    <option value="">Unit 1</option>
                    <option value="">Unit 2</option>
                  </select>
                  <div className="absolute flex transform -translate-y-1/2 right-4 top-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99996 10L4.66663 6.68333H11.3333L7.99996 10Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Phone Number:
                  </label>
                </div>
                <input
                  type="text"
                  className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 mb-3 md:grid-cols-2 md:gap-5">
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Email address:
                  </label>
                </div>
                <input
                  type="email"
                  className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                />
              </div>
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Date:
                  </label>
                </div>
                <div className="relative">
                  <input
                    //   Datepicker
                    type="date"
                    className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  />

                  <div className="absolute flex transform -translate-y-1/2 right-4 top-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99996 10L4.66663 6.68333H11.3333L7.99996 10Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-1">
                <label htmlFor="" className="text-xs font-semibold">
                  Purpose:
                </label>
              </div>
              <textarea
                rows="3"
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              ></textarea>
            </div>
            <button className="px-4 py-3 text-xs font-semibold rounded bg-green text-black_color hover:bg-black_color hover:text-white">
              {' '}
              Save document
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadDocument

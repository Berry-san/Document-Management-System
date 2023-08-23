import playGif from '../assets/svgs/play.gif'
import { useState } from 'react'
// import Datepicker from 'flowbite-datepicker/Datepicker'
import { useNavigate } from 'react-router-dom'
import back from '../assets/svgs/back.svg'
import close from '../assets/svgs/close.svg'
import uploadedFile from '../assets/svgs/uploadedFile.svg'

const UploadDocument = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const [selectedFiles, setSelectedFiles] = useState(null)
  const [areFilesSelected, setAreFilesSelected] = useState(false)

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files)
    setSelectedFiles(filesArray)
    setAreFilesSelected(true)
  }

  const handleUploadClick = () => {
    if (selectedFiles.length === 0) {
      return
    }

    const data = new FormData()
    selectedFiles.forEach((file, index) => {
      data.append(`file-${index}`, file)
    })
  }

  const initialFormData = {
    docOwner: '',
    docType: 'option1',
    department: 'option1',
    unit: 'option1',
    phone: '',
    date: '',
    email: '',
    purpose: '',
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <>
      {/* pb-7 sm:pb-5 md:pb-5 */}
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
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-12 pb-7"
      >
        <div className="col-span-7 md:col-span-5">
          <div className="flex items-center justify-center w-full">
            <label
              onClick={handleUploadClick}
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-border_color border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-black_color font-bold mb-5 tracking-[0.7px]">
                  Click to add a file
                </p>
                <p className="mb-1 text-sm text-black_color">
                  Supported file types
                </p>
                <p className="text-xs text-black_color">
                  PDF, DOC, XLS, PNG, jPEG, DOCS, PPT
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                // multiple
              />
            </label>
          </div>

          {areFilesSelected && (
            <ul className="mt-5">
              {selectedFiles.map((file, index) => (
                <>
                  <li
                    key={index}
                    className="flex justify-between px-5 py-2 mb-3 rounded bg-dull_white"
                  >
                    <div className="flex items-center gap-3">
                      <span>
                        <img
                          src={uploadedFile}
                          className="w-5 h-5"
                          alt="file"
                        />
                      </span>
                      <span className="text-xs font-semibold text-black_color">
                        {file.name}
                      </span>
                    </div>
                    <div>
                      <button className="pt-1">
                        <img src={close} className="w-4 h-4" alt="" />
                      </button>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
        {/* <div className="col-span-7">
          <div className="px-5 py-4 border rounded border-border_color">
            <div className="mb-3">
              <div className="mb-1">
                <label htmlFor="" className="text-xs font-semibold">
                  Document owner:
                </label>
              </div>
              <input
                type="text"
                name="docOwner"
                value={formData.docOwner}
                onChange={handleInputChange}
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
                <div className="">
                  <select
                    value={formData.department}
                    name="department"
                    onChange={handleInputChange}
                    className=" rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Select department:
                  </label>
                </div>
                <div className="">
                  <select
                    value={formData.department}
                    name="department"
                    onChange={handleInputChange}
                    className=" rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
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
                <div className="">
                  <select
                    type="text"
                    value={formData.unit}
                    name="unit"
                    onChange={handleInputChange}
                    className=" rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Phone Number:
                  </label>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  name="phone"
                  onChange={handleInputChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                />
              </div>
              <div>
                <div className="mb-1">
                  <label htmlFor="" className="text-xs font-semibold">
                    Date:
                  </label>
                </div>
                <div className="">
                  <input
                    //   Datepicker
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
                  />
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
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-3 text-xs font-semibold rounded bg-green text-black_color hover:bg-black_color hover:text-white"
            >
              {' '}
              Save document
            </button>
          </div>
        </div> */}
        <div className="col-span-7">
          <div className="px-5 py-4 grid grid-cols-2 border rounded gap-x-4 gap-y-4  border-border_color">
            <div className="col-span-2">
              <label htmlFor="" className="text-xs font-semibold">
                Document Owner
              </label>
              <input
                type="name"
                name="docOwner"
                value={formData.docOwner}
                onChange={handleInputChange}
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="" className="text-xs font-semibold">
                Document Type
              </label>
              <select
                value={formData.docType}
                name="docType"
                onChange={handleInputChange}
                className=" rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="" className="text-xs font-semibold">
                Select Department
              </label>
              <select
                value={formData.department}
                name="department"
                onChange={handleInputChange}
                className=" rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="" className="text-xs font-semibold">
                Select Unit
              </label>
              <select
                value={formData.unit}
                name="unit"
                onChange={handleInputChange}
                className=" rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="" className="text-xs font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="" className="text-xs font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="" className="text-xs font-semibold">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="text-xs font-semibold">
                Purpose
              </label>
              <textarea
                rows="3"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="rounded text-sm font-semibold tracking-[0.6px] text-black_color bg-dull_white w-full p-3 focus:bg-white focus:outline-black_color"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 w-36 py-3 text-xs font-semibold rounded bg-green text-black_color hover:bg-black_color hover:text-white"
            >
              Save document
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UploadDocument

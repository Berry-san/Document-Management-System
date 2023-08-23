import { useNavigate } from 'react-router-dom'
import back from '../assets/svgs/back.svg'
import { useState } from 'react'
const CreateUser = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const initialFormData = {
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
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
    setFormData(initialFormData)
  }

  return (
    <div className="text-left">
      <div className="flex items-center mb-5 space-x-5">
        <img
          src={back}
          className="w-6 h-6 cursor-pointer"
          alt=""
          onClick={goBack}
        />
        <h3 className="flex text-lg font-bold text-left">Create a User</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 text-left md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
          <div>
            <label htmlFor="" className="text-xs font-semibold">
              First Name:
            </label>
            <input
              type="name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <label htmlFor="" className="text-xs font-semibold">
              Last Name:
            </label>
            <input
              type="name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <label htmlFor="" className="text-xs font-semibold">
              Phone Number:
            </label>
            <input
              type="phone"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <label htmlFor="" className="text-xs font-semibold">
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <label htmlFor="" className="text-xs font-semibold">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-3 text-xs font-semibold rounded bg-green text-black_color mt-5"
        >
          Create User
        </button>
      </form>
    </div>
  )
}

export default CreateUser

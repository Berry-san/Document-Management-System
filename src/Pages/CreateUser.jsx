import { useNavigate } from 'react-router-dom'
import back from '../assets/svgs/back.svg'
const CreateUser = () => {
  // const [state, setState] = useState({
  //   firstname: '',
  //   lastname: '',
  //   phoneNo: '',
  //   email: '',
  //   password: '',

  // })

  // const update = (event) => {
  //   setState({
  //     ...state,
  //   })
  // }

  // const submit = (event) => {
  //   event.preventDefault()
  //   console.log(state)
  // }
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
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
      <form
        action=""
        className="grid grid-cols-1 text-left md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 "
      >
        <div>
          <label htmlFor="" className="text-xs font-semibold">
            First Name:
          </label>
          <input
            type="text"
            className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="text-xs font-semibold">
            Last Name:
          </label>
          <input
            type="text"
            className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="text-xs font-semibold">
            Phone Number:
          </label>
          <input
            type="tel"
            className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="text-xs font-semibold">
            Email Address:
          </label>
          <input
            type="text"
            className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <label htmlFor="" className="text-xs font-semibold">
            Password:
          </label>
          <input
            type="text"
            className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
      </form>
      <button className="px-4 py-3 text-xs font-semibold rounded bg-green text-black_color mt-5">
        Create User
      </button>
    </div>
  )
}

export default CreateUser

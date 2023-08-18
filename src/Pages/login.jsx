const login = () => {
  return (
    <>
      <div>
        <img src="" alt="" />
        <h3></h3>
      </div>
      <div>
        <form
          action=""
          className="grid grid-cols-1 text-left md:grid-cols-2 xl:grid-cols-2 gap-x-5 gap-y-5 "
        >
          <div>
            <label htmlFor="" className="font-semibold text-md">
              First Name:
            </label>
            <input
              type="text"
              className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-md">
              Last Name:
            </label>
            <input
              type="text"
              className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
            />
          </div>
        </form>
        <button className="text-black mt-4 px-4 py-3 font-semibold rounded-md bg-[#4ECCA3]">
          Create User
        </button>
      </div>
    </>
  )
}

export default login

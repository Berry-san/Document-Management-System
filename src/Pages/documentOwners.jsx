import eye from '../assets/svgs/eye.svg'
import forward from '../assets/svgs/forward.svg'
import trash from '../assets/svgs/trash.svg'
import Search from '../components/Search/Search'
import playGif from '../assets/svgs/play.gif'
import back from '../assets/svgs/back.svg'
import { useNavigate } from 'react-router-dom'

const DocumentOwners = () => {
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
            className="w-6 h-6 cursor-pointer"
            alt=""
            onClick={goBack}
          />
          <h3 className="flex text-lg font-bold text-left">Document Owners</h3>
        </div>

        <div className="flex items-center space-x-10 w-72">
          <Search placeholder="Search..." />
          <a href>
            {' '}
            <img src={playGif} alt srcSet />
          </a>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 table-auto">
          <thead className="p-5 text-md font-bold text-gray-700  bg-[#4ECCA3] rounded-lg">
            <tr>
              <th className="py-3 pl-8">Owner</th>
              <th className="px-1 py-3">Document name</th>
              <th className=" pr-5 py-3 w-[30%]">Purpose</th>
              <th className="px-1 py-3">Date</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {owners.map((owner) => {
            const { ownerName, department, documentCount, action } = owner
            return (
              <tr key={id}>
                <td>{ownerName}</td>
                <td>{department}</td>
                <td>{documentCount}</td>
                <td>{action}</td>
              </tr>
            )
          })} */}
            <tr className="bg-[#f4f4f4] font-medium text-black border-b border-slate-400">
              <td className="py-3 pl-4 xl:pl-8">ownerName</td>
              <td className="px-1 py-3">department</td>
              <td className="py-3 pr-5 line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur qui necessitatibus rem, id adipisci animi repellat
                iusto? Aut, dolores doloribus.
              </td>
              <td className="px-1 py-3">documentCount</td>
              <td className="flex justify-between max-w-[12rem] px-6 py-3 space-x-2 xl:space-x-6">
                <img src={eye} alt="" className="cursor-pointer" />
                <img src={forward} alt="" className="cursor-pointer" />
                <img src={trash} alt="" className="cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
        {/* {owners.length === 0 ? (
        <p className="text-center text-red-800 ">No Users</p>
      ) : null} */}
      </div>
    </>
  )
}

export default DocumentOwners

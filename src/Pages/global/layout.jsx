import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const layout = () => {
  return (
    <div className="flex flex-row gap-2 m-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="px-2 py-10 md:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default layout

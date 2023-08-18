// import { HiOutlineViewGrid } from 'react-icons/hi'
// import { BiUserPlus } from 'react-icons/bi'
// import { BiUpload } from 'react-icons/bi'
import user from '../../../assets/svgs/user.svg'
import users from '../../../assets/svgs/users.svg'
import upload from '../../../assets/svgs/upload.svg'
import documents from '../../../assets/svgs/documents.svg'
import departments from '../../../assets/svgs/departments.svg'
import dashboard from '../../../assets/svgs/dashboard.svg'

const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: dashboard,
  },
  {
    key: 'createUser',
    label: 'Create User',
    path: '/createUser',
    icon: user,
  },
  {
    key: 'uploadDocument',
    label: 'Upload Document',
    path: '/uploadDocument',
    icon: upload,
  },
  {
    key: 'documentOwners',
    label: 'Document Owners',
    path: '/documentOwners',
    icon: users,
  },
  {
    key: 'departments',
    label: 'Departments',
    path: '/departments',
    icon: departments,
  },
  {
    key: 'documents',
    label: 'Documents',
    path: '/documents',
    icon: documents,
  },
]

export default DASHBOARD_SIDEBAR_LINKS

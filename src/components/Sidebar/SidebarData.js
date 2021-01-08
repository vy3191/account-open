import { FaUser,FaHome,FaDollarSign } from 'react-icons/fa';
import { FcBearish, FcAdvertising , FcReading , } from 'react-icons/fc';
import { MdHome } from 'react-icons/md';

export const navBarItems = [
  {
    title: 'Personal Details',
    className: 'nav-text',
    path: '/personal-details',
    icon: <FaUser />
  },
  {
    title: 'Previous Address',
    className: 'nav-text',
    path: '/previous-address',
    icon: <MdHome />
  },
  {
    title: 'Current Address',
    className: 'nav-text',
    path: '/current-address',
    icon: <FaHome />
  }, 
  {
    title: 'Monthly Income',
    className: 'nav-text',
    path: '/monthly-income',
    icon: <FaDollarSign />
  },
  {
    title: 'Monthly Expense',
    className: 'nav-text',
    path: '/monthly-expenses',
    icon: <FcBearish />
  },
  {
    title: 'Products',
    className: 'nav-text',
    path: '/products',
    icon: <FcAdvertising  />
  },
  {
    title: 'Review & Confirm',
    className: 'nav-text',
    path: '/review',
    icon: <FcReading  />
  }

]
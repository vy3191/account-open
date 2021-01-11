import { FaUser,FaHome,FaDollarSign } from 'react-icons/fa';
import { FcBearish, FcAdvertising , FcReading , } from 'react-icons/fc';
import { MdHome } from 'react-icons/md';

export const navBarItems = [
  {
    title: 'Personal Details',
    className: 'nav-text',
    id: 'personalDetails',
    path: '/personal-details',
    icon: <FaUser />
  },
  {
    title: 'Current Address',
    id: 'currentAddress',
    className: 'nav-text',
    path: '/current-address',
    icon: <FaHome />
  },
  {
    title: 'Previous Address',
    id: 'previousAddress',
    className: 'nav-text',
    path: '/previous-address',
    icon: <MdHome />
  },
  {
    title: 'Monthly Income',
    id: 'monthlyIncome',
    className: 'nav-text',
    path: '/monthly-income',
    icon: <FaDollarSign />
  },
  {
    title: 'Monthly Expense',
    id: 'monthlyExpenses',
    className: 'nav-text',
    path: '/monthly-expenses',
    icon: <FcBearish />
  },
  {
    title: 'Products',
    id: 'products',
    className: 'nav-text',
    path: '/products',
    icon: <FcAdvertising  />
  },
  {
    title: 'Review & Confirm',
    id: 'review',
    className: 'nav-text',
    path: '/review',
    icon: <FcReading  />
  }

]
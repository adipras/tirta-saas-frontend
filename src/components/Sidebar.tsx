import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  CreditCardIcon,
  ChartBarIcon,
  CogIcon,
  BeakerIcon,
  RectangleStackIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Customers', href: '/admin/customers', icon: UserGroupIcon },
  { name: 'Subscription Types', href: '/admin/subscriptions', icon: RectangleStackIcon },
  { name: 'Water Rates', href: '/admin/water-rates', icon: CurrencyDollarIcon },
  { name: 'Invoices', href: '/admin/invoices', icon: DocumentDuplicateIcon },
  { name: 'Payments', href: '/admin/payments', icon: CreditCardIcon },
  { name: 'Water Usage', href: '/admin/usage', icon: BeakerIcon },
  { name: 'Reports', href: '/admin/reports', icon: ChartBarIcon },
  { name: 'Settings', href: '/admin/settings', icon: CogIcon },
];

const Sidebar = () => {
  console.log('=== Sidebar Rendering ===');
  
  return (
    <div className="flex w-64 flex-col" style={{ backgroundColor: 'lightgray' }}>
      <div className="flex flex-col flex-grow pt-5 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <h1 className="text-xl font-semibold text-gray-900">Tirta SaaS</h1>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } group flex items-center px-2 py-2 text-sm font-medium border-l-4`
                }
              >
                <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
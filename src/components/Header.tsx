import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <UserCircleIcon className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
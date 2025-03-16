import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`bg-gray-100 w-64 min-h-screen p-4 transition-all ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <nav>
        <ul className="space-y-2">
          <li><Link to="/" className="block p-2 hover:bg-gray-200 rounded">Home</Link></li>
          <li><Link to="/about" className="block p-2 hover:bg-gray-200 rounded">About</Link></li>
          <li><Link to="/dashboard" className="block p-2 hover:bg-gray-200 rounded">Dashboard</Link></li>
          <li><Link to="/profile" className="block p-2 hover:bg-gray-200 rounded">Profile</Link></li>
          <li><Link to="/settings" className="block p-2 hover:bg-gray-200 rounded">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

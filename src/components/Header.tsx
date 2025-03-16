import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate()
  const {isLoginSesion,logout} = useContext(AuthContext)
  const handleLogout = async () => {
    try {
      await logout();
      console.log('psss')
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link to="/">MRx9</Link></h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
            {isLoginSesion &&
            <button onClick={handleLogout}>Logout</button>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="mb-6">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

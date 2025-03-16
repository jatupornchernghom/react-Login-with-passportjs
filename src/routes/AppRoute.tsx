import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/Aboud';
import Dashboard from '../pages/Dashbroad';
import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

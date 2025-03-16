import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded shadow-md overflow-hidden ${className}`}>
      <div className="p-4 bg-gray-50 border-b">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;

import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <Card title="Our Story" className="mb-6">

        <p>
            THIS FOR LEANING REACT + SQL + AUTH + PASSPORTJS 
        </p>
      </Card>
      

      </div>
    
  );
};

export default About;

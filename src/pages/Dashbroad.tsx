import React, { useState,useContext, useEffect } from 'react';
import Card from '../components/Card';
import Sidebar from '../components/SideBar';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {isLoginSesion,user} = useContext(AuthContext)
  const navigate = useNavigate();


  useEffect(()=>{
    if(!isLoginSesion){
      navigate('/')
      alert("คุณยังไม่ได้ LOGIN !!!!");
    }
    
  },[])
  
  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} />
      
      <div className="flex-1">
        <div className="p-4 md:hidden">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-gray-200 p-2 rounded"
          >
            ☰ Menu
          </button>
        </div>
        
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <h2>สวัสดีคุณ {user?.username}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card title="Statistics">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-gray-500">Users</h4>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div>
                  <h4 className="text-gray-500">Revenue</h4>
                  <p className="text-2xl font-bold">$5,678</p>
                </div>
                <div>
                  <h4 className="text-gray-500">Orders</h4>
                  <p className="text-2xl font-bold">567</p>
                </div>
              </div>
            </Card>
            
            <Card title="Recent Activity">
              <ul className="divide-y">
                <li className="py-2">User สุดหล่อ signed up</li>
                <li className="py-2">Order #1234 was placed</li>
                <li className="py-2">Payment received from someone</li>
              </ul>
            </Card>
          </div>
          
          <Card title="Monthly Report">
            <p> chart or detailed </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

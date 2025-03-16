import React,{useState,useContext} from 'react';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login ,register} = useContext(AuthContext);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true)

    if(isLogin){
      try {
        await login(username, password);
        navigate('/dashboard');
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to login');
      }
    }else{
      console.log(username, password)
      try {
        await register(username, password);
        alert("คุณได้ลงทะเบียนแล้ว โปรดเข้าสู่ระบบ");
        setIsLogin(true)
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to login');
      }
    }
    setLoading(false)
  };
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl flex justify-center font-bold mb-6">PASSPORTJS WITH REACTJS</h1>
      <div className="flex justify-center gap-3">        
          <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">{isLogin ? "เข้าสู่ระบบ": "สร้างบัญชี"}</h2>
            {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-96 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-96 p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-400 transition">
                {loading ? "กำลังดำเนินการ" : isLogin ? "เข้าสู่ระบบ": "สร้างบัญชี" }
              </button>
            </form>
            <div className="flex justify-center gap-3 my-5">
              {isLogin ? "ยังไม่มีบัญชีใช่ไหม?" : "มีบัญชีอยู่แล้วใช่ไหม?"}  
              <button
               disabled={loading}
               onClick={toggleMode}
               className="text-blue-600" >
                {!isLogin ? "เข้าสู่ระบบ":"สร้าบัญชี"}
                </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;

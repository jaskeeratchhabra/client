import React, { useState,useContext,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessComponent from './successComponent';
import UserContext from '../Context/UserContext';

import Loading from './Loading';

const LoginForm = () => {
  
  const {setUser}=useContext(UserContext);

  const [Success, setSuccess]=useState(false);
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { phone, password } = formData;
    const user = {
      phone,
      password
    };
    try {
      setLoading(true);
      const result = (await axios.post("/api/users/login", user)).data;
      if (result) {
        console.log(result);
        localStorage.setItem('userName',JSON.stringify(result.name));
        setUser(result.name);
        setSuccess(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false); 
      alert(error.message)
      setError(true); 
    }
  };
  
  useEffect(()=>{
    if(Success===true){
        navigate('/home')
    }
  },[Success])

  return (
    <div>
    {loading && <Loading />}
    {Success && <SuccessComponent message="Welcome to pgDekho" />}
    {error && <h1>{error.message}</h1>}

    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-sm">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">Phone Number</label> */}
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;

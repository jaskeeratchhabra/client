import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import SuccessComponent from './successComponent';
import Loading from './Loading';

const RegisterForm = () => {
  const [Success, setSuccess]=useState(false);
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    cpassword: ''
  });

  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   async function handleSubmit (e){

    e.preventDefault();
    if(formData.password!==formData.cpassword){
        alert("Password doesn't match")
    }
    else{
        const {name,phone,password,cpassword}=formData
        const user={
          name,
          phone,
          password,
          cpassword
        }
        console.log(user)
        try{
           setLoading(true);
           const result= await axios.post('/api/users/register',user).data
           setLoading(false);
           setSuccess(true);
           setFormData({  
            name: '',
            phone: '',
            password: '',
            cpassword: ''})
          console.log(result)
        }
        catch(error){
          setLoading(false);
          setError(true); 
          console.log(error.message);
        }
    }
    // console.log(formData);
  };

  return (
    <div>
    {loading &&<Loading/>}
    {error && <h1>{error.message}</h1>}
    {Success && <SuccessComponent message="User Registered succesfully"/> && navigate("/login")}
    <div className="flex justify-center items-center h-screen bg-gray-400 ">
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
            required
          />
        </div>
           <button
             type="submit"
             className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
           >
             Sign Up
           </button>
      </form>
    </div>
    </div>
  );
};

export default RegisterForm;

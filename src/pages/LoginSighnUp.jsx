// import React from "react";

// const LoginSighnUp = () => {
//   return (
//     <div className="loginsignup flex justify-center items-center p-[1rem] h-[100vh] bg-[#f5f7fa] font-poppins">

//       <div className="loginsignup-container bg-orange-400  p-[20px] rounded-[12px] w-[100%]  max-w-[400px]">

//         <h1 className="text-[32px] font-bold flex items-center justify-center  mb-2 bg-[linear-gradient(90deg,pink,purple_60%)] bg-clip-text text-transparent text-4xl  ">
//           Sign Up
//         </h1>

//         <div className="loginsignup-fields ">
//           <input
//             className=" block w-[100%] py-[12px] px-[16px] mb-[16px] border-[1px] border-s-black rounded-[16px] text=[16px] focus:border-[white]  outline-0"
//             type="text"
//             placeholder="your name"
//             required
//           />
//           <input
//             className=" block w-[100%] py-[12px] px-[16px] mb-[16px] border-[1px] border-s-black rounded-[16px] text=[16px] focus:border-[white]  outline-0"
//             type="email"
//             placeholder="your Email Address"
//             required
//           />
//           <input
//             className=" block w-[100%] py-[12px] px-[16px] mb-[16px] border-[1px] border-s-black rounded-[16px] text=[16px] focus:border-[white] outline-0 "
//             type="password"
//             placeholder="your Password"
//             required
//           />
//         </div>
//         <button className="outline-1 w-[100%] p-[12px] bg-[linear-gradient(90deg,pink,purple_60%)] border-0 text-white text-[16px]   font-bold cursor-pointer mb-[16px]  hover:bg-[linear-gradient(90deg,purple,pink_60%)]">Continue</button>

//         <p className="text-center">Already have an Account?</p>
//         <div className="loginsignup-agree flex items-center text-[13px] text-[#666]">
//           <input className="mr-[8px] mt-[2px] " type="checkbox" name="" id=""  required/>
//           <p className="">By continuing, i agree to the term of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSighnUp;

import React, { useState } from 'react';
// import './Css/LoginSignUp.css';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true); //* Toggle between login & signup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  let navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {

      const found = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (found) {
        setLoggedInUser(found);
        setError('');
        navigate('/shop');
      } else {
        setError('Invalid email or password');
      }
    } else {
      const userExists = users.find((user) => user.email === formData.email);
      if (userExists) {
        setError('User already exists');
      } else {
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
       
        setError('');
        setIsLogin(true); 
        setFormData({ name: '', email: '', password: '' });
      }
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setFormData({ name: '', email: '', password: '' });
    setIsLogin(true);
  };



  if (loggedInUser) {
    return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Welcome, {loggedInUser.name || loggedInUser.email}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="loginsignup loginsignup flex justify-center items-center p-[1rem] h-[100vh] bg-[#f5f7fa] font-poppins">
      <form className="loginsignup-container bg-orange-400  p-[20px] rounded-[12px] w-[100%]  max-w-[400px]" onSubmit={handleSubmit}>
        <h1 className='text-[32px] font-bold flex items-center justify-center  mb-2 bg-[linear-gradient(90deg,pink,purple_60%)] bg-clip-text text-transparent text-4xl'> {isLogin ? 'Login' : 'Sign Up'}</h1>

        <div className="loginsignup-fiels">
          {!isLogin && (
            <input className='block w-[100%] py-[12px] px-[16px] mb-[16px] border-[1px] border-s-black rounded-[16px] text=[16px] focus:border-[white]  outline-0'
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input className='block w-[100%] py-[12px] px-[16px] mb-[16px] border-[1px] border-s-black rounded-[16px] text=[16px] focus:border-[white]  outline-0'
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input className='block w-[100%] py-[12px] px-[16px] mb-[16px] border-[1px] border-s-black rounded-[16px] text=[16px] focus:border-[white]  outline-0'
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button className="outline-1 w-[100%] p-[12px] bg-[linear-gradient(90deg,pink,purple_60%)] border-0 text-white text-[16px]   font-bold cursor-pointer mb-[16px]  hover:bg-[linear-gradient(90deg,purple,pink_60%)]" type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p className="text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>

        <div className="loginsignup-agree flex items-center text-[13px] text-[#666]">
          <input  className="mr-[8px] mt-[2px] " type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignUp;


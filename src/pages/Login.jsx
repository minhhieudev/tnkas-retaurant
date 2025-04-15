import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaFacebook, FaInstagram } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberPassword = () => {
    setRememberPassword(!rememberPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate the form and authenticate the user here
    // For now, we'll just navigate to the Home page
    navigate('/menu');
  };

  return (
    <div className="flex h-screen">
      {/* Left side with background image */}
      <div className="w-1/2 relative overflow-hidden rounded-r-full">
        <img 
          src={require('../Images/icon/Frame 79.png')} 
          alt="Food" 
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right side with login form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-10 text-center">Đăng nhập</h1>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberPassword}
                  onChange={handleRememberPassword}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Ghi nhớ mật khẩu
                </label>
              </div>
              <div>
                <Link to="/forgot-password" className="text-sm text-purple-700 hover:underline">
                  Quên mật khẩu ?
                </Link>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700"
            >
              Đăng nhập
            </button>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">HOẶC</span>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <span className="text-gray-600">Bạn chưa có tài khoản ? </span>
            <Link to="/register" className="text-purple-700 hover:underline">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex h-screen">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img 
          src={require('../Images/icon/Yudofu - Japanese Boiled Tofu Recipe.png')} 
          alt="Background" 
          className="object-cover h-full w-full"
        />
      </div>

      {/* Back button */}
      <div className="absolute top-6 left-6">
        <Link to="/" className="block">
          <IoArrowBack className="text-white text-3xl hover:text-gray-200" />
        </Link>
      </div>

      {/* Registration form container - centered on the screen */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-gray-300 bg-opacity-50 backdrop-blur-sm border-2 border-white rounded-lg p-8 w-[450px] mx-auto">
          <h1 className='font-bold text-white text-center text-3xl'>Đăng ký</h1>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Tên</label>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                className="w-full p-3 rounded-md border border-gray-300 bg-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Số điện thoại</label>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-3 rounded-md border border-gray-300 bg-white"
              />
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 mb-1">Mật khẩu</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                className="w-full p-3 rounded-md border border-gray-300 bg-white"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 mb-1">Nhập lại</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="w-full p-3 rounded-md border border-gray-300 bg-white"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-white text-black font-medium rounded-md hover:bg-gray-100 mt-4"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register; 
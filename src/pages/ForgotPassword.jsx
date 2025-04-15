import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const ForgotPassword = () => {
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

      {/* Forgot Password form container - centered on the screen */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-gray-300 bg-opacity-50 backdrop-blur-sm border-2 border-white rounded-lg p-8 w-[450px] mx-auto">
          <h1 className='font-bold text-white text-center text-3xl'>Quên Mật Khẩu</h1>
          <p className="text-white text-center mb-4">
            Điền số điện thoại đã đăng ký và xác nhận, sau đó đợi mã OTP gửi về tin nhắn của số điện thoại đã đăng ký.
          </p>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Số điện thoại</label>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-3 rounded-md border border-gray-300 bg-white"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-white text-black font-medium rounded-md hover:bg-gray-100 mt-4"
            >
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
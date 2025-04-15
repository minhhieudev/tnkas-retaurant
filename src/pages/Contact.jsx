import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
       <div className="left-4">
            <Link to="/home" className="text-black z-10">
              <IoArrowBack size={30} />
            </Link>
          </div>
      {/* Header with Back Button and Title */}
      <div className="bg-purple-600 py-4 relative">
        <div className="container mx-auto flex items-center">
          <h1 className="text-3xl font-bold text-white text-center w-full">LIÊN HỆ</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Column - Restaurant Info */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold uppercase mb-4">RESTAURANT TNKAS TUY HÒA</h2>

          <div className="space-y-3">
            <p>Mở cửa: 8h00 - 23h00</p>
            <p>Hotline: 0789460982</p>
            <p>Địa chỉ: 63 Trường Trịnh, phường 7, TP Tuy Hòa, Tỉnh Phú Yên</p>
            <p>Website: restaurantcafebar.com</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 space-y-2">
            <Link to="#" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded">
                <FaFacebook size={28} />
              </div>
            </Link>
            <Link to="#" className="flex items-center space-x-2">
              <div className="bg-black text-white p-2 rounded">
                <FaTiktok size={28} />
              </div>
            </Link>
            <Link to="#" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 text-white p-2 rounded">
                <FaInstagram size={28} />
              </div>
            </Link>
            <Link to="#" className="flex items-center space-x-2">
              <div className="bg-blue-500 text-white p-2 rounded">
                <SiZalo size={28} />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2 p-6">
          <form className="space-y-4">
            <div className='flex justify-between'>
              <div className='w-[50%]'>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
              <div className='w-[47%]'>
                <input
                  type="tel"
                  placeholder="Điện thoại"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
            </div>

            <div className='flex justify-between'>
              <div className='w-[50%]'>
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
              <div className='w-[47%]'>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Tiêu đề"
                className="w-full p-2 bg-gray-200 rounded"
              />
            </div>
            <div>
              <textarea
                placeholder="Nội dung"
                className="w-full p-2 bg-gray-200 rounded h-32"
              ></textarea>
            </div>
            <div className="flex space-x-2">
              <button type="submit" className="bg-yellow-600 text-white py-2 px-8 rounded">
                Gửi
              </button>
              <button type="reset" className="bg-gray-500 text-white py-2 px-4 rounded">
                Nhập lại
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer with Map and Info */}
      <div className="bg-gray-200 py-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Restaurant Information */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-bold uppercase mb-4">RESTAURANT TNKAS TUY HÒA</h2>

              <div className="space-y-3">
                <Link to="#" className="flex items-center space-x-2">
                  <FaFacebook className="text-blue-600" />
                  <span>Facebook</span>
                </Link>
                <Link to="#" className="flex items-center space-x-2">
                  <FaTiktok />
                  <span>Tiktok</span>
                </Link>
                <Link to="#" className="flex items-center space-x-2">
                  <FaInstagram className="text-pink-500" />
                  <span>Instagram</span>
                </Link>
                <Link to="#" className="flex items-center space-x-2">
                  <SiZalo className="text-blue-500" />
                  <span>Zalo</span>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="w-80 h-80 text-center p-4">
              <div className="border-2 border-gray-300 rounded overflow-hidden">
                <img
                  src={require('../Images/bản đồ.png')}
                  alt="Map"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
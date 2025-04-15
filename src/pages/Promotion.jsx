import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

const Promotion = () => {
  return (
    <div className="min-h-screen bg-gray-100">
       {/* Back button */}
       <div className="ml-5">
        <Link to="/" className="block">
          <IoArrowBack className="text-black text-3xl" />
        </Link>
      </div>
      {/* Header with back button */}
      <div className='w-full px-6 mt-4' >
        <img
          src={require("../Images/khuyến mãi/image.png")}
          alt="Promotion 122"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Promotion cards grid */}
      <div className="container mx-auto mt-8 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className=" rounded-lg overflow-hidden relative pb-16">
            <img
              src={require("../Images/khuyến mãi/tải xuống.jpg")}
              alt="Promotion 1"
              className="w-full h-60 object-cover"
            />
            <div className="absolute -mt-10 left-0 right-0 bg-white p-4 w-[65%] mx-auto shadow-md">
              <h3 className="font-bold text-base">Khai trương hoành tráng-ưu đãi ngập tràng tại TNKAS</h3>
              <p className="text-xs text-gray-600">Chúa minh chi nhánh phường 9</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg overflow-hidden relative pb-16">
            <img
              src={require("../Images/khuyến mãi/tải xuống (7).jpg")}
              alt="Promotion 2"
              className="w-full h-60 object-cover"
            />
            <div className="absolute -mt-10 left-0 right-0 bg-white p-4 w-[65%] mx-auto shadow-md">
              <h3 className="font-bold text-base">Hành trình ẩm thực TNKAS</h3>
              <p className="text-xs text-gray-600">Ngày 2.8 này, TNKAS đã chinh thức mở cửa</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg overflow-hidden relative pb-16">
            <img
              src={require("../Images/khuyến mãi/Thuc-don-don-Tet-tron-ven-voi-nhung-mon-ngon-de-lam-5.jpg")}
              alt="Promotion 3"
              className="w-full h-60 object-cover"
            />
            <div className="absolute top-0 right-0 bg-black px-3 py-1">
              <span className="text-yellow-500 font-bold">SALE 10%</span>
            </div>
            <div className="absolute -mt-10 left-0 right-0 bg-white p-4 w-[65%] mx-auto shadow-md">
              <h3 className="font-bold text-base">TNKAS ưu đãi mùa hè</h3>
              <p className="text-xs text-gray-600">Các món đặc sản bên chạy của quán sẽ được giảm 10%</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-lg overflow-hidden relative pb-16">
            <img
              src={require("../Images/khuyến mãi/tải xuống (2).jpg")}
              alt="Promotion 4"
              className="w-full h-60 object-cover"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 text-white px-3 py-1 font-bold">
              CHÀO HÈ RỰC RỠ
            </div>
            <div className="absolute top-8 left-0 bg-yellow-500 text-white px-3 py-1 font-bold">
              ƯU ĐÃI BẤT NGỜ
            </div>
            <div className="absolute -mt-10 left-0 right-0 bg-white p-4 w-[65%] mx-auto shadow-md">
              <h3 className="font-bold text-base">Cùng TNKAS đón hè rộn ràng, tận hưởng ưu đãi bất tận!</h3>
              <p className="text-xs text-gray-600">Hè đến rồi, hãy cùng TNKAS khám phá những trải nghiệm tuyệt vời có đầm chim trong những ưu đãi</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="rounded-lg overflow-hidden relative pb-16">
            <img
              src={require("../Images/khuyến mãi/tải xuống (6).jpg")}
              alt="Promotion 5"
              className="w-full h-60 object-cover"
            />
            <div className="absolute -mt-10 left-0 right-0 bg-white p-4 w-[65%] mx-auto shadow-md">
              <h3 className="font-bold text-base">Bùng nổ ưu đãi cùng TNKAS - Mừng sinh nhật 1 tuổi</h3>
              <p className="text-xs text-gray-600">Nhân dịp sinh nhật 1 tuổi, TNKAS mang đến hàng loạt ưu đãi...</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className=" rounded-lg overflow-hidden relative pb-16">
            <img
              src={require("../Images/khuyến mãi/tải xuống (8).jpg")}
              alt="Promotion 6"
              className="w-full h-60 object-cover"
            />
            <div className="absolute -mt-10 left-0 right-0 bg-white p-4 w-[65%] mx-auto shadow-md">
              <h3 className="font-bold text-base">Tặng một nửa thế giới những bông hoa rực rỡ</h3>
              <p className="text-xs text-gray-600">Nhân ngày quốc tế phụ nữ, TNKAS tặng ưu đãi hấp dẫn</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Promotion; 
import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background and Title */}
      <div className="relative">
        {/* Background Image */}
        <div className="w-full h-[400px] relative">
          <img
            src={require('../Images/ảnh giới thiệu/backgroud(gthieu).jpg')}
            alt="Food background"
            className="w-full h-full object-cover"
          />

          {/* Back button */}
          <div className="absolute top-6 left-6 z-10">
            <Link to="/home" className="block">
              <IoArrowBack className="text-white text-3xl hover:text-gray-200" />
            </Link>
          </div>

          {/* Centered Title */}
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-black mb-10 uppercase">Giới thiệu</h1>
            <img
              src={require('../Images/icon/logo-tnkas.png')}
              alt="TNKAS Logo"
              className="w-40"
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#8B4513] mb-8">Về chúng tôi</h2>

          <div className="px-4 md:px-20">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Ẩm thực Việt Nam không chỉ nổi tiếng với các món ăn đường phố bình dân mà còn có những trải nghiệm cao
              cấp, mang đến sự tinh tế trong hương vị và nghệ thuật trình bày. Các món ăn cao cấp Việt Nam thường được
              chế biến từ nguyên liệu tuyển chọn, kỹ thuật nấu ăn cầu kỳ và sự sáng tạo trong cách phục vụ.
            </p>
          </div>
        </div>
      </div>

      {/* Vietnamese Cuisine Section */}
      <div className="bg-gray-200 py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#8B4513] mb-10">ẨM THỰC</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
            {/* Phở Bò */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={require('../Images/ảnh giới thiệu/phở bò(giới thiệu).jpg')}
                  alt="Phở Bò"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-lg mb-2">Phở bò</h3>
                <p className="text-sm">
                  Phở bò là một trong những món ăn đặc trưng của ẩm thực Việt Nam. Với
                  hương thơm đặc trưng, sự kết hợp hài hòa giữa nước dùng, bánh phở mềm dai
                  và thịt bò tươi ngon, phở bò đã trở thành biểu tượng văn hóa ẩm thực
                  Việt Nam.
                </p>
              </div>
            </div>

            {/* Bún Bò Huế */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={require('../Images/ảnh giới thiệu/bún bò huế(gthieu).jpg')}
                  alt="Bún Bò Huế"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-lg mb-2">Bún bò Huế</h3>
                <p className="text-sm">
                  Bún bò Huế là một trong những món ăn đặc sản của miền Trung Việt Nam,
                  nổi bật với hương vị đậm đà, cay nồng đặc trưng. Không chỉ là một
                  món ăn phổ biến trong nước, bún bò Huế còn được thực khách quốc tế
                  đánh giá cao, góp phần làm rạng danh ẩm thực Việt trên thế giới.
                </p>
              </div>
            </div>

            {/* Bánh Xèo */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-lg mb-2">Bánh xèo</h3>
                <p className="text-sm">
                  Bánh xèo là một món ăn truyền thống của Việt Nam, được yêu thích
                  nhờ lớp vỏ giòn rụm, nhân đậm đà và hương vị hài hòa khi kết hợp cùng
                  rau sống và nước chấm chua ngọt. Món ăn này không chỉ phổ biến trong
                  nước mà còn được du khách quốc tế biết đến như một biểu tượng ẩm thực
                  Việt Nam.
                </p>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={require('../Images/ảnh giới thiệu/bánh xèo(gthieu).jpg')}
                  alt="Bánh Xèo"
                  className="w-full h-64 object-cover"
                />
              </div>

            </div>

            {/* Bò Kho */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-lg mb-2">Bò kho</h3>
                <p className="text-sm">
                  Bò kho là một món ăn truyền thống của Việt Nam, nổi bật với hương vị
                  đậm đà, thơm lừng từ các loại gia vị như quế, hồi, sả, gừng và ngũ vị
                  hương. Món ăn này có thể được dùng với bánh mì, hủ tiếu, bún hoặc cơm,
                  mang đến trải nghiệm ẩm thực hấp dẫn và giàu dinh dưỡng.
                </p>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={require('../Images/ảnh giới thiệu/bò kho(gthieu).jpg')}
                  alt="Bò Kho"
                  className="w-full h-64 object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
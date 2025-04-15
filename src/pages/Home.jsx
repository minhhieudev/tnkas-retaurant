import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { BsChevronDown, BsCheckCircleFill } from 'react-icons/bs';

const Home = () => {
    const [showReservationModal, setShowReservationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState('12');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const reservationModalRef = useRef(null);
    const successModalRef = useRef(null);

    // Close modals when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (reservationModalRef.current && !reservationModalRef.current.contains(event.target)) {
                setShowReservationModal(false);
            }
            if (successModalRef.current && !successModalRef.current.contains(event.target)) {
                setShowSuccessModal(false);
            }
        };

        if (showReservationModal || showSuccessModal) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showReservationModal, showSuccessModal]);

    const toggleModal = () => {
        setShowReservationModal(!showReservationModal);
    };

    const handlePeopleSelection = (value) => {
        setSelectedPeople(value);
        setShowDropdown(false);
    };

    const handleReservationSubmit = () => {
        setShowReservationModal(false);
        setShowSuccessModal(true);
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="min-h-screen" style={{ backgroundImage: `url(${require("../Images/bg-home.png")})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src={require("../Images/icon/logo-tnkas.png")}
                            alt="TNKAS Logo"
                            className="h-16"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-green-600 font-medium uppercase">TRANG CHỦ</Link>
                        <Link to="/about" className="text-black font-medium uppercase">GIỚI THIỆU</Link>
                        <Link to="/menu" className="text-black font-medium uppercase">THỰC ĐƠN</Link>
                        <Link to="/promotions" className="text-black font-medium uppercase">KHUYẾN MÃI</Link>
                        <Link to="/contact" className="text-black font-medium uppercase">LIÊN HỆ</Link>
                    </div>

                    {/* Shopping Cart and Login Button */}
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-black">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </Link>
                        <Link to="/login" className="bg-white text-black border-2 border-black rounded-full px-6 py-1 font-bold">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative">
                <div className="border-2 border-black mx-auto my-8 max-w-4xl">
                    <div className=" p-8 text-center">
                        <h1 className="text-4xl font-bold italic mb-6">Ẩm thực Việt Nam</h1>
                        <p className="text-xl mb-8">
                            Không có gì tuyệt vời bằng thưởng thức ẩm thực Việt Nam
                            <br />cùng với gia đình và người thân.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link to="/menu" className="bg-red-500 text-white rounded-md px-8 py-3 font-semibold">
                                Đặt món
                            </Link>
                            <button onClick={toggleModal} className="bg-red-500 text-white rounded-md px-8 py-3 font-semibold">
                                Đặt bàn
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom bar section exactly as in image */}
            <div className="fixed bottom-0 left-0 right-0">
                {/* Top info bar with time and phone */}
                {/* Social media and menu bar */}
                <div className="flex justify-between ">

                    <div>
                        <div className=" flex flex-col  justify-between items-center px-6 py-2 ">
                            <div className="flex items-center">
                                <img src={require("../Images/icon/Clock.png")} alt="Clock" className="w-5 h-5 mr-2" />
                                <span className="text-black">10:00 - 18:00</span>
                            </div>
                            <div className="flex items-center">
                                <img src={require("../Images/icon/Vector.png")} alt="Phone" className="w-5 h-5 mr-2" />
                                <span className="text-red-500 font-bold">1900 63 69 36</span>
                            </div>
                        </div>
                        {/* Social media icons */}
                        <div className="flex bg-gray-200 items-center p-2 gap-4">
                            <Link to="#" className="bg-black rounded-full p-2 flex items-center justify-center">
                                <FaFacebook className="text-white" size={20} />
                            </Link>
                            <Link to="#" className="">
                                <img src={require("../Images/icon/intar.png")} alt="Instagram" className="w-8 h-8" />
                            </Link>
                            <Link to="#language" className="">
                                <img src={require("../Images/icon/vn.png")} alt="Vietnam Flag" className="w-8 h-8" />
                            </Link>
                        </div>
                    </div>

                    {/* Menu section */}
                    <div className="bg-white w-[70%] h-[150px] flex flex-col rounded-lg">
                        <div className="py-1 px-4 text-center font-bold text-xl">
                            THỰC ĐƠN
                        </div>
                        <div className="flex justify-around mt-10 rounded-md">
                            <Link to="/menu/main-dishes" className="bg-[#5E8BB3] rounded-md text-white text-center py-2 px-6 text-sm">
                                MÓN NỒI BÁT
                            </Link>
                            <Link to="/menu/rice-dishes" className="bg-[#5E8BB3] rounded-md  text-white text-center py-2 px-6 text-sm border-l border-blue-400">
                                CƠM CÁC LOẠI
                            </Link>
                            <Link to="/menu/drinks" className="bg-[#5E8BB3] rounded-md text-white text-center py-2 px-6 text-sm border-l border-blue-400">
                                MÓN NƯỚC
                            </Link>
                            <Link to="/menu/desserts" className="bg-[#5E8BB3] rounded-md text-white text-center py-2 px-6 text-sm border-l border-blue-400">
                                MÚC - SỒ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reservation Modal */}
            {showReservationModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div ref={reservationModalRef} className="bg-white w-full max-w-lg mx-4 rounded-lg overflow-hidden relative">
                        {/* Close button */}
                        <button 
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>
                        
                        <div className="border-b border-gray-200 py-4">
                            <h2 className="text-center font-bold text-[#A88A26] text-xl">Thông Tin Đặt Bàn Online</h2>
                            <p className="text-center text-sm mt-1">Vui lòng đặt bàn trước giờ dùng bữa 1 giờ.</p>
                        </div>
                        
                        <form className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-2">Họ tên</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-gray-200 rounded-md py-2 px-3"
                                        defaultValue="Lê Công Phương"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block font-medium mb-2">Giờ đặt</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            className="w-full bg-gray-200 rounded-md py-2 px-3"
                                            defaultValue="11:30"
                                            readOnly
                                        />
                                        <span className="absolute right-3 top-2.5 text-gray-600">
                                            <IoCalendarOutline className="text-xl" />
                                        </span>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block font-medium mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-gray-200 rounded-md py-2 px-3"
                                        defaultValue="congphuong@gmai.com"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block font-medium mb-2">Ngày đặt</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            className="w-full bg-gray-200 rounded-md py-2 px-3"
                                            defaultValue="02/11/2025"
                                            readOnly
                                        />
                                        <span className="absolute right-3 top-2.5 text-gray-600">
                                            <IoCalendarOutline className="text-xl" />
                                        </span>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block font-medium mb-2">Số điện thoại</label>
                                    <input 
                                        type="tel" 
                                        className="w-full bg-gray-200 rounded-md py-2 px-3"
                                        defaultValue="0364954547"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block font-medium mb-2">Số người</label>
                                    <div className="relative">
                                        <div 
                                            className="w-full bg-gray-200 rounded-md py-2 px-3 flex justify-between items-center cursor-pointer"
                                            onClick={() => setShowDropdown(!showDropdown)}
                                        >
                                            <span>{selectedPeople}</span>
                                            <BsChevronDown className="text-gray-600" />
                                        </div>
                                        
                                        {showDropdown && (
                                            <div className="absolute z-10 bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                                                {[2, 4, 6, 8, 10, 12, 14, 16].map((num) => (
                                                    <div 
                                                        key={num} 
                                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => handlePeopleSelection(num.toString())}
                                                    >
                                                        {num}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <label className="block font-medium mb-2">Yêu cầu dành cho quán</label>
                                <textarea 
                                    className="w-full bg-gray-200 rounded-md py-2 px-3 h-24 resize-none"
                                ></textarea>
                            </div>
                            
                            <div className="mt-6 flex justify-center">
                                <button 
                                    type="button" 
                                    className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-16 rounded-md transition duration-200"
                                    onClick={handleReservationSubmit}
                                >
                                    Đặt bàn ngay
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div ref={successModalRef} className="bg-white w-full max-w-md mx-4 rounded-lg overflow-hidden">
                        <div className="p-6 flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-[#004851] flex items-center justify-center mb-4">
                                <BsCheckCircleFill className="text-white text-5xl" />
                            </div>
                            
                            <h2 className="text-xl font-bold mb-2">Đặt bàn thành công!</h2>
                            
                            <p className="text-center mb-6">
                                Chúng tôi rất mong được đón tiếp và mang đến cho quý khách một 
                                trải nghiệm ẩm thực tuyệt vời. Hẹn gặp lại sớm!
                            </p>
                            
                            <button 
                                className="w-full bg-[#4A686C] text-white font-medium py-3 rounded-md hover:bg-[#3A585C] transition duration-200"
                                onClick={handleCloseSuccessModal}
                            >
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home; 
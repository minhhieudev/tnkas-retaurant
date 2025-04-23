import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaShoppingCart, FaPhone, FaTrash, FaTicketAlt } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';

const Menu = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Bún bò', price: 30000, quantity: 1, image: 'bún bò(1).jpg' },
        { id: 2, name: 'Cơm chiên dương châu', price: 35000, quantity: 2, image: 'cơm chiên dương châu(2).jpg' },
        { id: 3, name: 'Mực lá nướng', price: 255000, quantity: 2, image: 'mực lá nướng(4).jpg' },
        { id: 4, name: 'Gỏi bò bóp thấu', price: 125000, quantity: 1, image: 'gỏi bò(6).jpg' },
        { id: 5, name: 'Gà lá chanh', price: 320000, quantity: 2, image: 'gà lá chanh(7).jpg' },
    ]);

    const [showCartModal, setShowCartModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showDiscountModal, setShowDiscountModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [currentOrderItem, setCurrentOrderItem] = useState(null);
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [orderOptions, setOrderOptions] = useState({
        size: 'S',
        extras: {
            'Thịt bò': true,
            'Bánh tráng mỏng': true
        },
        notes: {
            'Bình thường': true,
            'Không dầu ớt': false
        }
    });
    const [discountCode, setDiscountCode] = useState('');
    const navigate = useNavigate();

    const cartModalRef = useRef(null);
    const discountModalRef = useRef(null);
    const orderModalRef = useRef(null);

    // Close modals when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartModalRef.current && !cartModalRef.current.contains(event.target)) {
                setShowCartModal(false);
            }
            if (discountModalRef.current && !discountModalRef.current.contains(event.target)) {
                setShowDiscountModal(false);
            }
            if (orderModalRef.current && !orderModalRef.current.contains(event.target)) {
                setShowOrderModal(false);
            }
        };

        if (showCartModal || showDiscountModal || showOrderModal) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCartModal, showDiscountModal, showOrderModal]);

    const [featuredItems, setFeaturedItems] = useState([
        { id: 1, name: 'Bò kho', price: 35000, image: 'bò kho(1).jpg' },
        { id: 2, name: 'Bánh xèo', price: 10000, perUnit: '/1 cái', image: 'bánh xèo(1).jpg' },
        { id: 3, name: 'Cá bống hấp', price: 280000, image: 'cá bống hấp(5).jpg' },
        { id: 4, name: 'Bún bò', price: 30000, image: 'bún bò(1).jpg' },
        { id: 5, name: 'Phở bò', price: 30000, image: 'phở bò(1).jpg' },
        { id: 6, name: 'Gà lá chanh', price: 320000, image: 'gà lá chanh(7).jpg' }
    ]);

    const [menuCategories] = useState([
        'Món được yêu thích',
        'Cơm các loại',
        'Món nước',
        'Mực - Sò',
        'Cá các loại',
        'Gỏi các loại',
        'Gà các loại',
        'Chè các loại'
    ]);

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ';
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateSubtotal = () => {
        return calculateTotal();
    };

    const deliveryFee = 25000;

    const calculateGrandTotal = () => {
        return calculateTotal() + deliveryFee;
    };

    const handleShowOrderModal = (item) => {
        setCurrentOrderItem(item);
        setOrderQuantity(1);
        setOrderOptions({
            size: 'S',
            extras: {
                'Thịt bò': false,
                'Bánh tráng mỏng': false
            },
            notes: {
                'Bình thường': true,
                'Không dầu ớt': false
            }
        });
        setShowOrderModal(true);
    };

    const handleCloseOrderModal = () => {
        setShowOrderModal(false);
        setCurrentOrderItem(null);
        setOrderQuantity(1);
    };

    const handleAddToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const handleAddToCartFromModal = () => {
        if (currentOrderItem) {
            // Create a customized item with selected options
            const customizedItem = {
                ...currentOrderItem,
                quantity: orderQuantity,
                customizations: { ...orderOptions }
            };
            
            const existingItemIndex = cart.findIndex(cartItem => cartItem.id === currentOrderItem.id);
            
            if (existingItemIndex >= 0) {
                // Update existing item
                const updatedCart = [...cart];
                updatedCart[existingItemIndex] = customizedItem;
                setCart(updatedCart);
            } else {
                // Add new item
                setCart([...cart, customizedItem]);
            }
            
            setShowOrderModal(false);
            setCurrentOrderItem(null);
        }
    };

    const handleChangeQuantity = (id, change) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(0, item.quantity + change) }
                : item
        ).filter(item => item.quantity > 0));
    };

    const handleOrderQuantityChange = (change) => {
        setOrderQuantity(Math.max(1, orderQuantity + change));
    };

    const handleSizeChange = (size) => {
        setOrderOptions({
            ...orderOptions,
            size
        });
    };

    const handleExtraToggle = (extra) => {
        setOrderOptions({
            ...orderOptions,
            extras: {
                ...orderOptions.extras,
                [extra]: !orderOptions.extras[extra]
            }
        });
    };

    const handleNoteToggle = (note) => {
        setOrderOptions({
            ...orderOptions,
            notes: {
                ...orderOptions.notes,
                [note]: !orderOptions.notes[note]
            }
        });
    };

    const toggleCartModal = () => {
        setShowCartModal(!showCartModal);
        setShowDiscountModal(false);
    };

    const toggleDiscountModal = () => {
        setShowDiscountModal(!showDiscountModal);
    };

    const handleApplyDiscount = () => {
        // Logic to handle discount code application
        alert(`Áp dụng mã giảm giá: ${discountCode}`);
        setShowDiscountModal(false);
        setDiscountCode('');
    };

    const handleRemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        setShowCartModal(false);
        setShowSuccessModal(true);
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-gray-300 text-white">
                <div className="container mx-auto px-4 py-2 flex items-center">
                    <div className="flex items-center w-[30%]">
                        <img
                            src={require('../Images/icon/logo-tnkas.png')}
                            alt="TNKAS Logo"
                            className="h-16"
                        />
                    </div>
                    <div className="w-[70%] text-center">
                        <nav className="hidden md:flex space-x-8 text-black font-bold text-2xl">
                            <Link to="/" className="uppercase font-medium">Trang chủ</Link>
                            <Link to="/about" className="uppercase font-medium">Giới thiệu</Link>
                            <Link to="/menu" className="uppercase font-medium text-green-500">Thực đơn</Link>
                            <Link to="/promotions" className="uppercase font-medium">Khuyến mãi</Link>
                            <Link to="/contact" className="uppercase font-medium">Liên hệ</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 mt-10">
                {/* Sidebar - Menu Categories */}
                <div className="w-64 bg-gray-200 shadow-md">
                    <ul>
                        {menuCategories.map((category, index) => (
                            <li key={index} className={`border-b rounded-r-md border-gray-300 ${index === 0 ? 'bg-orange-500' : ''}`}>
                                <Link to="#" className=" px-4 py-4 hover:bg-gray-300 transition flex justify-between items-center">
                                    {category}
                                    {index === 0 && <span className="text-gray-600">&gt;</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Center Content - Featured Items */}
                <div className="flex-1 px-4">
                    <div className="bg-orange-500 p-4 mb-4 rounded-md">
                        <h2 className="text-xl font-bold uppercase">Món được yêu thích</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredItems.map((item) => (
                            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img
                                    src={require(`../Images/food menu/${item.image}`)}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 bg-yellow-100">
                                    <div className="flex justify-between items-center mt-2">
                                        <h3 className="font-medium">{item.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="number"
                                                className="w-10 h-8 border border-gray-300 text-center"
                                                value="0"
                                                readOnly
                                            />
                                            <button className="h-8 w-8 bg-white border border-gray-300 flex items-center justify-center text-gray-600">
                                                <FaMinus className="text-xs" />
                                            </button>
                                            <button className="h-8 w-8 bg-white border border-gray-300 flex items-center justify-center text-gray-600">
                                                <FaPlus className="text-xs" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="font-medium text-red-600">
                                            {formatPrice(item.price)}{item.perUnit || ''}
                                        </div>
                                        <button
                                            onClick={() => handleShowOrderModal(item)}
                                            className="mt-2 w-[40%] py-1 px-4 bg-orange-500 text-black text-sm font-medium rounded-lg hover:bg-orange-500 transition border border-orange-500"
                                        >
                                            Đặt món
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar - Cart */}
                <div className="w-80 bg-gray-200 shadow-md flex flex-col h-[340px]">
                    {/* Cart Header */}
                    <div className="bg-gray-300 p-3 flex items-center justify-center">
                        <button onClick={toggleCartModal} className="flex items-center">
                            <FaShoppingCart className="mr-2 text-gray-600" />
                            <h2 className="font-medium text-lg">Giỏ hàng</h2>
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 ">
                        {cart.map((item, index) => (
                            <div key={index} className="flex border-b border-gray-300 py-2 items-center">
                                <div className="w-10 flex items-center justify-center">
                                    <FaShoppingCart className="text-gray-400" />
                                </div>
                                <div>|</div>
                                <div className="flex-1 text-right pr-2 font-medium text-sm">
                                    {item.name || ''}
                                </div>
                                <div>|</div>
                                <div className="w-16 flex items-center justify-center border-l border-r border-gray-300">
                                    <div className="flex items-center border border-gray-400 bg-white">
                                        <button
                                            className="px-1 text-xs"
                                            onClick={() => handleChangeQuantity(item.id, -1)}
                                            disabled={!item.name}
                                        >
                                            -
                                        </button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            className="px-1 text-xs text-green-600"
                                            onClick={() => handleChangeQuantity(item.id, 1)}
                                            disabled={!item.name}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="w-24 flex items-center pl-2">
                                    Số lượng {item.quantity}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-400 p-4 bg-gray-300">
                        <div className="flex justify-between font-bold text-lg">
                            <span>Thành tiền:</span>
                            <span>{formatPrice(calculateTotal())}</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Phone Button */}
            <a href="tel:+123456789" className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors">
                <FaPhone size={24} />
            </a>

            {/* Cart Modal */}
            {showCartModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div ref={cartModalRef} className="bg-white w-full max-w-3xl mx-4 rounded-lg  relative max-h-[95vh] overflow-auto">
                        {/* Close button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                            onClick={toggleCartModal}
                        >
                            ✕
                        </button>

                        <div className="p-4">
                            <h2 className="text-2xl font-bold border-b pb-4">Giỏ hàng</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full mt-4">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="py-2 px-4 text-left">Món ăn</th>
                                            <th className="py-2 px-4 text-center">Số lượng</th>
                                            <th className="py-2 px-4 text-right">Đơn giá</th>
                                            <th className="py-2 px-4 text-right">Thành tiền</th>
                                            <th className="py-2 px-4 text-center">Xóa món</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id} className="border-b">
                                                <td className="py-2 px-4 flex items-center">
                                                    <img
                                                        src={require(`../Images/food menu/${item.image}`)}
                                                        alt={item.name}
                                                        className="w-16 h-16 object-cover rounded-full mr-3"
                                                    />
                                                    <span className="font-medium">{item.name}</span>
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex items-center justify-center">
                                                        <button
                                                            onClick={() => handleChangeQuantity(item.id, -1)}
                                                            className="bg-gray-200 px-2 py-1 rounded-l"
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="w-10 text-center border-t border-b border-gray-200 py-1"
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <button
                                                            onClick={() => handleChangeQuantity(item.id, 1)}
                                                            className="bg-gray-200 px-2 py-1 rounded-r"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4 text-right">
                                                    {formatPrice(item.price)}
                                                </td>
                                                <td className="py-4 px-4 text-right">
                                                    {formatPrice(item.price * item.quantity)}
                                                </td>
                                                <td className="py-4 px-4 text-center">
                                                    <button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 border-t pt-4">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="font-medium">Tạm tính</div>
                                    <div className="font-medium">{formatPrice(calculateSubtotal())}</div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="font-medium">Phí giao hàng</div>
                                    <div className="font-medium">{formatPrice(deliveryFee)}</div>
                                </div>
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <div>Tổng cộng</div>
                                    <div>{formatPrice(calculateGrandTotal())}</div>
                                </div>
                            </div>
                            <div className="mt-4 mb-2">
                                <div className="text-center">
                                    <button
                                        className="text-amber-600 hover:text-amber-800 font-medium flex items-center justify-center mx-auto"
                                    >
                                        <FaTicketAlt className="mr-2" /> Nhập mã giảm giá
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-16 rounded-md transition duration-200"
                                    onClick={handleCheckout}
                                >
                                    Tiến hành thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-md mx-4 rounded-lg overflow-hidden">
                        <div className="p-6 flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-[#004851] flex items-center justify-center mb-4">
                                <BsCheckCircleFill className="text-white text-5xl" />
                            </div>

                            <h2 className="text-xl font-bold mb-2">Đặt món thành công!</h2>

                            <p className="text-center mb-6">
                                Chúng tôi rất mong được đón tiếp và mang đến cho quý khách một
                                trải nghiệm ẩm thực tuyệt vời !
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

            {/* Order Modal */}
            {showOrderModal && currentOrderItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div ref={orderModalRef} className="bg-white w-full max-w-md mx-4 rounded-lg relative">
                        {/* Close button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                            onClick={handleCloseOrderModal}
                        >
                            ✕
                        </button>

                        <div className="p-5">
                            <h2 className="text-xl font-bold text-center text-teal-800 border-b pb-2">Đặt món</h2>

                            <div className="flex items-center py-3 border-b">
                                <img
                                    src={require(`../Images/food menu/${currentOrderItem.image}`)}
                                    alt={currentOrderItem.name}
                                    className="w-14 h-14 object-cover rounded-full mr-3"
                                />
                                <div className="flex-1">
                                    <h3 className="font-medium">{currentOrderItem.name}</h3>
                                    <p className="text-sm text-gray-600">
                                        Thịt bò, chuối chát, củ rủi hành tây, rau thơm, dầu phộng
                                    </p>
                                </div>
                                
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleOrderQuantityChange(-1)}
                                        className="h-8 w-8 bg-white border border-gray-300 flex items-center justify-center text-gray-600 rounded-l hover:bg-gray-100"
                                    >
                                        <FaMinus className="text-xs" />
                                    </button>
                                    <div className="w-8 h-8 flex items-center justify-center border-t border-b border-gray-300">
                                        {orderQuantity}
                                    </div>
                                    <button
                                        onClick={() => handleOrderQuantityChange(1)}
                                        className="h-8 w-8 bg-white border border-gray-300 flex items-center justify-center text-green-600 rounded-r hover:bg-gray-100"
                                    >
                                        <FaPlus className="text-xs" />
                                    </button>
                                </div>
                            </div>

                            <div className="py-3 border-b">
                                <p className="font-medium mb-2">Vui lòng chọn tùy chọn</p>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id="size-s" 
                                            className="w-5 h-5 mr-3" 
                                            checked={orderOptions.size === 'S'}
                                            onChange={() => handleSizeChange('S')}
                                        />
                                        <label htmlFor="size-s">Size S</label>
                                    </div>
                                    <div className="font-medium">125.000</div>
                                    <div className="w-5 h-5 border border-green-600 rounded-sm flex items-center justify-center">
                                        {orderOptions.size === 'S' && <div className="w-3 h-3 bg-green-600 rounded-sm"></div>}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id="size-l" 
                                            className="w-5 h-5 mr-3" 
                                            checked={orderOptions.size === 'L'}
                                            onChange={() => handleSizeChange('L')}
                                        />
                                        <label htmlFor="size-l">Size L</label>
                                    </div>
                                    <div className="font-medium">150.000</div>
                                    <div className="w-5 h-5 border border-green-600 rounded-sm flex items-center justify-center">
                                        {orderOptions.size === 'L' && <div className="w-3 h-3 bg-green-600 rounded-sm"></div>}
                                    </div>
                                </div>
                            </div>

                            <div className="py-3 border-b">
                                <p className="font-medium mb-2">Thêm</p>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id="extra-beef" 
                                            className="w-5 h-5 mr-3"
                                            checked={orderOptions.extras['Thịt bò']}
                                            onChange={() => handleExtraToggle('Thịt bò')} 
                                        />
                                        <label htmlFor="extra-beef">Thịt bò</label>
                                    </div>
                                    <div className="font-medium">50.000</div>
                                    <div className="w-5 h-5 border border-green-600 rounded-sm flex items-center justify-center">
                                        {orderOptions.extras['Thịt bò'] && <div className="w-3 h-3 bg-green-600 rounded-sm"></div>}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id="extra-thin-bread" 
                                            className="w-5 h-5 mr-3"
                                            checked={orderOptions.extras['Bánh tráng mỏng']}
                                            onChange={() => handleExtraToggle('Bánh tráng mỏng')}  
                                        />
                                        <label htmlFor="extra-thin-bread">Bánh tráng mỏng</label>
                                    </div>
                                    <div className="font-medium">5.000</div>
                                    <div className="w-5 h-5 border border-green-600 rounded-sm flex items-center justify-center">
                                        {orderOptions.extras['Bánh tráng mỏng'] && <div className="w-3 h-3 bg-green-600 rounded-sm"></div>}
                                    </div>
                                </div>
                            </div>

                            <div className="py-3 border-b">
                                <p className="font-medium mb-2">Ghi chú món</p>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id="note-normal" 
                                            className="w-5 h-5 mr-3"
                                            checked={orderOptions.notes['Bình thường']}
                                            onChange={() => handleNoteToggle('Bình thường')}  
                                        />
                                        <label htmlFor="note-normal">Bình thường</label>
                                    </div>
                                    <div className="w-5 h-5 border border-green-600 rounded-sm flex items-center justify-center">
                                        {orderOptions.notes['Bình thường'] && <div className="w-3 h-3 bg-green-600 rounded-sm"></div>}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id="note-no-chili" 
                                            className="w-5 h-5 mr-3"
                                            checked={orderOptions.notes['Không dầu ớt']}
                                            onChange={() => handleNoteToggle('Không dầu ớt')}  
                                        />
                                        <label htmlFor="note-no-chili">Không dầu phộng</label>
                                    </div>
                                    <div className="w-5 h-5 border border-green-600 rounded-sm flex items-center justify-center">
                                        {orderOptions.notes['Không dầu ớt'] && <div className="w-3 h-3 bg-green-600 rounded-sm"></div>}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 pb-2">
                                <textarea
                                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                                    placeholder="Ghi chú"
                                    rows={3}
                                ></textarea>
                            </div>

                            <div className="mt-3">
                                <button
                                    onClick={handleAddToCartFromModal}
                                    className="w-full py-3 bg-teal-800 text-white font-medium rounded-md"
                                >
                                    Thanh toán 180.000
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu; 
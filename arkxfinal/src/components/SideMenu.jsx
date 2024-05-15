import React from 'react';
import { FaRegListAlt, FaUserCircle, FaRegCommentDots, FaWallet, FaRegChartBar, FaRegStar, FaRegIdBadge, FaBars } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const SideMenu = () => {
    return (
        <div className="flex justify-center flex-col w-72 h-screen bg-white">
            <nav className='text-sm font-lato font-bold text-gray-500'>
                <ul className="mt-9 pl-8">
                    <li>
                        <img src={Logo} alt="Logo" className="justify-center mb-20 w-30 h-15 mx-auto" />
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaBars className="w-5 h-5" />
                            <span className="mx-4">Dashboard</span>
                        </div>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaRegListAlt className="w-5 h-5" />
                            <span className="mx-4">Order List</span>
                        </div>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaUserCircle className="w-5 h-5" />
                            <span className="mx-4">Customer</span>
                        </div>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaRegCommentDots className="w-5 h-5" />
                            <span className="mx-4">Chat</span>
                        </div>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaWallet className="w-5 h-5" />
                            <span className="mx-4">Wallet</span>
                        </div>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaRegChartBar className="w-5 h-5" />
                            <span className="mx-4">Analytics</span>
                        </div>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaRegStar className="w-5 h-5" />
                            <span className="mx-4">Favorites</span>
                        </div>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]">
                        <div className="flex items-center">
                            <FaRegIdBadge className="w-5 h-5" />
                            <span className="mx-4">Customer Details</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideMenu;
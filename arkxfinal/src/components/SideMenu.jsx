import React from 'react';
import { FaRegListAlt, FaUserCircle, FaRegCommentDots, FaWallet, FaRegChartBar, FaRegStar, FaRegIdBadge, FaBars } from 'react-icons/fa';
import Logo from '../assets/logo.png';
const SideMenu = () => {
    return (
        <div className="flex justify-center flex-col w-72 h-screen bg-white">

            <nav className='text-gray-500'>
                <ul className="mt-11">
                    <li>
                        <img src={Logo} alt="Logo" className=" justify-center mb-20 w-30 h-15 mx-auto" />
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover: p-9 ease-in-out hover:border-[#87A922]">
                        <FaBars className="w-5 h-5" /><span className="mx-4">Dashboard</span>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 text-gray-500 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover:border-[#87A922]">
                        <FaRegListAlt className="w-5 h-5" /><span className="mx-4">Order List</span>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 text-gray-500 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover:border-[#87A922]">
                        <FaUserCircle className="w-5 h-5" /><span className="mx-4">Customer</span>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 text-gray-500 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover:border-[#87A922]">
                        <FaRegStar className="w-5 h-5" /><span className="mx-4">Reviews</span>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 text-gray-500 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover:border-[#87A922]">
                        <FaRegChartBar className="w-5 h-5" /><span className="mx-4">Menus</span>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 text-gray-500 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover:border-[#87A922]">
                        <FaRegIdBadge className="w-5 h-5" /><span className="mx-4">Customer Details</span>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 text-gray-500 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover:border-[#87A922]">
                        <FaRegCommentDots className="w-5 h-5" /><span className="mx-4">Chat</span>
                    </li>
                    <li className="flex items-center px-8 py-5 mb-4 text-gray-500 transition duration-500 ease-in-out hover:bg-[#87A922] hover:text-white hover:border-l-4 hover:border-[#87A922]">
                        <FaWallet className="w-5 h-5" /><span className="mx-4">Wallet</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideMenu;
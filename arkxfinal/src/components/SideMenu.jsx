import React, { useState } from 'react';
import { FaRegListAlt, FaUserCircle, FaRegCommentDots, FaWallet, FaRegChartBar, FaRegStar, FaRegIdBadge, FaBars, FaRegClipboard } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const SideMenu = ({ onMenuItemClick }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item);
        onMenuItemClick(item);
    };

    // Set the fixed width of the side menu
    const sideMenuWidth = "256px";
    const contentWidth = `calc(100% - ${sideMenuWidth})`;

    return (
        <div className="flex h-screen">
            <div
                className="flex flex-col h-screen bg-white transition-all duration-300 ease-in-out"
                style={{ width: sideMenuWidth }}
            >
                <nav className="text-sm font-lato font-bold text-gray-500">
                    <ul className="mt-9 pl-8">
                        <li className="mb-20">
                            <img src={Logo} alt="Logo" className="w-25 h-7 mx-auto transition-all duration-300 ease-in-out" />
                        </li>
                        <MenuItem icon={<FaBars className="w-5 h-5" />} name="Dashboard" onClick={() => handleClick('Dashboard')} selected={selectedItem === 'Dashboard'} />
                        <MenuItem icon={<FaRegClipboard className="w-5 h-5" />} name="Menu" onClick={() => handleClick('Menu')} selected={selectedItem === 'Menu'} />
                        <MenuItem icon={<FaRegListAlt className="w-5 h-5" />} name="Order List" onClick={() => handleClick('OrderList')} selected={selectedItem === 'OrderList'} />
                        <MenuItem icon={<FaUserCircle className="w-5 h-5" />} name="Customer" onClick={() => handleClick('Customer')} selected={selectedItem === 'Customer'} />
                        <MenuItem icon={<FaRegCommentDots className="w-5 h-5" />} name="Chat" onClick={() => handleClick('Chat')} selected={selectedItem === 'Chat'} />
                        <MenuItem icon={<FaWallet className="w-5 h-5" />} name="Wallet" onClick={() => handleClick('Wallet')} selected={selectedItem === 'Wallet'} />
                        <MenuItem icon={<FaRegChartBar className="w-5 h-5" />} name="Analytics" onClick={() => handleClick('Analytics')} selected={selectedItem === 'Analytics'} />
                        <MenuItem icon={<FaRegStar className="w-5 h-5" />} name="Favorites" onClick={() => handleClick('Favorites')} selected={selectedItem === 'Favorites'} />
                        <MenuItem icon={<FaRegIdBadge className="w-5 h-5" />} name="Customer Details" onClick={() => handleClick('CustomerDetails')} selected={selectedItem === 'CustomerDetails'} />
                    </ul>
                </nav>
            </div>
            <div className="flex-1" style={{ width: contentWidth }}>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, name, onClick, selected }) => {
    return (
        <li
            className={`flex items-center px-8 py-5 mb-4 transition-all duration-300 ease-in-out ${selected ? 'bg-[#D9F3EA] text-[#00B074] border-l-4 border-[#87A922]' : ''}`}
            onClick={onClick}
        >
            <div className="flex items-center">
                {icon}
                <span className="ml-4 transition-all duration-300 ease-in-out inline-block" style={{ whiteSpace: 'nowrap' }}>{name}</span>
            </div>
        </li>
    );
};

export default SideMenu;

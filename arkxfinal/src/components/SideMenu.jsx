import React, { useState } from 'react';
import { FaRegListAlt, FaUserCircle, FaRegCommentDots, FaWallet, FaRegChartBar, FaRegStar, FaRegIdBadge, FaBars, FaRegClipboard } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const SideMenu = ({ onMenuItemClick }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item);
        onMenuItemClick(item);
    };

    return (
        <>
            <div className="flex justify-center flex-col w-72 h-screen bg-white">
                <nav className='text-sm font-lato font-bold text-gray-500'>
                    <ul className="mt-9 pl-8">
                        <li>
                            <img src={Logo} alt="Logo" className="justify-center mb-20 w-30 h-15 mx-auto" />
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
        </>
    );
};

const MenuItem = ({ icon, name, onClick, selected }) => {
    return (
        <li className={`flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out ${selected ? 'bg-[#D9F3EA] text-[#00B074] border-l-4 border-[#87A922]' : ''}`} onClick={onClick}>
            <div className="flex items-center">
                {icon}
                <span className="ml-4">{name}</span>
            </div>
        </li>
    );
};

export default SideMenu;
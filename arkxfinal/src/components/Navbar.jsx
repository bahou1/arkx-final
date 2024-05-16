import React from 'react';
import logo from '../assets/logo.png';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className="container mx-auto pt-3.5">
            <div className="flex justify-between items-center px-4 py-2 text-xs-13 text-grey">
                <div>
                    <img src={logo} className='' width="102" height="32" alt="Logo" />
                </div>

                <div className="right-90">
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-black ml-2 transition duration-500 ease-in-out'>Home</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2 transition duration-500 ease-in-out'>Restaurants</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2 transition duration-500 ease-in-out'>Menus</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2 transition duration-500 ease-in-out'>About us</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2 transition duration-500 ease-in-out'>Contact</button>
                </div>

                <div className="flex items-center">
                    <div className="search mr-2">
                        <button className="border border-zinc-300 transition duration-300 mr-2 rounded-full px-3 py-3 hover:bg-gray-800 hover:text-white">
                            <FiSearch size={20.4} />
                        </button>
                    </div>
                    <div className="basket-icon mr-2">
                        <button className="flex items-center px-3 py-3 border border-zinc-300 rounded-full ease-in-out transition duration-300 hover:bg-gray-800 hover:text-white">
                            <FiShoppingCart size={20.4} />
                        </button>
                    </div>

                    <button className="flex items-center px-6 py-2.5 border border-zinc-300 rounded-3xl ease-in-out transition duration-300 ml-2 hover:bg-gray-800 hover:text-white">
                        <span className="">Login</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
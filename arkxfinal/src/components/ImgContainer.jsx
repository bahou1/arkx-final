import { RiEBike2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { useState } from 'react';

const ImgContainer = ({ restaurantName, restaurantAddress, coverPic }) => {
    const [selectedFilter, setSelectedFilter] = useState('Recommended');
    const [showModal, setShowModal] = useState(false);

    // Function to handle filter change
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    }

    // Function to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="flex flex-col items-center pb-10">
            <div style={{ width: '90vw', height: '22.5vw', backgroundImage: `url(${coverPic})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }} className="mt-9 ">
                <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)'}}></div>
                <div className="absolute right-0 bottom-5 flex text-white text-lg mb-2 pr-10 space-x-3">
                    <div style={{ backgroundColor: '#87A922' }} className="rounded-full p-3 flex items-center space-x-2">
                        <RiEBike2Line className="text-2xl" />
                        <p className="text-base">18 MAD</p>
                    </div>
                    <div style={{ backgroundColor: '#87A922' }} className="rounded-full p-3 flex items-center space-x-2">
                        <IoMdTime className="text-2xl" />
                        <p className="text-base">15 - 20 mn'</p>
                    </div>
                    <div style={{ backgroundColor: '#87A922' }} className="rounded-full p-3 flex items-center space-x-2">
                        <AiTwotoneLike className="text-2xl" />
                        <p className="text-base">90%</p>
                    </div>
                    <div style={{ backgroundColor: '#87A922' }} className="rounded-full p-3 flex items-center space-x-2" onClick={toggleModal}>
                        <MdMessage className="text-2xl" />
                        <p className="text-base">Message</p>
                    </div>
                </div>
                <div className="absolute bottom-5 left-0 pl-10 p-1">
                    <h2 className="text-white text-4xl font-bold">{restaurantName}</h2>
                    <div className="flex items-center text-white text-base">
                        <IoLocation className="text-base" />
                        <p className="ml-2">{restaurantAddress}</p>
                    </div>
                </div>
            </div>
            <div style={{ width: '90vw' }} className="mt-4">
                <div className="text-lg grid grid-cols-4 gap-2 items-center justify-center w-full">
                    <div className="relative col-span-3">
                        <input type="text" placeholder="Search this restaurant" className="p-4 border border-stone-800 w-full" style={{ borderRadius: '40px' }} />
                        <button style={{ backgroundColor: '#87A922' }} className="text-white rounded-full p-3  absolute right-1 top-0 mt-2 mr-8 text-lg">
                            <FiSearch />
                        </button>
                    </div>
                    <div className="relative">
                        <select className="p-4 border border-gray-300 w-full col-span-1" style={{ borderRadius: '40px', appearance: 'none', paddingRight: '2.5rem' }} onChange={handleFilterChange}>
                            <option value="Recommended">Recommended</option>
                            <option value="Most Popular">Most Popular</option>
                            <option value="Highest Rating">Highest Rating</option>
                            <option value="Fastest Delivery">Fastest Delivery</option>
                        </select>
                        <IoIosArrowDown className="absolute right-0 top-0 mt-5 mr-3 text-lg pointer-events-none" />
                    </div>
                </div>
            </div>
            {showModal && (
    <div className={`fixed z-10 inset-0 overflow-y-auto transition-all duration-700 ease-in-out transform ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Contact Us
                    </h3>
                    <div className="mt-2">
                        <form>
                            <textarea placeholder="Your Message" className="w-full p-2 mt-2 border rounded-md"></textarea>
                            <button type="submit" className="mt-4 px-4 py-2 bg-lime-600 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">Send</button>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime-600 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200" onClick={toggleModal}>Close</button>
                </div>
            </div>
        </div>
    </div>
)}
        </div>
    );
}

export default ImgContainer;
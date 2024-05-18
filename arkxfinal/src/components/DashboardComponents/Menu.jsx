import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineClose, AiOutlineDollar, AiOutlineStar } from 'react-icons/ai';

const Menu = () => {
    const [menuData, setMenuData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [identifierToDelete, setIdentifierToDelete] = useState(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/menu');
                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData();
    }, []);

    const handleView = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    const handleDelete = async (identifier) => {
        console.log('Deleting item with identifier:', identifier); // Log the identifier
    
        try {
            // Send DELETE request to backend
            const response = await fetch(`http://localhost:3000/api/menu/${identifier}`, {
                method: 'DELETE',
            });
    
            console.log('Response:', response); // Log the response
    
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
    
            // Remove the item from the UI
            setMenuData(prevMenuData => {
                const newMenuData = prevMenuData.filter(item => item.identifier !== identifier);
                console.log('New menu data:', newMenuData); // Log the new state
                return newMenuData;
            });
        } catch (error) {
            console.error('Error deleting menu item:', error);
        }
    };

    const handleDeleteConfirmation = (identifier) => {
        setShowConfirmation(true);
        setIdentifierToDelete(identifier);
    };

    const handleConfirmDelete = async () => {
        try {
            await handleDelete(identifierToDelete);
            setShowConfirmation(false);
        } catch (error) {
            console.error('Error confirming deletion:', error);
        }
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="w-full gap-9 mt-4 mb-4 grid grid-cols-9 sm:grid-cols-9 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 pl-3 pr-3">
            {menuData.map(item => (
                <div key={item._id} className="flex flex-col items-center gap-3 relative bg-white rounded-3xl pb-4">
                    <div className="relative rounded-full w-64 h-64 bg-cover bg-center " style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
                    <h2 className="text-xl font-lato font-medium text-center">{item.title}</h2>
                    <p className="text-xl font-lato font-medium">{item.price}</p>
                    <div className="flex gap-4 mt-8">
                        <div className="flex flex-col items-center">
                            <button className="rounded-2xl w-12 h-12 font-lato font-3xl flex items-center justify-center transition-colors duration-200 ease-in-out" style={{ backgroundColor: '#FFF0ED', color: '#FF6D4D' }}>
                                <AiOutlineEdit size={23} />
                            </button>
                            <p>Edit</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button onClick={() => handleView(item)} className="rounded-2xl w-12 h-12 font-lato font-3xl flex items-center justify-center transition-colors duration-200 ease-in-out" style={{ backgroundColor: '#DFF0FA', color: '#2D9CDB' }}>
                                <AiOutlineEye size={23} />
                            </button>
                            <p>View</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button onClick={() => handleDeleteConfirmation(item.identifier)} className="rounded-2xl w-12 h-12 font-lato font-3xl flex items-center justify-center transition-colors duration-200 ease-in-out" style={{ backgroundColor: '#D9F3EA', color: '#00B074' }}>
                                <AiOutlineDelete size={23} />
                            </button>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            ))}
{selectedItem && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 font-lato">
        <div className="bg-white p-6 rounded-lg max-w-md transform transition-all duration-300 opacity-100 shadow-lg border-4 border-gray-300 animate-popup">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                <AiOutlineClose size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedItem.title}</h2>
            <img src={selectedItem.imgUrl} alt={selectedItem.title} className="mt-2 mb-4 rounded-lg w-full shadow-md" />
            <p className="space-x-2 text-lg mb-2 flex items-center"><AiOutlineDollar /><span> Price: <span className="font-semibold">{selectedItem.price}</span></span></p>
            <p className="space-x-2 text-lg mb-2 flex items-center"><AiOutlineStar /><span> Rating: <span className="font-semibold">{selectedItem.rating}</span></span></p>
            <p className="space-x-2 text-lg mb-2 flex items-center"><AiOutlineStar /><span> Identifier: <span className="font-semibold">{selectedItem.identifier}</span></span></p>

            <p className="text-lg">{selectedItem.description}</p>
        </div>
    </div>
)}
{showConfirmation && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300">
        <div className="bg-white p-6 rounded-lg max-w-md transform transition-all duration-300 opacity-100 shadow-lg border-4 border-gray-300 animate-popup">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
                <button onClick={handleCancelDelete} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 mr-2">Cancel</button>
                <button onClick={handleConfirmDelete} className="px-4 py-2 bg-lime-700 text-white rounded-md hover:bg-lime-800 focus:outline-none focus:bg-lime-700">Confirm</button>
            </div>
        </div>
    </div>
)}

            </div>
        );
    };
    
    export default Menu;    
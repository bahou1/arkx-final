import React, { useState } from 'react';

const AddMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange1 = (e) => {
        setInput1(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setInput2(e.target.value);
    };

    const handleInputChange3 = (e) => {
        setInput3(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // You can access the input values using input1, input2, input3
        // and perform any necessary actions
    };

    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={openModal}
            >
                Create Menu
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Create Menu</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
                                    Input 1
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="input1"
                                    type="text"
                                    value={input1}
                                    onChange={handleInputChange1}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">
                                    Input 2
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="input2"
                                    type="text"
                                    value={input2}
                                    onChange={handleInputChange2}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input3">
                                    Input 3
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="input3"
                                    type="text"
                                    value={input3}
                                    onChange={handleInputChange3}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddMenu;
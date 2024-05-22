import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchDash = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        onSearch(value); // Pass the search query to the parent component
    };

    return (
        <div className="mt-5 flex items-center justify-start">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search here..."
                    style={{ width: '866px', height: '60px'}}
                    className="pl-5 pr-20 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    value={searchQuery}
                    onChange={handleChange} // Call handleChange on input change
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <FiSearch size={20} color='#A4A4A4' />
                </div>
            </div>
        </div>
    );
};

export default SearchDash;

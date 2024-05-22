import React, { useState, useEffect } from 'react';
import Pagination from '../components/helpers/pagination';
import SearchDash from '../components/SearchDash';

const Customer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 10;

    useEffect(() => {
        fetch('http://localhost:3000/api/customers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase()); // Update search query state
    
        if (query.trim() === '') {
            // If the search query is empty, reload the original data
            setData(originalData); // Assuming originalData contains the initial data
        } else {
            // Filter the original data based on the current search query
            const filteredData = originalData.filter(customer =>
                customer.name.toLowerCase().includes(query.toLowerCase()) ||
                customer.location.toLowerCase().includes(query.toLowerCase()) ||
                customer.id.toString().toLowerCase().includes(query.toLowerCase())
            );
            setData(filteredData);
        }
    };
    
    

    const filteredData = data.filter(customer => 
        customer.id.toString().includes(searchQuery) ||
        customer.joinDate.toLowerCase().includes(searchQuery) ||
        customer.name.toLowerCase().includes(searchQuery) ||
        customer.location.toLowerCase().includes(searchQuery) ||
        customer.totalSpent.toString().includes(searchQuery) ||
        customer.lastOrder.toLowerCase().includes(searchQuery)
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <>
<SearchDash onSearch={handleSearch} />

            <table className="mt-8 w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="text-white uppercase text-sm leading-normal" style={{ backgroundColor: '#87A922' }}>
                        <th className="py-3 px-6 text-left" style={{ borderTopLeftRadius: '0.375rem' }}>Customer ID</th>
                        <th className="py-3 px-6 text-left">Join Date</th>
                        <th className="py-3 px-6 text-left">Customer Name</th>
                        <th className="py-3 px-6 text-left">Location</th>
                        <th className="py-3 px-6 text-left">Total Spent</th>
                        <th className="py-3 px-6 text-left" style={{ borderTopRightRadius: '0.375rem' }}>Last Order</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.slice(startIndex, endIndex).map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{row.id}</td>
                            <td className="py-3 px-6 text-left">{row.joinDate}</td>
                            <td className="py-3 px-6 text-left">{row.name}</td>
                            <td className="py-3 px-6 text-left">{row.location}</td>
                            <td className="py-3 px-6 text-left">{row.totalSpent}</td>
                            <td className="py-3 px-6 text-left">
                                <div className="px-0 py-1 rounded-full">
                                    {row.lastOrder}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </>
    );
};

export default Customer;

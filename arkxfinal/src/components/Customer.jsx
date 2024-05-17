import React, { useState, useEffect } from 'react';

const Customer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
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
                {data.map((row, index) => (
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
    );
};

export default Customer;

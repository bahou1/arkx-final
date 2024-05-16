/* JSX */
import React from 'react';

const Customer = () => {
    // Sample data
    const data = [
        { id: 1, joinDate: "2020-01-01", name: "John", location: "New York", totalSpent: "$1,000.00", lastOrder: "$200.00" },
        { id: 2, joinDate: "2020-02-01", name: "Jane", location: "Chicago", totalSpent: "$2,000.00", lastOrder: "$400.00" },
        { id: 3, joinDate: "2020-03-01", name: "Mike", location: "Los Angeles", totalSpent: "$3,000.00", lastOrder: "$600.00" },
        { id: 4, joinDate: "2020-04-01", name: "Emma", location: "San Francisco", totalSpent: "$4,000.00", lastOrder: "$800.00" },
        { id: 5, joinDate: "2020-05-01", name: "Oliver", location: "Seattle", totalSpent: "$5,000.00", lastOrder: "$1,000.00" },
        { id: 6, joinDate: "2020-06-01", name: "Harry", location: "Boston", totalSpent: "$6,000.00", lastOrder: "$1,200.00" },
        { id: 7, joinDate: "2020-07-01", name: "Liam", location: "Dallas", totalSpent: "$7,000.00", lastOrder: "$1,400.00" },
        { id: 8, joinDate: "2020-08-01", name: "Lucas", location: "Miami", totalSpent: "$8,000.00", lastOrder: "$1,600.00" },
        { id: 9, joinDate: "2020-09-01", name: "Mason", location: "Orlando", totalSpent: "$9,000.00", lastOrder: "$1,800.00" },
        { id: 10, joinDate: "2020-10-01", name: "Ethan", location: "Denver", totalSpent: "$10,000.00", lastOrder: "$2,000.00" }
    ];

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

import React, { useState } from 'react';
import Pagination from '../helpers/pagination';

const Wallet = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const transactions = [
    { id: 1, description: 'Payment received', amount: 100 },
    { id: 2, description: 'Payment sent', amount: -50 },
    { id: 3, description: 'Payment received', amount: 200 },
    { id: 4, description: 'Payment sent', amount: -75 },
    { id: 5, description: 'Payment received', amount: 150 },
    { id: 6, description: 'Payment sent', amount: -25 },
    { id: 7, description: 'Payment received', amount: 300 },
    { id: 8, description: 'Payment sent', amount: -25 },
  ];

  const recentPayments = [
    {
      id: 1,
      customerName: 'John Doe',
      customerEmail: 'johndoe@example.com',
      customerAddress: '123 Main St',
      customerPhoneNumber: '555-123-4567',
      orderTotal: 250,
      orderAmount: 3,
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      customerEmail: 'janesmith@example.com',
      customerAddress: '456 Elm St',
      customerPhoneNumber: '555-987-6543',
      orderTotal: 150,
      orderAmount: 2,
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      customerEmail: 'bobjohnson@example.com',
      customerAddress: '789 Oak St',
      customerPhoneNumber: '555-456-7890',
      orderTotal: 100,
      orderAmount: 1,
    },
    {
      id: 4,
      customerName: 'Alice Williams',
      customerEmail: 'alicewilliams@example.com',
      customerAddress: '321 Pine St',
      customerPhoneNumber: '555-789-0123',
      orderTotal: 75,
      orderAmount: 1,
    },
    {
      id: 5,
      customerName: 'Michael Johnson',
      customerEmail: 'michaeljohnson@example.com',
      customerAddress: '567 Cedar St',
      customerPhoneNumber: '555-321-6547',
      orderTotal: 200,
      orderAmount: 2,
    },
    {
      id: 6,
      customerName: 'Emily Brown',
      customerEmail: 'emilybrown@example.com',
      customerAddress: '890 Maple St',
      customerPhoneNumber: '555-654-9870',
      orderTotal: 300,
      orderAmount: 3,
    },
    {
      id: 7,
      customerName: 'David Wilson',
      customerEmail: 'davidwilson@example.com',
      customerAddress: '234 Birch St',
      customerPhoneNumber: '555-987-3210',
      orderTotal: 180,
      orderAmount: 2,
    },
    {
      id: 8,
      customerName: 'Sarah Garcia',
      customerEmail: 'sarahgarcia@example.com',
      customerAddress: '678 Walnut St',
      customerPhoneNumber: '555-456-7891',
      orderTotal: 120,
      orderAmount: 1,
    },
    {
      id: 9,
      customerName: 'James Brown',
      customerEmail: 'jamesbrown@example.com',
      customerAddress: '345 Oak St',
      customerPhoneNumber: '555-789-6543',
      orderTotal: 90,
      orderAmount: 1,
    },
    {
      id: 10,
      customerName: 'Emma Wilson',
      customerEmail: 'emmawilson@example.com',
      customerAddress: '456 Pine St',
      customerPhoneNumber: '555-321-0987',
      orderTotal: 110,
      orderAmount: 1,
    },
    {
      id: 11,
      customerName: 'William Taylor',
      customerEmail: 'williamtaylor@example.com',
      customerAddress: '678 Elm St',
      customerPhoneNumber: '555-654-3210',
      orderTotal: 135,
      orderAmount: 1,
    },
    {
      id: 12,
      customerName: 'Olivia Martinez',
      customerEmail: 'oliviamartinez@example.com',
      customerAddress: '890 Cedar St',
      customerPhoneNumber: '555-987-6543',
      orderTotal: 180,
      orderAmount: 2,
    },
    {
      id: 13,
      customerName: 'Noah Anderson',
      customerEmail: 'noahanderson@example.com',
      customerAddress: '123 Oak St',
      customerPhoneNumber: '555-321-4567',
      orderTotal: 95,
      orderAmount: 1,
    },
    {
      id: 14,
      customerName: 'Sophia Thomas',
      customerEmail: 'sophiathomas@example.com',
      customerAddress: '456 Maple St',
      customerPhoneNumber: '555-654-7890',
      orderTotal: 200,
      orderAmount: 2,
    },
    {
      id: 15,
      customerName: 'Liam Garcia',
      customerEmail: 'liamgarcia@example.com',
      customerAddress: '678 Pine St',
      customerPhoneNumber: '555-987-0123',
      orderTotal: 80,
      orderAmount: 1,
    },
    {
      id: 16,
      customerName: 'Ava Rodriguez',
      customerEmail: 'avarodriguez@example.com',
      customerAddress: '890 Elm St',
      customerPhoneNumber: '555-321-3456',
      orderTotal: 120,
      orderAmount: 1,
    },
    {
      id: 17,
      customerName: 'Mason Hernandez',
      customerEmail: 'masonhernandez@example.com',
      customerAddress: '234 Cedar St',
      customerPhoneNumber: '555-654-6789',
      orderTotal: 150,
      orderAmount: 2,
    },
    {
      id: 18,
      customerName: 'Charlotte Martinez',
      customerEmail: 'charlottemartinez@example.com',
      customerAddress: '567 Oak St',
      customerPhoneNumber: '555-987-9012',
      orderTotal: 210,
      orderAmount: 2,
    },
    {
      id: 19,
      customerName: 'Ethan Lopez',
      customerEmail: 'ethanlopez@example.com',
      customerAddress: '890 Pine St',
      customerPhoneNumber: '555-321-2345',
      orderTotal: 100,
      orderAmount: 1,
    },
    {
      id: 20,
      customerName: 'Amelia King',
      customerEmail: 'ameliaking@example.com',
      customerAddress: '123 Elm St',
      customerPhoneNumber: '555-654-5678',
      orderTotal: 130,
      orderAmount: 1,
    },
    {
      id: 21,
      customerName: 'Benjamin Young',
      customerEmail: 'benjaminyoung@example.com',
      customerAddress: '456 Cedar St',
      customerPhoneNumber: '555-987-8901',
      orderTotal: 175,
      orderAmount: 1,
    },
    {
      id: 22,
      customerName: 'Harper Wright',
      customerEmail: 'harperwright@example.com',
      customerAddress: '678 Oak St',
      customerPhoneNumber: '555-321-2345',
      orderTotal: 95,
      orderAmount: 1,
    },
    {
      id: 23,
      customerName: 'Sebastian Hill',
      customerEmail: 'sebastianhill@example.com',
      customerAddress: '890 Maple St',
      customerPhoneNumber: '555-654-5678',
      orderTotal: 140,
      orderAmount: 1,
    },
    {
      id: 24,
      customerName: 'Mia Scott',
      customerEmail: 'miascott@example.com',
      customerAddress: '123 Cedar St',
      customerPhoneNumber: '555-987-8901',
      orderTotal: 180,
      orderAmount: 2,
    },
    {
      id: 25,
      customerName: 'Elijah Green',
      customerEmail: 'elijahgreen@example.com',
      customerAddress: '456 Oak St',
      customerPhoneNumber: '555-321-2345',
      orderTotal: 75,
      orderAmount: 1,
    },
    {
      id: 26,
      customerName: 'Abigail Adams',
      customerEmail: 'abigailadams@example.com',
      customerAddress: '678 Maple St',
      customerPhoneNumber: '555-654-5678',
      orderTotal: 115,
      orderAmount: 1,
    },
    {
      id: 27,
      customerName: 'Alexander Phillips',
      customerEmail: 'alexanderphillips@example.com',
      customerAddress: '890 Cedar St',
      customerPhoneNumber: '555-987-8901',
      orderTotal: 160,
      orderAmount: 2,
    },
    {
      id: 28,
      customerName: 'Madison Campbell',
      customerEmail: 'madisoncampbell@example.com',
      customerAddress: '123 Oak St',
      customerPhoneNumber: '555-321-2345',
      orderTotal: 90,
      orderAmount: 1,
    },
    {
      id: 29,
      customerName: 'Jackson Rivera',
      customerEmail: 'jacksonrivera@example.com',
      customerAddress: '456 Maple St',
      customerPhoneNumber: '555-654-5678',
      orderTotal: 125,
      orderAmount: 1,
    },
    {
      id: 30,
      customerName: 'Luna Edwards',
      customerEmail: 'lunaedwards@example.com',
      customerAddress: '678 Elm St',
      customerPhoneNumber: '555-987-8901',
      orderTotal: 195,
      orderAmount: 2,
    },
 
  ];

  // Calculate total number of pages
  const totalPages = Math.ceil(recentPayments.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, recentPayments.length);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex flex-row-reverse justify-center gap-9 items-center mb-4">
        <div className="grid grid-cols-2 gap-3.5">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`text-left p-2 pl-20 pr-20 rounded-lg ${
                transaction.amount > 0 ? 'bg-green-200' : 'bg-red-200'
              }`}
            >
              <p className="text-sm font-semibold">{transaction.description}</p>
              <p className="text-md font-bold">${transaction.amount}</p>
            </div>
          ))}
        </div>

        <div className="p-20 pr-60 rounded-lg shadow-md text-white" style={{background: 'linear-gradient(135deg, #87A922 0%, #4A772F 100%)'}}>
          <h3 className="text-4xl font-bold">Credit Card</h3>
          <p className="mt-2 text-xl">**** **** **** 1234</p>
          <p className="mt-2 text-xl">John Doe</p>
          <p className="mt-2 text-xl">10/24</p>
        </div>
      </div>

      <table className="mt-8 w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Address</th>
            <th className="py-3 px-6 text-left">Phone Number</th>
            <th className="py-3 px-6 text-left">Order Total</th>
            <th className="py-3 px-6 text-left">Order Amount</th>
          </tr>
        </thead>
        <tbody>
          {recentPayments.slice(startIndex, endIndex).map((payment) => (
            <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{payment.customerName}</td>
              <td className="py-3 px-6 text-left">{payment.customerEmail}</td>
              <td className="py-3 px-6 text-left">{payment.customerAddress}</td>
              <td className="py-3 px-6 text-left">{payment.customerPhoneNumber}</td>
              <td className="py-3 px-6 text-left">${payment.orderTotal}</td>
              <td className="py-3 px-6 text-left">{payment.orderAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <style jsx>{`
        table {
          width: 100%;
          font-family: 'Lato', sans-serif;
        }

        th,
        td {
          padding: 8px;
          text-align: left;
        }

        th {
          background-color: #87A922;
          font-weight: bold;
          color: white;
        }

        tbody tr:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default Wallet;

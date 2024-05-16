import React from 'react';

const Wallet = () => {
  const transactions = [
    { id: 1, description: 'Payment received', amount: 100 },
    { id: 2, description: 'Payment sent', amount: -50 },
    { id: 3, description: 'Payment received', amount: 200 },
    { id: 4, description: 'Payment sent', amount: -75 },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Wallet</h2>
      <div className="grid grid-cols-2 gap-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`p-4 rounded-lg ${
              transaction.amount > 0 ? 'bg-green-200' : 'bg-red-200'
            }`}
          >
            <p className="text-lg font-semibold">{transaction.description}</p>
            <p className="text-xl font-bold">${transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-3 mt-4">
      <span className="font-bold font-lato text-lime-500 mt-1">Show more</span>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-3 py-1 rounded-md ${number === currentPage ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

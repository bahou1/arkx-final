import React, { useState, useEffect } from 'react';
import SearchDash from '../SearchDash';
import Pagination from '../helpers/pagination'; // Import the Pagination component

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3000/api/orderlist')
      .then(response => response.json())
      .then(data => {
        setOrders(data);
        setFilteredOrders(data); // Initialize filteredOrders with all orders
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "New Order":
        return {
          color: "#FF6D4D",
          backgroundColor: "#FFF0ED"
        };
      case "On Delivery":
        return {
          color: "#2D9CDB",
          backgroundColor: "#DFF0FA"
        };
      case "Delivered":
        return {
          color: "#00B074",
          backgroundColor: "#D9F3EA"
        };
      default:
        return {};
    }
  };

  const handleSearch = (query) => {
    const filteredData = orders.filter(order =>
      order.id.toString().includes(query) ||
      order.date.toLowerCase().includes(query) ||
      order.customerName.toLowerCase().includes(query) ||
      order.location.toLowerCase().includes(query) || // Include location in search criteria
      order.amount.toString().includes(query) ||
      order.status.toLowerCase().includes(query)
    );
    setFilteredOrders(filteredData);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredOrders.length);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="mt-5 mr-5 flex flex-col">
      <SearchDash onSearch={handleSearch} />
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-lime-600">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.slice(startIndex, endIndex).map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <span style={{ ...getStatusStyle(item.status), padding: '6px 6px', borderRadius: '10px', width: '80%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default OrderList;

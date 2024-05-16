import React from 'react';

const orders = [
  {
      id: "#000001",
      date: "01 March 2020, 12:42 AM",
      customerName: "John Doe",
      location: "123 Main St, Cityville",
      amount: "$50.00",
      status: "New Order"
  },
  {
      id: "#000002",
      date: "01 March 2020, 01:15 AM",
      customerName: "Jane Smith",
      location: "456 Elm St, Townsville",
      amount: "$35.00",
      status: "On Delivery"
  },
  {
      id: "#000003",
      date: "01 March 2020, 02:30 AM",
      customerName: "Michael Johnson",
      location: "789 Oak St, Villageton",
      amount: "$75.00",
      status: "Delivered"
  },
  // Additional dummy data
  {
      id: "#000004",
      date: "02 March 2020, 03:20 PM",
      customerName: "Emily Brown",
      location: "321 Pine St, Villageton",
      amount: "$40.00",
      status: "New Order"
  },
  {
      id: "#000005",
      date: "03 March 2020, 10:55 AM",
      customerName: "David Wilson",
      location: "567 Cedar St, Cityville",
      amount: "$60.00",
      status: "On Delivery"
  },
  {
      id: "#000006",
      date: "04 March 2020, 11:30 AM",
      customerName: "Sophia Martinez",
      location: "987 Maple St, Townsville",
      amount: "$25.00",
      status: "Delivered"
  },
  {
      id: "#000007",
      date: "05 March 2020, 04:40 PM",
      customerName: "Liam Taylor",
      location: "741 Oak St, Cityville",
      amount: "$55.00",
      status: "New Order"
  },
  {
      id: "#000008",
      date: "06 March 2020, 06:25 PM",
      customerName: "Olivia Garcia",
      location: "852 Elm St, Townsville",
      amount: "$30.00",
      status: "On Delivery"
  },
  {
      id: "#000009",
      date: "07 March 2020, 09:15 AM",
      customerName: "Noah Martinez",
      location: "963 Pine St, Villageton",
      amount: "$45.00",
      status: "Delivered"
  },
  {
      id: "#000010",
      date: "08 March 2020, 02:00 PM",
      customerName: "Emma Rodriguez",
      location: "159 Cedar St, Cityville",
      amount: "$70.00",
      status: "New Order"
  },
  {
      id: "#000011",
      date: "09 March 2020, 05:30 PM",
      customerName: "William Hernandez",
      location: "357 Maple St, Townsville",
      amount: "$20.00",
      status: "On Delivery"
  },
  {
      id: "#000012",
      date: "10 March 2020, 07:45 AM",
      customerName: "Isabella Lopez",
      location: "258 Oak St, Cityville",
      amount: "$65.00",
      status: "Delivered"
  },
  {
      id: "#000013",
      date: "11 March 2020, 11:10 AM",
      customerName: "James Perez",
      location: "654 Elm St, Townsville",
      amount: "$15.00",
      status: "New Order"
  },
  {
      id: "#000014",
      date: "12 March 2020, 01:20 PM",
      customerName: "Ava Gonzalez",
      location: "753 Pine St, Villageton",
      amount: "$80.00",
      status: "On Delivery"
  },
  {
      id: "#000015",
      date: "13 March 2020, 03:35 PM",
      customerName: "Logan Washington",
      location: "852 Cedar St, Cityville",
      amount: "$55.00",
      status: "Delivered"
  },
  {
      id: "#000016",
      date: "14 March 2020, 05:50 AM",
      customerName: "Mia King",
      location: "963 Maple St, Townsville",
      amount: "$35.00",
      status: "New Order"
  },
  {
      id: "#000017",
      date: "15 March 2020, 08:05 AM",
      customerName: "Benjamin Scott",
      location: "357 Oak St, Cityville",
      amount: "$25.00",
      status: "On Delivery"
  },
  {
      id: "#000018",
      date: "16 March 2020, 10:15 AM",
      customerName: "Charlotte Lee",
      location: "654 Elm St, Townsville",
      amount: "$90.00",
      status: "Delivered"
  },
  {
      id: "#000019",
      date: "17 March 2020, 12:30 PM",
      customerName: "Ethan Green",
      location: "753 Pine St, Villageton",
      amount: "$40.00",
      status: "New Order"
  },
  {
      id: "#000020",
      date: "18 March 2020, 03:45 PM",
      customerName: "Amelia Adams",
      location: "852 Cedar St, Cityville",
      amount: "$50.00",
      status: "On Delivery"
  }
]

const OrderList = () => {

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

  return (
    <div className="mt-5 mr-5 flex flex-col">
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
                {orders.map((item) => (
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
    </div>
  );
};

export default OrderList;

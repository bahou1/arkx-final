import React from 'react';
import SideMenu from '../components/SideMenu';
import SearchDash from '../components/SearchDash';
import CustomerTable from '../components/CustomerTable';

const Dashboard = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex gap-9 ">
            <div className="fixed"> {/* Add the fixed class here */}
                <SideMenu/>
            </div>
            <div className="flex flex-col absolute right-4 gap-4"> {/* Add margin-left to compensate for the fixed SideMenu */}
                <SearchDash/>
                <CustomerTable/>
            </div>
        </div>
    );
};

export default Dashboard;
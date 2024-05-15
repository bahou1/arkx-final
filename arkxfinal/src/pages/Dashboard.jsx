import React from 'react';
import SideMenu from '../components/SideMenu';
import SearchDash from '../components/SearchDash';
import CustomerTable from '../components/CustomerTable';

const Dashboard = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex gap-9 ">
            <div className="">
                <SideMenu/>
            </div>
            <div className="flex flex-col gap-4">
                <SearchDash/>
                <CustomerTable/>
            </div>
        </div>
    );
};

export default Dashboard;
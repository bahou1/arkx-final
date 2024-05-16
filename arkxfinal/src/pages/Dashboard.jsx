import React from 'react';
import SideMenu from '../components/SideMenu';
import SearchDash from '../components/SearchDash';
import Customer from '../components/DashboardComponents/Customer';

const Dashboard = () => {
    return (
        <div className="bg-orange-200 h-full flex">
            <div className="fixed"> 
                <SideMenu/>
            </div>
            <div className="pl-8 flex flex-col flex-grow overflow-auto ml-72 gap-4"> 
                <SearchDash/>
                <Customer/>
            </div>
        </div>
    );
};

export default Dashboard;
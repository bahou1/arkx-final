import React from 'react';
import SideMenu from '../components/SideMenu';
import SearchDash from '../components/SearchDash';

const Dashboard = () => {
    return (
        <div className="bg-gray-400 min-h-screen flex gap-9 ">
            <div className="">
                <SideMenu/>
            </div>
            <div className="gap-">
                <SearchDash/>
            </div>
        </div>
    );
};

export default Dashboard;
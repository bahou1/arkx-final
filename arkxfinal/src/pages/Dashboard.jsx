import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import SearchDash from '../components/SearchDash';
import OrderList from '../components/DashboardComponents/OrderList';
import Customer from '../components/Customer';
import Chat from '../components/DashboardComponents/Chat';
import Wallet from '../components/DashboardComponents/Wallet';
import Analytics from '../components/DashboardComponents/Analytics';
import Favorites from '../components/DashboardComponents/Favorites';
import CustomerDetails from '../components/DashboardComponents/CutsomerDetails';
import Dashboard from '../components/DashboardComponents/Dashboard'; // Assuming the component is named Dashboard.jsx

const DashboardPage = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleMenuItemClick = (componentName) => {
        console.log("Clicked component:", componentName);
        setActiveComponent(componentName);
    };

    console.log("Active component:", activeComponent);

    return (
        <div className="bg-orange-200 h-full flex">
            <div className="fixed"> 
                <SideMenu onMenuItemClick={handleMenuItemClick} />
            </div>
            <div className="pl-8 flex flex-col flex-grow overflow-auto ml-72 gap-4"> 
                {activeComponent === 'Dashboard' && <Dashboard/>}
                {activeComponent === 'Customer' && (
                    <>
                        <SearchDash />
                        <Customer />
                    </>
                )}
                {activeComponent === 'OrderList' && <OrderList />}
                {activeComponent === 'Chat' && <Chat />}
                {activeComponent === 'Wallet' && <Wallet />}
                {activeComponent === 'Analytics' && <Analytics />}
                {activeComponent === 'Favorites' && <Favorites />}
                {activeComponent === 'CustomerDetails' && <CustomerDetails />}
            </div>
        </div>
    );
};

export default DashboardPage;

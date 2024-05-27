import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import OrderList from '../components/DashboardComponents/OrderList';
import Customer from '../components/Customer';
import Chat from '../components/DashboardComponents/Chat';
import Wallet from '../components/DashboardComponents/Wallet';
import Analytics from '../components/DashboardComponents/Analytics';
import Favorites from '../components/DashboardComponents/Favorites';
import CustomerDetails from '../components/DashboardComponents/CutsomerDetails';
import Dashboard from '../components/DashboardComponents/Dashboard'; 
import Menu from '../components/DashboardComponents/Menu';

const DashboardPage = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleMenuItemClick = (componentName) => {
        console.log("Clicked component:", componentName);
        setActiveComponent(componentName);
    };

    console.log("Active component:", activeComponent);

    document.title = "Dashboard"; 

    return (
        <div className="bg-gray-200 h-full flex fixed w-full h-full">
            <div className="fixed"> 
                <SideMenu onMenuItemClick={handleMenuItemClick} />
            </div>
            <div className="pl-8 flex flex-col flex-grow overflow-auto ml-72 gap-4"> 
                {activeComponent === 'Dashboard' && <Dashboard/>}
                {activeComponent === 'Menu' && <Menu/>} 
                {activeComponent === 'Customer' && (
                    <>
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
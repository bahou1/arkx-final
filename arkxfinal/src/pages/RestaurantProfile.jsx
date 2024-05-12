import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ImgContainer from '../components/ImgContainer';
import Card from '../components/Card';
import Footer from '../components/Footerbot';

/**
 * Represents the RestaurantProfile component.
 * This component displays the profile of a restaurant, including its name, address, cover picture, and a list of cards.
 * The cards represent items available at the restaurant.
 */
const RestaurantProfile = () => {
    const [data, setData] = useState([]); // Stores the data fetched from the API
    const [loading, setLoading] = useState(true); // Indicates whether the data is still loading

    /**
     * Fetches the restaurant profile data from the API and updates the state.
     * This effect runs only once, when the component is mounted.
     */
    useEffect(() => {
        fetch('http://localhost:3000/api/restaurant-profile')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display a loading message while the data is being fetched
    }

    // Get the restaurant name, address, and cover picture from the data
    // Assuming the item at index 15 contains the required information
    const { restaurantName, restaurantAddress, coverPic } = data[0];

    return (
        <div>
            <Navbar/> {/* Render the navigation bar */}
            <ImgContainer restaurantName={restaurantName} restaurantAddress={restaurantAddress} coverPic={coverPic}/> {/* Render the image container */}
            <div className="grid grid-cols-4 gap-8 absolute right-5">
                {/* Render a list of cards for each item */}
                {data.slice(1).map((item, index) => (
                    <Card key={index} title={item.title} price={item.price} rating={item.rating} imgUrl={item.imgUrl} />
                ))}
            </div>
            <Footer/>
        </div>
    
    );
};

export default RestaurantProfile;

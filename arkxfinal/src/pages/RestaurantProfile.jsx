import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ImgContainer from '../components/ImgContainer';
import Card from '../components/Card';
import Filters from '../components/Filters.jsx';
import { HashLoader } from 'react-spinners';

const RestaurantProfile = () => {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/restaurant-profile')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <HashLoader color={"rgb(135, 169, 34)"} loading={loading} size={200} />
            </div>
        );
    }

    const { restaurantName, restaurantAddress, coverPic } = data[0];

    return (
        <div>
            <Navbar/> 
            <ImgContainer restaurantName={restaurantName} restaurantAddress={restaurantAddress} coverPic={coverPic}/> {/* Render the image container */}
            <div className="grid grid-cols-4 gap-5 absolute right-5">
                {data.slice(1).map((item, index) => (
                    <Card key={index} title={item.title} price={item.price} rating={item.rating} imgUrl={item.imgUrl} />
                ))}
            </div>
            <Filters/>
        </div>
    );
};

export default RestaurantProfile;
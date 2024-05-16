import React from 'react';
import { AiOutlineHeart, AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from 'react-icons/ai'; // Import the icons

const Menu = () => {
        // Define the data as a constant
        const data = {
            "menu": [
                {
                    "_id": "66410510159a6e7e2deb3e72",
                    "title": "moroccan-couscous",
                    "price": "150.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/moroccan-couscous.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e73",
                    "title": "zaalouk",
                    "price": "120.00 MAD",
                    "rating": 3,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/zaalouk.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e74",
                    "title": "what-to-eat-in-morocco",
                    "price": "200.00 MAD",
                    "rating": 5,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/what-to-eat-in-morocco.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e75",
                    "title": "harira-moroccan-food",
                    "price": "180.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2019/10/harira-moroccan-food.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e76",
                    "title": "sheep-head-food-morocco",
                    "price": "250.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/sheep-head-food-morocco.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e77",
                    "title": "sardines-chermoula",
                    "price": "170.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/sardines-chermoula.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e78",
                    "title": "moroccan-mint-tea",
                    "price": "50.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/moroccan-mint-tea.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e79",
                    "title": "moroccan-brochettes",
                    "price": "160.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/moroccan-brochettes.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e80",
                    "title": "snail-soup-morocco",
                    "price": "220.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/snail-soup-morocco.jpg"
                },
                {
                    "_id": "66410510159a6e7e2deb3e81",
                    "title": "tanjia",
                    "price": "200.00 MAD",
                    "rating": 4,
                    "imgUrl": "https://localadventurer.com/wp-content/uploads/2015/11/tanjia.jpg"
                }
            ]
    };


        return (
<div className="w-full gap-9 mt-4 mb-4 grid grid-cols-9 sm:grid-cols-9 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 pl-3 pr-3">
    {data.menu.map(item => (
        <div key={item._id} className="flex flex-col items-center gap-3 relative bg-white rounded-3xl pb-4">
            <div className="relative rounded-full w-64 h-64 bg-cover bg-center " style={{ backgroundImage: `url(${item.imgUrl})` }}>

            </div>
            <p className="text-xl font-lato font-medium">{item.price}</p>
            <div className="flex gap-4 mt-8">
                <div className="flex flex-col items-center">
                    <button 
                        className="rounded-2xl w-12 h-12 font-lato font-3xl flex items-center justify-center transition-colors duration-200 ease-in-out" 
                        style={{ backgroundColor: '#FFF0ED', color: '#FF6D4D' }}
                    >
                        <AiOutlineEdit size={23} />
                    </button>
                    <p>Edit</p>
                </div>
                <div className="flex flex-col items-center">
                    <button 
                        className="rounded-2xl w-12 h-12 font-lato font-3xl flex items-center justify-center transition-colors duration-200 ease-in-out" 
                        style={{ backgroundColor: '#DFF0FA', color: '#2D9CDB' }}
                    >
                        <AiOutlineEye size={23} />
                    </button>
                    <p>View</p>
                </div>
                <div className="flex flex-col items-center">
                    <button 
                        className="rounded-2xl w-12 h-12 font-lato font-3xl flex items-center justify-center transition-colors duration-200 ease-in-out" 
                        style={{ backgroundColor: '#D9F3EA', color: '#00B074' }}
                    >
                        <AiOutlineDelete size={23} />
                    </button>
                    <p>Delete</p>
                </div>
            </div>
        </div>
    ))}
</div>
        );
};

export default Menu;

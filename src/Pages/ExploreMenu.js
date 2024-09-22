import React, { useState, useEffect, useRef } from "react";
import "./ExploreMenu.css";

const ExploreMenu = () => {
    const[arr,setArr] = useState([
        {
            id:1,
            image: 'https://forkify-api.herokuapp.com/images/Lasagna2BSoup2B5002B050668ba78b8.jpg',
            name: 'Pasta'
        },
        {
            id:2,
            image: 'https://forkify-api.herokuapp.com/images/511078709ba0.jpg',
            name: 'Ice cream'
        },
        {
            id:3,
            image: 'https://forkify-api.herokuapp.com/images/quickandeasysushimak_67796_16x9b333.jpg',
            name: 'Sushi'
        },
        {
            id:4,
            image: 'https://forkify-api.herokuapp.com/images/29867_maple_grilled_salmon_6208d50.jpg',
            name: 'Fish'
        },
        {
            id:5,
            image: 'https://forkify-api.herokuapp.com/images/BakedGingerbreadMiniDonutscropped410x2734402.jpg',
            name: 'Donuts'
        },
        {
            id:6,
            image: 'https://forkify-api.herokuapp.com/images/3092_MEDIUMf610.jpg',
            name: 'Chocolate'
        },
        {
            id:7,
            image: 'https://forkify-api.herokuapp.com/images/fries4d41.jpg',
            name: 'Fries'
        },
        {
            id:8,
            image: 'https://forkify-api.herokuapp.com/images/1733_MEDIUM2ee0.jpg',
            name: 'Kebab'
        },
        {
            id:9,
            image: 'https://forkify-api.herokuapp.com/images/775145d523.jpg',
            name: 'Sausage'
        },
        {
            id:10,
            image: 'https://forkify-api.herokuapp.com/images/10864_RecipeImage_620x413_spicy_cinnamon_suger_popcorn4c22.jpg',
            name: 'popcorn'
        },
        {
            id:11,
            image: 'https://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg',
            name: 'Pizza'
        },
        {
            id:12,
            image: 'https://forkify-api.herokuapp.com/images/fruitsalad4c2f.jpg',
            name: 'Strawberry'
        },
    ]);
    

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += 1; // Adjust speed here
            scrollContainer.scrollLeft = scrollAmount;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0; // Reset to loop
            }
        };

        const interval = setInterval(scroll, 20); // Adjust interval for speed
        return () => clearInterval(interval); // Cleanup
    }, []);
    
  return (
    <div className="exploreMenu_conatiner">
    <div className="mini_explore">
        <h1>Explore our menu</h1>
        <div className="text">
            <p>
                Here is your diverse menu to choose the food according to your
                cravings, good food - good
            </p>
            <p>mood - good focus is our vision to achieve</p>
        </div>
        <div className="images" ref={scrollRef}>
            {arr.map((data, idx) => (
                <div className="img_name" key={idx}>
                    <img src={data.image} alt="food_img" />
                    <p>{data.name}</p>
                </div>
            ))}
            {/* Duplicate the images for seamless scrolling */}
            {arr.map((data, idx) => (
                <div className="img_name" key={`duplicate-${idx}`}>
                    <img src={data.image} alt="food_img" />
                    <p>{data.name}</p>
                </div>
            ))}
        </div>
    </div>
</div>
  );
};

export default ExploreMenu;

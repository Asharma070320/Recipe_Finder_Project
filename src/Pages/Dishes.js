import React, { useEffect, useState } from "react";
import "./Dishes.css";
import axios from "axios";

const Dishes = () => {
  const [value, setValue] = useState("");
  const [dish, setDish] = useState("pasta");
  const [receipes, setreceipes] = useState([]);

  const api = async () => {
    try {
      const fetchData = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${dish}`
      );
      setreceipes(fetchData.data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    api();
  }, [dish]);

  console.log(receipes);

const searchFoodBtn = () => {
    setDish(value)
}
console.log(dish,value);


  return (
    <>
      <div className="dishes_container">
        <div className="mini_container">
          <h1>Select Dishes What You Want To Eat</h1>
          <div className="inp_search">
            <input class="input" onChange={(e) => setValue(e.target.value)} placeholder="Search your favourite dishes" />
            <button onClick={searchFoodBtn}>Search</button>
          </div>
        </div>
      </div>
      <div className="cards_container">
        <div className="mini_cards_conatiner">
          {receipes.map((data, idx) => {
            return (
              <div key={idx} class="card shadow">
                <div className="upper">
                  <img src={data.image_url} alt="" />
                </div>
                <div className="lower">
                  <h4>{data.title}</h4>
                  <span>{data.publisher}</span> 
                  <button class="details_btn">
                    <p class="text">Deatils</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dishes;

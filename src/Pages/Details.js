import { useState } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";

const Details = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  // console.log(recipeId);

  useEffect(() => {
    getrecepies();
  }, []);

  const getrecepies = async () => {
    try {
      const res = await axios.get(
        `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
      );
      const data = res.data;
      setRecipe(data.recipe);
    } catch (error) {
      console.log(error);
    }
  };
//   console.log(recipe);

const[arr,setArr] = useState([])
const addToCart = (list) => {
    const update = [...arr,{list}];
    setArr(update)
}
console.log(arr);


  return (
    <>
      <div className="back_icon">
        <Link to={"/"}>
          <motion.button whileTap={{ scale: 0.9 }} className="backbtn">
            <IoMdArrowRoundBack />
          </motion.button>
        </Link>
      </div>
      <div className="details_container">
        <section className="left">
          <img src={recipe.image_url} alt="" />
        </section>
        <section className="right">
          <h2>{recipe.title}</h2>
          <p>Provided by: {recipe.publisher}</p>
          <h3>
            Ingredients :-<h5>{recipe.ingredients}</h5>
          </h3>
{/*           
          <button onClick={()=> addToCart(recipe)} class="cart_button">
            <span>Add to cart</span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <defs> </defs>{" "}
                <g id="cart">
                  {" "}
                  <circle
                    r="1.91"
                    cy="20.59"
                    cx="10.07"
                    class="cls-1"
                  ></circle>{" "}
                  <circle r="1.91" cy="20.59" cx="18.66" class="cls-1"></circle>{" "}
                  <path
                    d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                    class="cls-1"
                  ></path>{" "}
                  <polyline
                    points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                    class="cls-1"
                  ></polyline>{" "}
                </g>{" "}
              </g>
            </svg>
          </button> */}
        </section>
      </div>
    </>
  );
};

export default Details;

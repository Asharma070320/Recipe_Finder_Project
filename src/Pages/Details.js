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
  console.log(recipe);

  return (
    <>
      <div className="back_icon">
      <Link to={'/'}><motion.button whileTap={{scale:0.9}} className='backbtn'><IoMdArrowRoundBack /></motion.button></Link>
      </div>
      <div className="details_container">
        <section className="left">
            <img src={recipe.image_url} alt="" />
        </section>
        <section className="right">
        <h2>{recipe.title}</h2>
            <p>Provided by: {recipe.publisher}</p>
            <h3>Ingredients :-<h5>{recipe.ingredients}</h5></h3>
            
            {/* <button>Add to cart</button> */}
            <p>Add To Cart button</p>
        </section>
      </div>
    </>
  );
};

export default Details;

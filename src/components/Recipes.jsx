/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    },[])

    return (
        <div className=" lg:w-2/3  grid grid-cols-1 md:grid-cols-2  gap-5">

           {
            recipes.map(recipe => (
                <div key={recipe.recipe_id} className="card card-compact bg-base-100  shadow-xl p-5 border">
                    <figure>
                        <img
                        className="h-[200px] w-full"
                        src={recipe.image}
                        alt="Recipe" />
                    </figure>
                    <div className="mt-4">
                        <h2 className="card-title font-bold text-2xl">{recipe.recipe_name}</h2>
                        <p className="mt-4">{recipe.short_description}</p>
                        <h3 className="text-md font-bold text-gray-700 mt-4">Ingredients: {recipe.ingredients.length} </h3>
                        <ul className="ml-4 mt-4">
                            {
                                recipe.ingredients.map((item, index) => <li className="list-[square] ml-5 text-gray-600" key={index}>{item}</li> )
                            }
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <p className="font-semibold"><i className="fa-regular fa-clock "></i> {recipe.preparing_time} Min</p>
                            <p className="font-semibold"><i className="fa-solid fa-fire-flame-curved "></i> {recipe.calories} calories</p>
                        </div>
                        <div className="card-actions justify-start mt-6">
                            <button onClick={() => addRecipeToQueue(recipe)} className=" btn rounded-full bg-green-500 px-8 font-bold hover:bg-yellow-400 "> Want to Cook </button>
                        </div>
                    </div>
                </div>
            ))
           }
        </div>
    );
};

export default Recipes;
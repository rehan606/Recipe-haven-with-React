/* eslint-disable react/prop-types */


const Sidebar = ({recipeQueue, handleRemove, prepareRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {
    return (
        <div className="lg:w-1/3">
            <div className=" border p-4 rounded-xl">
                <div className="text-center bg-green-200 pt-3 border-b ">
                    <h2 className="font-bold text-xl text-gray-600 pb-3">Want to Cook: {recipeQueue.length}</h2>
                </div>

                {/* Want to Cook Table Content  */}
                <div className=" overflow-x-auto lg:overflow-x-hidden">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {/* Table Body  */}
                        <tbody>
                            {
                                recipeQueue.map((recipe, index) =>
                                    <tr key={index} className="hover:bg-green-200 rounded-lg">
                                        <th>{index + 1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time}</td>
                                        <td>{recipe.calories}</td>
                                        <td> <button onClick={()=> {
                                             handleRemove(recipe.recipe_id) 
                                             calculateTimeAndCalories (recipe.preparing_time, recipe.calories)
                                        }}  
                                        className="btn rounded-full bg-green-500  hover:bg-yellow-400">Preparing</button> </td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>

                {/* Currntlly Cook Table Header  */}
                <div className="text-center border bg-green-200  mt-5">
                    <h2 className="font-bold text-xl text-gray-600 p-3">Currently Cooking: {prepareRecipe.length}</h2>
                </div>

                {/* Currntlly Cook Table content  */}
                <div className="overflow-x-auto lg:overflow-x-hidden">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time </th>
                                <th>Calories</th>
                                <th>Image</th>
                            </tr>
                        </thead>

                        {/* Table Body  */}
                        <tbody>
                            {
                                prepareRecipe.map((recipe, index) =>
                                    <tr key={index} className="hover:bg-green-200 rounded-lg">
                                        <th className="w-4">{index + 1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td >{recipe.preparing_time}</td>
                                        <td>{recipe.calories}</td>
                                        <td> <img className="w-9 h-6" src={recipe.image} alt="" /></td>
                                        
                                    </tr>
                                )
                            }

                            <tr className="bg-green-200 rounded-lg">
                                <td></td>
                                <td className="font-bold " colSpan="2"> Total Time = {totalTime} Min</td>
                                <td className="font-bold" > Total = {totalCalories} Calories</td>
                                <td></td>
                                
                            </tr>

                            
                            
                        </tbody>

                        
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
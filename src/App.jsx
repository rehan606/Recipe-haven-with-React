
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecepies from './components/OurRecipes'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([])
  const [prepareRecipe, setPrepareRecipe] = useState([])
  const [totalTime, setTotalTime] =useState(0)
  const [totalCalories, setTotalCalories] =useState(0)

  const addRecipeToQueue = recipe => {

    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)

    if(!isExist){
      const newRecipe = [...recipeQueue, recipe]
      setRecipeQueue(newRecipe)
    }
    else{
      alert("Recipe Already Exist in the queue")
    }

  }

  const handleRemove = id => {
    // Find which recipe to remove 
    const deleteRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    // Remove recipe from Table 
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)

    const newCooking = [...prepareRecipe, deleteRecipe]
    setPrepareRecipe(newCooking)
  }

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
    
  }

  return (
    <>
      <div className='container mx-auto px-4'>
        {/* Heade Section */}
        <Header></Header>

        {/* Banner Section */}
        <Banner></Banner>

        {/* Our Recipes Section  */}
        <OurRecepies></OurRecepies>

        <section className='flex flex-col lg:flex-row gap-4'>
          {/* Recipes items section  */}
          <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>

          {/* Sidebar Section  */}
          <Sidebar 
            recipeQueue={recipeQueue} 
            handleRemove={handleRemove} 
            prepareRecipe={prepareRecipe} 
            calculateTimeAndCalories={calculateTimeAndCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </section>

          
      </div>
      {/* Footer section  */}
      <Footer></Footer>
    </>
  )
}

export default App

"use client";
import { useState, useEffect } from "react";

export default function mealIdeas ({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas =async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            const data = await response.json();

            const mealList = data.meals || [];

            setMeals(mealList);
        }    
        catch (error) {
            console.error('Error fetching meal ideas')
        }
    };

    useEffect(() => {
        fetchMealIdeas(ingredient);
    }, [ingredient]);

    return(
        <div>
            <h1>Meal Ideas with {ingredient}:</h1>
            <ul>
                {meals.map((meal) => (
                    <li key ={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meals.strMealThumb} alt={meals.strMeal} />
                        <p>{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


import { useState } from "react";
import axios from "axios";

export default function App() {
    // for taking input from user
    const [searchFor, setSearchFor] = useState("");
    // if user enter wrong meal
    const [showError, setShowError] = useState("");
    // for ingredients
    const [ingredients, setIngredients] = useState([]);

    // for storing meal details
    const [data, setData] = useState({});

    const getData = async () => {
        setShowError("");
        const tempSearchFor = searchFor.trim();
        if (tempSearchFor != "") {
            const result = await axios
                .get(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFor}`
                )
                .then((response) => response.data.meals[0])
                .catch(() => {
                    setShowError("please enter valid Meal name");
                    setSearchFor("");
                    setData({});
                });

            if (searchFor.length > 0) {
                const meal = result.strMeal;
                const instruction = result.strInstructions;
                const imgSrc = result.strMealThumb;

                const ingredients = [];
                for (const item in result) {
                    if (item.includes("strIngredient") && result[item] !== "") {
                        ingredients.push(result[item]);
                    }
                }
                setIngredients([...ingredients]);

                const measures = [];
                for (const item in result) {
                    if (item.includes("strMeasure") && result[item] !== "") {
                        measures.push(result[item]);
                    }
                }

                const ingredientsMeasure = {};
                ingredients.forEach(
                    (key, index) => (ingredientsMeasure[key] = measures[index])
                );

                setData({
                    meal,
                    instruction,
                    imgSrc,
                    ingredientsMeasure,
                    measures,
                });

                setSearchFor("");
            }
        }
    };

    return (
        <>
            <div className="py-10 flex justify-center space-x-5 my-5 mx-5 rounded-md shadow-2xl sticky top-0 bg-gray-800">
                <input
                    className="text-center bg-transparent border-2 rounded py-1 md:w-[70%] outline-none"
                    type="text"
                    value={searchFor}
                    placeholder="Meal Name"
                    onChange={(e) => setSearchFor(e.target.value)}
                />
                <button
                    className="bg-yellow-400 px-5 text-gray-900 font-semibold rounded-sm"
                    onClick={getData}
                >
                    Submit
                </button>
            </div>

            {showError.length >= 1 && (
                <p className="p-5 mx-5 rounded-md shadow-2xl bg-gray-800">
                    {showError}
                </p>
            )}

            {ingredients.length >= 1 && (
                <>
                    <div className="flex flex-col justify-around md:items-start px-5 md:flex-row">
                        <div className="bg-gray-800 p-5 rounded">
                            <img
                                className="w-60 rounded-md mx-auto"
                                src={data.imgSrc}
                                alt=""
                            />
                            <p className="text-center mt-3 text-lg font-semibold">
                                {data.meal}
                            </p>
                        </div>
                        <div className="bg-gray-800 p-5 rounded my-5 md:mt-0">
                            <p className="text-yellow-400 text-xl font-semibold text-center pb-5">
                                Ingredients
                            </p>
                            {ingredients.map((key, index) => (
                                <p
                                    className="flex justify-between space-x-8"
                                    key={index}
                                >
                                    <span>{key}</span>
                                    <span>{data.ingredientsMeasure[key]}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-800 p-5 m-5 rounded">
                        <p className="text-yellow-400 text-center text-xl font-semibold mb-3">
                            Instruction
                        </p>
                        <p className="text-justify">{data.instruction}</p>
                    </div>
                </>
            )}
        </>
    );
}

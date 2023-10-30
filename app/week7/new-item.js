"use client";
import { useState } from "react";
import ItemList from "./item-list";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {

        setQuantity(quantity + 1);
    };

    const decrement = () => {

        setQuantity(quantity - 1)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };

        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        event.preventDefault();
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value);
    };

    return (
        <main className="flex items-center justify-center h-screen">
            <div className="bg-gray-300 p-6 rounded-lg text-center">
                <form onSubmit={handleSubmit}>
                    <div className="bg-gray-100 p-4">
                        <div className="text-blue-500 font-bold">Item Name:</div>
                        <input
                            required
                            onChange={handleNameChange}
                            value={name}
                            className="block w-full p-2 mt-2 text-black border border-gray-300"
                        />
                    </div>

                    <div className="bg-gray-100 p-4 mt-4">
                        <div className="text-blue-500 font-bold">Quantity:</div>
                        <div className="flex justify-between items-center mt-2">
                            <button
                                type="button"
                                onClick={decrement}
                                className="px-3 py-1 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
                            >
                                -
                            </button>
                            <p className="text-blue-500">{quantity}</p>
                            <button
                                type="button"
                                onClick={increment}
                                className="px-3 py-1 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 mt-4">
                        <div className="text-blue-500 font-bold">Category:</div>
                        <select
                            id="categories"
                            name="categories"
                            onChange={handleCategoryChange}
                            value={category}
                            className="block w-full p-2 mt-2 text-black border border-gray-300"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen goods">Frozen Goods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="block w-full p-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </main>
    )
}
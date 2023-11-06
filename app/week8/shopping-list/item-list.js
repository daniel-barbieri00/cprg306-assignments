"use client";
import React, { useState } from 'react';
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {

    const [sortBy, setSortBy] = useState("name");

    if (sortBy === "name") {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <div>
                <button
                    onClick={() => setSortBy("name")}
                    style={{
                        backgroundColor: sortBy === "name" ? "cadetblue" : "white",
                        padding: "20px", borderRadius: "5px", margin: "12px",
                        color: sortBy === "name" ? "white" : "black"
                    }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    style={{
                        backgroundColor: sortBy === "category" ? "cadetblue" : "white",
                        padding: "20px", borderRadius: "5px",
                        color: sortBy === "category" ? "white" : "black"
                    }}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {items.map((item) => (
                    <Item key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={onItemSelect}/>
                ))}
            </ul>
        </div>
    );
}

        

"use client";
import React, { useState } from 'react';
import Item from "./Item";
import Items from './item.json';

export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...Items]

    if (sortBy === "name") {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
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
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
}

        

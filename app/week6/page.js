"use client";
import React, { useState } from 'react';
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (NewItem) => {
        setItems([...items, NewItem])
    };

    return (
        <main>
            <h1 className="text-4x1 font-bold m-6 text-center text-yellow-300">
                Shopping List
            </h1>

            <ItemList items={items} />

            <NewItem onAddItem={handleAddItem} />
        </main>
    );
}
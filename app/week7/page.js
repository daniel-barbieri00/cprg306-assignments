"use client";
import React, { useState } from 'react';
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import MealIdeas from './meal-ideas.js';

// function to call on strings to remove emojis
function cleanName(input) {

    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FAB0}-\u{1FABF}\u{2B50}\u{1F004}\u{1F0CF}]+/gu;

    const stringWithoutEmojis = input.replace(emojiRegex, '');

    const cleanedName = stringWithoutEmojis.split(',')[0].trim();

    return cleanedName;
}

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState();

    const handleAddItem = (NewItem) => {
        setItems([...items, NewItem])
    };

    const handleItemSelect = (selectedItem) => {
    let cleanedName = '';
    if (selectedItem) {
      cleanedName = cleanName(selectedItem);
      console.log('item selected:', selectedItem, cleanedName);
    }
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
        <div style={leftSideStyles}>
            <h1 style={headerStyles} className="text-4x1 font-bold m-6 text-center text-yellow-300">
                Shopping List
            </h1>

            <NewItem onAddItem={handleAddItem} />

            <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div style={rightSideStyles}>
            <MealIdeas ingredient={selectedItemName} />
        </div>
    </main>
    );
}

//Styling sheets for page below

const leftSideStyles = {
    float: "left",
    width: "50%",
    padding: "10px",
    };

    const rightSideStyles = {
    float: "right",
    width: "50%",
    padding: "10px",
    };

    const headerStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    };

    //------------------------------styles end
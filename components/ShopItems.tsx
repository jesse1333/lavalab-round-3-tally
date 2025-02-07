import React from "react";
import Item from "./Item";

export const ShopItems = ({ searchQuery, sortOrder }: { searchQuery: string; sortOrder: string }) => {
  const items = [
    { imagePath: "/assets/shirts/red-shirt.png", altName: "red-shirt", itemName: "Gildan T-Shirt - Red / M", startingQty: 13, qtyPCs: 24, type: 1 },
    { imagePath: "/assets/shirts/red-shirt.png", altName: "red-shirt", itemName: "Gildan T-Shirt - Red / L", startingQty: 46, qtyPCs: 24, type: 2 },
    { imagePath: "/assets/shirts/black-shirt.png", altName: "black-shirt", itemName: "Gildan T-Shirt - Black / S", startingQty: 21, qtyPCs: 24, type: 1 },
    { imagePath: "/assets/shirts/black-shirt.png", altName: "black-shirt", itemName: "Gildan T-Shirt - Black / M", startingQty: 34, qtyPCs: 24, type: 2 },
    { imagePath: "/assets/shirts/black-shirt.png", altName: "black-shirt", itemName: "Gildan T-Shirt - Black / L", startingQty: 27, qtyPCs: 24, type: 2 },
    { imagePath: "/assets/shirts/white-shirt.png", altName: "white-shirt", itemName: "Gildan T-Shirt - White / S", startingQty: 34, qtyPCs: 24, type: 1 },
    { imagePath: "/assets/shirts/white-shirt.png", altName: "white-shirt", itemName: "Gildan T-Shirt - White / M", startingQty: 51, qtyPCs: 24, type: 2 },
    { imagePath: "/assets/shirts/white-shirt.png", altName: "white-shirt", itemName: "Gildan T-Shirt - White / L", startingQty: 29, qtyPCs: 24, type: 2 }
  ];

  const filteredItems = items.filter(item => item.itemName.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.itemName.localeCompare(b.itemName); // A-Z (ascending)
    } else {
      return b.itemName.localeCompare(a.itemName); // Z-A (descending)
    }
  });

  return (
    <div>
      {sortedItems.map((item, index) => (
        <div style={{ paddingTop: "2.5%" }} key={index}>
          <Item 
            imagePath={item.imagePath} 
            altName={item.altName} 
            itemName={item.itemName} 
            startingQty={item.startingQty} 
            qtyPCs={item.qtyPCs} 
            type={item.type} 
          />
        </div>
      ))}
    </div>
  );
};

export default ShopItems;

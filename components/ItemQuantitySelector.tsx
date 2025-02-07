import React, { useState } from 'react';
import './ItemQuantitySelector.css'; 
import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';

interface ItemsProps {
   startingQty: number;  
   qtyPCs: number;   
   type: number;
}

const ItemQuantitySelector = ( {startingQty, qtyPCs, type} : ItemsProps) => {
  const [count, setCount] = useState(startingQty);

  const handleDecrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); 
  };

  return (
    <div className="quantity-master-container" style={{ display: "flex", flexDirection: "row" }}>
      {/* MINUS */}
      <div className="minus-button">
        <IconButton onClick={handleDecrement} style={{ marginTop: "29%" }}>
          <Image
            src="../assets/minus.svg"
            alt="minus-sign"
            width={20} 
            height={20}
          />
        </IconButton>
      </div>

      {/* CENTER BOX */}
      {type === 1 && (
         <div className="center-box">
         {/* Inner Text */}
         <div>
           <Typography style={{ fontSize: "20px", fontFamily: "Uncut Sans" }}>
             {count}
           </Typography>
             <div className="inner-bottom-bold-box">
                <Typography style={{ fontSize: "10px", fontFamily: "Uncut Sans", color: "white" }}>
                   {qtyPCs} PCS
                </Typography>
             </div>
         </div>
       </div>
      )}

      {type === 2 && (
         <div className="center-box" style={{ backgroundColor: "white", border: "1px solid #D4D4D4" }}>
           {/* Inner Text */}
           <div>
             <Typography style={{ fontSize: "20px", fontFamily: "Uncut Sans" }}>
               {count}
             </Typography>
               <div className="inner-bottom-bold-box" style={{ backgroundColor: "#F2F2F2", borderTop: "1px solid #D4D4D4" }}>
                  <Typography style={{ fontSize: "10px", fontFamily: "Uncut Sans", color: "#808080" }}>
                     {qtyPCs} PCS
                  </Typography>
               </div>
           </div>
         </div>
      )}

      {/* PLUS */}
      <div className="plus-button">
        <IconButton onClick={handleIncrement} style={{ marginTop: "8%" }}>
          <Image
            src="../assets/plus.svg"
            alt="plus-sign"
            width={20} 
            height={20} 
          />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemQuantitySelector;

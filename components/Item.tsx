import { Box, Typography } from "@mui/material"
import Image from "next/image";
import ItemQuantitySelector from "./ItemQuantitySelector";

interface ItemsProps {
   imagePath: string;  
   altName: string;   
   itemName: string;
   startingQty: number;
   qtyPCs: number;
   type: number;
}

const Item = ({imagePath, altName, itemName, startingQty, qtyPCs, type } : ItemsProps) => {

   return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", paddingBottom: "1%" }}>
         <div style={{ display: "flex", alignItems: "center" }}>
            <Image
               src={imagePath}
               alt={altName}
               width={50} 
               height={50}  
               style={{
               padding: "8px",
               backgroundColor: "#FAFAFA",
               border: '1.5px solid #DEDEDE',  
               borderRadius: '8px', 
               }}
            />
            <Typography style={{ paddingLeft: "20px", fontFamily: "Uncut Sans" }}>
               {itemName}
            </Typography>
         </div>

         <ItemQuantitySelector startingQty={startingQty} qtyPCs={qtyPCs} type={type} />
      </div>

   )
}

export default Item;
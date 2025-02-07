import * as React from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';

export default function SortButton({imagePath, altName, onClick }: { imagePath: string; altName: string; onClick: () => void }) {
  
  return (
   <IconButton onClick={onClick}>
      <Image
        src= {imagePath}
        alt={altName}
        width={30} 
        height={30}
      />
   </IconButton>
  );
}

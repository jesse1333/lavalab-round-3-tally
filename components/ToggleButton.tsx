import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';

const theme = createTheme({
  typography: {
    fontFamily: '"Uncut Sans", sans-serif',
  },
});

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
   <div style={{paddingBottom: "10px"}}>
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
      >
        <ToggleButton
            value="Inventory"
            style={{fontFamily: "Uncut Sans"}}
            sx={{
               textTransform: 'none', 
            }}
         >
            Inventory
         </ToggleButton>
         
        <ToggleButton 
            value="Order Queue"
            style={{fontFamily: "Uncut Sans"}}
            sx={{
               textTransform: 'none', 
            }}
         >
           Order Queue
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
   </div>
  );
}

import { Box, Button, Typography } from "@mui/material";
import ToggleButtons from "../components/ToggleButton"; 
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import ShopItems from "./ShopItems";
import { useState } from "react"; 

export default function MainMenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); 
  
  // Handle the sort button click
  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div style={{ position: "absolute", top: "5%", left: "20%" }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Outside Box Elements */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <Typography variant="h6" sx={{ color: '#1A1A1A' }} style={{ marginLeft: "10px", fontFamily: "" }}>
              Materials{' '}
              <Typography variant="h6" component="span" style={{ fontFamily: "Uncut Sans" }} sx={{ color: '#AAAAAA' }}>
                / Blanks
              </Typography>
            </Typography>

            {/* Toggle button for direction */}
            <ToggleButtons />
          </div>

          {/* Inside Box Elements */}
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '2px solid #DEDEDE',
              padding: '16px',
              width: '900px',
              textAlign: 'center',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
          >
            {/* Search Bar */}
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <SearchBar setSearchQuery={setSearchQuery} />

              {/* Sort Button */}
              
              <div style={{ display: "flex" }}>
                <SortButton imagePath={"/assets/filter.svg"} altName={"filter"} onClick={handleSort} />
                <SortButton imagePath={"/assets/sort.svg"} altName={"sort"} onClick={handleSort} />
              </div>


              {/* Add New Button */}
              <Button
                variant="contained"
                startIcon={<img src="/assets/plus-white.svg" alt="plus icon" width={15} height={15} />}
                sx={{
                  backgroundColor: '#444EAA',
                  fontSize: '12px',
                  fontFamily: 'Uncut Sans',
                  padding: '4px 16px',
                  minWidth: '120px',
                  height: '36px',
                  marginLeft: 'auto',
                }}
              >
                Add New
              </Button>
            </div>

            {/* Shop Items with filtered items based on search query and sort order */}
            <ShopItems searchQuery={searchQuery} sortOrder={sortOrder} />
          </Box>
        </div>
      </Box>
    </div>
  );
}

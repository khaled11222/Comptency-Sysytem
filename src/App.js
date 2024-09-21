import "./App.css";
import CustomTabs from "./CustomTabs";
import FilterBySkills from "./FilterSection";
import Header from "./Header";
import { CourseCard } from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";
import React, { useState } from "react";
import ResponsiveCard from "./ResponsiveCard";
import "./App.css";
import { Box, Button, Grid } from "@mui/material";

// import Header from './Header';

const skills = [
  { name: "Analytical Skills", selected: true },
  { name: "Social Skills", selected: false },
  { name: "Cognitive Skills", selected: true },
  { name: "Personal Skills", selected: false },
  { name: "Intellectual Skills", selected: false },
];

const categories = [
  { name: "Business Administration", selected: true },
  { name: "Engineering", selected: false },
  { name: "Information Technology", selected: true },
  { name: "Biotechnology", selected: false },
  { name: "Environmental Engineering", selected: false },
  { name: "Management of Technology", selected: false },
];

function App() {
  const [selectedSkills, setSelectedSkills] = useState(skills);
  const [selectedCategories, setSelectedCategories] = useState(categories);

  const clearSelection = () => {
    setSelectedSkills((prev) =>
      prev.map((skill) => ({
        ...skill,
        selected: false,
      }))
    );
    setSelectedCategories((prev) =>
      prev.map((category) => ({
        ...category,
        selected: false,
      }))
    );
  };

  return (
    <div className="App">
      <Header />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 2,
            }}
          >
            <FilterBySkills data={selectedSkills} />
            <FilterBySkills data={selectedCategories} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={clearSelection}
                sx={{
                  backgroundColor: "#007AC3",
                  padding: "9px 13px 9px 11px",
                }}
              >
                Clear Selection
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <CustomTabs />
          </Box>
        </Grid>
      </Grid>
      <ResponsiveCard />
    </div>
  );
}

export default App;

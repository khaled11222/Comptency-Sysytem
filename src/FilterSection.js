import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { FilterAlt as FilterIcon } from "@mui/icons-material";

const FilterBySkills = ({ data }) => {
  const [selectedSkills, setSelectedSkills] = useState(data);

  const handleSkillClick = (index) => {
    const newSkills = [...selectedSkills];
    newSkills[index].selected = !newSkills[index].selected;
    setSelectedSkills(newSkills);
  };
console.log(data);
 

  return (
    <Box
      sx={{
        width: 300,
        padding: 2,
        backgroundColor: "#fff",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Box sx={{ marginBottom: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <FilterIcon sx={{ marginRight: 1 }} />
          <Typography variant="h6">Filter By Skills</Typography>
        </Box>
        {selectedSkills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              color: skill.selected ? "#1976d2" : "black",
              backgroundColor: skill.selected ? "#b3e5fc" : "white",
              padding: "4px 8px",
              borderRadius: "4px",
              marginBottom: "4px",
            }}
            onClick={() => handleSkillClick(index)}
          >
            <Typography variant="body1">{skill.name}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: skill.selected ? "white" : "grey",
                color: skill.selected ? "#1976d2" : "black",
              }}
            >
              <Typography variant="body2">5</Typography>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default FilterBySkills;

import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import BriefcaseIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import { CardList } from "./components/CardList/CardList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value == index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function CustomTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "16px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs example"
        centered
        TabIndicatorProps={{ style: { display: "none" } }} // Hide the underline
        sx={{
          "& .MuiTab-root": {
            margin: "0 8px",
            minWidth: "100px",
            borderRadius: "8px",
            minHeight: "40px",
            height: "40px",
          },
        }} // Decrease size and add border radius
      >
        <Tab
          icon={<BookIcon />}
          iconPosition="start"
          label="Academic Courses"
          value={1}
          sx={{
            color: "#4B5563",
            textTransform: "none",
            fontSize: "14px", // Decrease font size
            fontWeight: 600,
            flexDirection: "row",
            padding: "8px 12px 8px 8px",
            borderRadius: 6,
            margin: "4px", // Separate tabs
            backgroundColor: "white",
            "&.Mui-selected": { backgroundColor: "#E0F2FE", color: "#00629C" },
          }}
        />
        <Tab
          icon={<BriefcaseIcon />}
          iconPosition="start"
          label="Extra Courses"
          value="2"
          sx={{
            color: "#4B5563",
            textTransform: "none",
            maxHeight: 40,
            fontSize: "14px", // Decrease font size
            fontWeight: 600,
            flexDirection: "row",
            padding: "8px, 12px, 8px, 8px",
            borderRadius: 6,
            margin: "4px", // Separate tabs
            backgroundColor: "white",
            "&.Mui-selected": { backgroundColor: "#E0F2FE", color: "#00629C" },
          }}
        />
        <Tab
          icon={<PeopleIcon />}
          iconPosition="start"
          label="Clubs"
          value="3"
          sx={{
            color: "#4B5563",
            textTransform: "none",
            maxHeight: 40,
            fontSize: "14px", // Decrease font size
            fontWeight: 600,
            flexDirection: "row",
            padding: "8px, 12px, 8px, 8px",
            borderRadius: 6,
            margin: "4px", // Separate tabs
            backgroundColor: "white",
            "&.Mui-selected": { backgroundColor: "#E0F2FE", color: "#00629C" },
          }}
        />
      </Tabs>
      <TabPanel index={1} value={value}>
        <CardList />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <CardList withImage />
      </TabPanel>
      <TabPanel index={3} value={value}>
        Item Three
      </TabPanel>
    </Box>
  );
}

export default CustomTabs;

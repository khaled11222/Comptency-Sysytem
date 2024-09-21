import React from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import BriefcaseIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import { CardList } from "./components/CardList/CardList";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "4px",
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});

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
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs example"
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
        <Box
          display="flex"
          alignItems="center"
          marginLeft={"auto"}
          marginRight={3}
        >
          <CustomTextField
            variant="outlined"
            placeholder="Search Courses"
            InputProps={{
              sx: {
                height: 38,
                width: 206,
              },
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "8px" }}
          >
            Find
          </Button>
        </Box>
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

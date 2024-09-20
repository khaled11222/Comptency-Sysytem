import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import BriefcaseIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';

function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: '16px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs example"
        centered
        TabIndicatorProps={{ style: { display: 'none' } }} // Hide the underline
        sx={{ '& .MuiTab-root': { margin: '0 8px', minWidth: '100px', borderRadius: '8px' } }} // Decrease size and add border radius
      >
        <Tab
          icon={<BookIcon />}
          iconPosition="start"
          label="Academic Courses"
          sx={{
            color: 'darkblue',
            fontSize: '14px', // Decrease font size
            fontWeight: 'bold',
            flexDirection: 'row',
            padding: '6px 12px', // Decrease height
            margin: '4px', // Separate tabs
            '&:hover': { backgroundColor: '#e0f7fa' }, // Background color on hover
            '&.Mui-selected': { backgroundColor: '#e0f7fa' }, // Background color when selected
            borderRadius: '8px' // Border radius for each tab
          }}
        />
        <Tab
          icon={<BriefcaseIcon />}
          iconPosition="start"
          label="Extra Courses"
          sx={{
            color: 'darkblue',
            fontSize: '14px', // Decrease font size
            fontWeight: 'bold',
            flexDirection: 'row',
            padding: '6px 12px', // Decrease height
            margin: '4px', // Separate tabs
            '&:hover': { backgroundColor: '#e0f7fa' }, // Background color on hover
            '&.Mui-selected': { backgroundColor: '#e0f7fa' }, // Background color when selected
            borderRadius: '8px' // Border radius for each tab
          }}
        />
        <Tab
          icon={<PeopleIcon />}
          iconPosition="start"
          label="Clubs"
          sx={{
            color: 'darkblue',
            fontSize: '14px', // Decrease font size
            fontWeight: 'bold',
            flexDirection: 'row',
            padding: '6px 12px', // Decrease height
            margin: '4px', // Separate tabs
            '&:hover': { backgroundColor: '#e0f7fa' }, // Background color on hover
            '&.Mui-selected': { backgroundColor: '#e0f7fa' }, // Background color when selected
            borderRadius: '8px' // Border radius for each tab
          }}
        />
      </Tabs>
    </Box>
  );
}

export default CustomTabs;

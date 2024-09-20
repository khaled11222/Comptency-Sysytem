import React from 'react';
import { Card, CardContent, Typography, Chip, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const EnrollButton = styled(Button)({
  background: '#1E88E5',
  color: 'white',
  marginTop: '16px',
  '&:hover': {
    background: '#1565C0',
  },
});

const ResponsiveCard = () => {
  return (
    <Card sx={{ maxWidth: 600, padding: 2, borderRadius: '10px' }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
          OPMG 405
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#0D47A1', mb: 2 }}>
          Project Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Typography variant="body2" sx={{ backgroundColor: '#2196F3', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>
            School of Business Administration
          </Typography>
          <Typography variant="body2" sx={{ backgroundColor: '#FFEB3B', color: 'black', padding: '2px 8px', borderRadius: '4px' }}>
            Cognitive Skills
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Chip label="General Business and Entrepreneurship" sx={{ backgroundColor: '#F44336', color: 'white' }} />
          <Chip label="Analytical skills" sx={{ backgroundColor: '#4CAF50', color: 'white' }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <EnrollButton variant="contained">Enroll</EnrollButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;

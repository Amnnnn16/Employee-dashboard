import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import rakeshSharma from './assets/rakesh_sharma.jpg'; 

const EmployeeCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={rakeshSharma}
        alt="Rakesh Sharma"
      />
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold">
          Employee of the Month 👑
        </Typography>
        <Box mt={2}>
          <Typography variant="h6" component="div" >
            Rakesh Sharma
          </Typography>
          <Typography variant="body2" color="text.secondary">
            UI/UX Designer
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;

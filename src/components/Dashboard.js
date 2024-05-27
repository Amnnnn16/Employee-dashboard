import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import EmployeeTable from './EmployeeTable';
import EmployeeCard from './EmployeeCard';
  import kodersLogo from './assets/Koders.png'; 

const Dashboard = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Container maxWidth="lg" className="dashboard">
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
        }}
      >
        <img src={kodersLogo} alt="Koders Logo" style={{ height: 100 }} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom className="dashboard-title">
            Employees Activity Dashboard
          </Typography>
          <Typography variant="subtitle1" className="dashboard-subtitle">
            {formattedDate} | {formattedTime}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <EmployeeTable />
        </Grid>
        <Grid item xs={12} md={4}>
          <EmployeeCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

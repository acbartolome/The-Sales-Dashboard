import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function WelcomeToDashboard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          DASHBOARD
        </Typography>
        <Typography variant="h6" component="div" sx={{
        color: 'green'
      }}>
          Welcome to your dashboard
        </Typography>
      </CardContent>
    </Card>
  );
}

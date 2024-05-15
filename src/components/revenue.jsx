import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { mockTransactions } from '../../mockData';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const totalRevenue = mockTransactions.reduce((accumulator, customer) => accumulator + parseInt(customer.cost), 0)

const card = (
  <React.Fragment>
    <CardContent>
      <AttachMoneyIcon sx={{
        color: 'green'
      }}/>
      <Typography variant="h5" component="div">
        Revenue Generated
      </Typography>
      <Typography variant="h5" component="div" sx={{
        color: 'green',
      }}>
      ${totalRevenue}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function TotalRevenue() {
  return (
    <>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </>
  );
}

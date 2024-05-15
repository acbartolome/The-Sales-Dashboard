import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { mockTransactions } from '../../mockData';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

const numberOfSales = mockTransactions.reduce((accumulator, customer) => accumulator + 1, 0)

const card = (
  <React.Fragment>
    <CardContent>
      <PointOfSaleIcon sx={{
        color: 'green'
      }}/>
      <Typography variant="h5" component="div">
        Number of Sales
      </Typography>
      <Typography variant="h5" component="div" sx={{
        color: 'green',
      }}>
      {numberOfSales}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function NumberOfSales() {
  return (
    <>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </>
  );
}

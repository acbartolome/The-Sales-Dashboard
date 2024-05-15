import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { mockTransactions } from '../../mockData';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// correct code to only record new instances of customers
// multiple same cutomer purchases
const uniqueCustomerIds = new Set(); // For unique ID approach
const newCustomers = mockTransactions.filter(customer => {
  const isNew = !uniqueCustomerIds.has(customer.txId); // Check for unique ID
  if (isNew) {
    uniqueCustomerIds.add(customer.txId);
  }
  return isNew;
});

const totalNewCustomers = newCustomers.reduce((acc, _) => acc + 1, 0);

const card = (
  <React.Fragment>
    <CardContent>
      <PersonAddIcon sx={{
        color: 'green'
      }}/>
      <Typography variant="h5" component="div">
        New Customers
      </Typography>
      <Typography variant="h5" component="div" sx={{
        color: 'green',
      }}>
      {totalNewCustomers}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function NewCustomers() {
  return (
    <>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </>
  );
}

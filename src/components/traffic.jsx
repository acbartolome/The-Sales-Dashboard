import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrafficIcon from '@mui/icons-material/Traffic';

const card = (
  <React.Fragment>
    <CardContent>
      <TrafficIcon sx={{
        color: 'green'
      }}/>
      <Typography variant="h5" component="div">
        Total Traffic
      </Typography>
      <Typography variant="h5" component="div" sx={{
        color: 'green',
      }}>
      51
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function TotalTraffic() {
  return (
    <>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </>
  );
}

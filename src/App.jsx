import { useState } from "react";
import Grid from "@mui/material/Grid";
import PersistentDrawerLeft from "./components/leftDrawer";
import NumberOfSales from "./components/sales";
import NewCustomers from "./components/newCustomers";
import TotalRevenue from "./components/revenue";
import StickyHeadTable from "./components/dataTable";
import TotalTraffic from "./components/traffic";
import WelcomeToDashboard from "./components/welcome";
import "./App.css";

function App() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PersistentDrawerLeft />
        </Grid>
        <Grid item xs={12}>
          <WelcomeToDashboard />
        </Grid>
        <Grid item xs={4}>
          <NewCustomers />
        </Grid>
        <Grid item xs={4}>
          <NumberOfSales />
        </Grid>
        <Grid item xs={4}>
          <TotalTraffic />
        </Grid>
        <Grid item xs={12}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12}>
          <StickyHeadTable />
        </Grid>
      </Grid>


    </>
  );
}

export default App;

import { Box, Container, CssBaseline, Paper } from "@mui/material";
import React from "react";
import MyStepper from "./MyStepper";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={3} >
        <Paper component={Box} p={3}>
          <MyStepper />
        </Paper>
      </Container>
    </>
  );
};

export default App;

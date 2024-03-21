import React, { useState } from "react";
import "./App.css";

import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';

function App() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  async function handleSubmit() {}
  return (
    <Container>
      <Box sx={{ width: "100%", mt: 4  }}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              autoFocus
              fullWidth
              label="Your text"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            />
            <Button
            fullWidth
            disableElevation
            variant="contained"
            disabled={isLoading}
            onClick={() => handleSubmit()}
            startIcon={
              isLoading && (
                <AutorenewIcon
                  sx={{
                    animation: "spin 2s linear infinite",
                    "@keyframes spin": {
                      "0%": {
                        transform: "rotate(360deg)",
                      },
                      "100%": {
                        transform: "rotate(0deg)",
                      },
                    },
                  }}
                />
              )
            }
            >
            Submit
            </Button>
          </Grid>
          <Grid item xs={12} sx={{mt:3}}>
            <Paper sx={{p:3}}>{response}</Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
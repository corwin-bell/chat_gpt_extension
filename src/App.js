/*global chrome*/
import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { OpenAI } from "openai";


function App() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  // key can still be stolen if bundle.js is inspected
  // supposedly better to set up a proxy server, but adds complication for a chrome extension
  // probably going to stick with just not publishing the app for now
  // https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    try {
      chrome.storage.local.get(null, function (data) {
        if ("prompt" in data) {
          setPrompt(data.prompt);
        }
      });
    } catch (e) {
      console.log("Error due to local state");
    }
  }, []);

  async function handleSubmit() {
    setIsLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { 
              role: "system", 
              content: "You are a helpful assistant." 
          },
          { 
              role: "user",
              content: prompt,
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 1
      });
      setResponse(completion.choices[0].message.content);
      setIsLoading(false);
    } 
    catch (e) {
      alert("Error: ", e);
      setIsLoading(false);
    }
  }
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
                chrome.storage.local.set({ prompt: e.target.value }); // saves state when pop-up closed
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
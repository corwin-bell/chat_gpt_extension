# ChatGPT Google Chrome Extension
This project is a simple [React app](https://github.com/facebook/create-react-app) that leverages the [OpenAI API](https://platform.openai.com/docs/overview) and loads the build folder as a [Google Chrome Extension] (https://developer.chrome.com/docs/extensions/get-started). The setup is largely based on the guidance provided in this [article](https://norahsakal.com/blog/create-gpt3-chrome-extension/). I had to make some updates to make sure the OpenAI API syntax matches the latest documentation and API key management was secure-ish. The idea is this project sets a foundation for other web apps and broswer tools I may build using the OpenAI API.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## OpenAI API syntax for node.js

This project follows the [OpenAI API Quickstart guide for Node.js](https://platform.openai.com/docs/quickstart?context=node). The syntax and model choices evolve pretty quickly so it is likely that this will need to be updated for future iterations of this project.

## API key management for a React project
I followed the guidance provided in this [article](https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/), storing the OpenAI provided key in a `.env` file with the prefix `REACT_APP_`, and adding the `.env` file to the `.gitignore`. This keeps the API Key from being exposed in your remote git repo. That said, this does not hide the key from the `bundle.js` or other `build/` files that are sent to the client. Thus, this solution is not safe for publishing the `build/` directory as a Google Chrome Extension.


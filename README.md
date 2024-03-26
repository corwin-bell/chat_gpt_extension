# Fallacy Finder
#### Video Demo: <URL HERE>
#### Description:
Fallacy Finder is a Google Chrome extension that identifies and describes logical fallacies found in the content of the currently open tab.

Key TODOs:
- add ability to read text from current tab
- provide text as OpenAI prompts
- render the response in helpful way on extension html page
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## OpenAI API syntax for node.js

This project follows the [OpenAI API Quickstart guide for Node.js](https://platform.openai.com/docs/quickstart?context=node). The syntax and model choices evolve pretty quickly so it is likely that this will need to be updated for future iterations of this project.

## API key management for a React project
I followed the guidance provided in this [article](https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/), storing the OpenAI provided key in a `.env` file with the prefix `REACT_APP_`, and adding the `.env` file to the `.gitignore`. This keeps the API Key from being exposed in your remote git repo. That said, this does not hide the key from the `bundle.js` or other `build/` files that are sent to the client. Thus, this solution is not safe for publishing the `build/` directory as a Google Chrome Extension.


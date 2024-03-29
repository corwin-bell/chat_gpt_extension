# Fallacy Finder
## Video Demo: <URL HERE>
## Description:
FallacyFinder is a Google Chrome extension that identifies and describes logical fallacies in a given text. I built this extension using React, an open-source JavaScript library used to make dynamic single-page applications, and the OpenAI API, an application programming interface that grants programmatic access to the models used in the popular Large Language Model (LLM) ChatGPT. At a high level, FallacyFinder takes text as input, sends the text and specific guidance as a prompt to OpenAI, and renders the results to the extension in a user-friendly format. 

I built FallacyFinder because the internet has a lot of opinionated content and it can be mentally taxing to examine a text critically and identify logical fallacies. The hope is that this tool can facilitate critical examination of opinionated text and set a foundation for additional features in the spirit of maintaining high-quality and reasonable discourse on the internet.

- what each of the files you wrote for the project contains and does
### Functional explanation of key files
As a React application, many auxilary files are created that are not critical to understanding the functioning of the application. I will focus my description on the following files
- `manifest.json`
- `index.html`
- `index.js`
- `App.js`
- `.env`
- `.gitignore`

#### manifest.json

- you debated certain design choices, explaining why you made them.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## OpenAI API syntax for node.js

This project follows the [OpenAI API Quickstart guide for Node.js](https://platform.openai.com/docs/quickstart?context=node). The syntax and model choices evolve pretty quickly so it is likely that this will need to be updated for future iterations of this project.

## API key management for a React project
I followed the guidance provided in this [article](https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/), storing the OpenAI provided key in a `.env` file with the prefix `REACT_APP_`, and adding the `.env` file to the `.gitignore`. This keeps the API Key from being exposed in your remote git repo. That said, this does not hide the key from the `bundle.js` or other `build/` files that are sent to the client. Thus, this solution is not safe for publishing the `build/` directory as a Google Chrome Extension.


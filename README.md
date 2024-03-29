# Fallacy Finder
## Video Demo: <URL HERE>
## Description:
FallacyFinder is a Google Chrome extension that identifies and describes logical fallacies in a given text. I built this extension using React, an open-source JavaScript library used to make dynamic single-page applications, and the OpenAI API, an application programming interface that grants programmatic access to the models used in the popular Large Language Model (LLM) ChatGPT. At a high level, FallacyFinder takes text as input, sends the text and specific guidance as a prompt to OpenAI, and renders the results to the extension in a user-friendly format. 

I built FallacyFinder because the internet has a lot of opinionated content and it can be mentally taxing to examine a text critically and identify logical fallacies. The hope is that this tool can facilitate critical examination of opinionated text and set a foundation for additional features in the spirit of maintaining high-quality and reasonable discourse on the internet.

### Functional explanation of key files
As a React application, many auxilary files are created that are not critical to understanding the functioning of the application. I will focus my description on the following files
- `manifest.json`
- `index.html`
- `index.js`
- `App.js`
- `.env`
- `.gitignore`

#### Extension Configuration File (manifest.json)
todo: remove unnecessary permissions?
The `manifest.json` configuration file is required for Google Chome to load an extension. it gives important metadata about the extension name, version, actions it performs, icons used, and any permissions given to the extension. In the case of FallacyFinder, the configuration is pretty basic since it does not directly read data or manipulate the document object model (DOM) of open tabs.

#### Extension webpage (index.html)
The `index.html` file gets created programmatically when the React project gets created. All of the `index.html` webpage components get created programmatically using the `index.js` and `App.js` files and inserted inside `<div id="root"></div>`.

#### Rendering script (index.js)
The `index.js` script accesses the `<div id="root"></div>` in `index.html` and renders result of the application logic returned by `App.js`.

#### Application logic script (App.js)
The `App.js` script does the heavy lifting for the FallacyFinder Extension by doing the following:
- imports useful pre-built user interface (UI) components from the [Material UI library](https://mui.com/)
- create a new OpenAI API instance using my API key in the `new OpenAI()` function
- stores user input as a prompt for the OpenAI API call with the `setprompt()` function
- submits prompt to OpenAI API and stores response with the `handleSumbit()` function
- then converts the response into a more user-friendly components to be sent to the UI

#### Secrets storage (.env)
The `.env` file stores the API Key read by the `OpenAI()` function. This keeps the API Key hidden from the codebase but visible to the bundled code used by the client. 

#### version control file management (.gitignore)
The `.gitignore` file includes folders and files to ignore for version control. This keeps extraneous files (e.g. `node_modules`) and sensitive information (e.g. the API key) from being exposed in the publicly visible git repository that stores this project.

## Design Challenges/Choices
One of the surprisingly most challenging aspects of this project was getting the OpenAI API to work within a chrome extension. 

### API key management for a React project
I followed the guidance provided in this [article](https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/), storing the OpenAI provided key in a `.env` file with the prefix `REACT_APP_`, and adding the `.env` file to the `.gitignore`. This keeps the API Key from being exposed in your remote git repo. That said, this does not hide the key from the `bundle.js` or other `build/` files that are sent to the client. Thus, this solution is not safe for publishing the `build/` directory as a Google Chrome Extension.

### OpenAI API syntax for node.js
This project follows the [OpenAI API Quickstart guide for Node.js](https://platform.openai.com/docs/quickstart?context=node). The syntax and model choices evolve pretty quickly so it is likely that this will need to be updated for future iterations of this project. Initially, the responses were inconsistent strings of formatted text that were hard to return to the UI in a programmatic and user-friendly way. It took a lot of "prompt engineering" to get reasonably consistent responses that I could parse as JSON.

### Using React as the basis for the application
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I debated whether to use a simpler HTML, CSS, JS approach or React. I landed on React because I have heard it is the industry standard for building web applications and because I found a good [example](https://norahsakal.com/blog/create-gpt3-chrome-extension/) of a chrome extension built using React and the MUI library. In hindsight, this may have overcomplicated the project for the level of simplicity I was seeking, but it does set the stage for nicer dynamic development on top of what I currently have. 





# Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the 18.17.0 version of Node.js.

## Cloning the Repository

To clone this repository, follow these steps:

- Open your terminal.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL of this repository.

```js
git clone https://github.com/aleksandercie/comeon.git
```

- Press Enter to create your local clone.

## Setting Up the Environment Variables

- Navigate to the root directory of the project.
- Create a file named .env.local.
- Open the .env.local file and add the following line:

```js
VITE_API_URL=http://localhost:3001
```

- Save and close the file.

## Running the Application Locally

To run the application, follow these steps:

- Open your terminal.
- Navigate to the project directory.
- Install the dependencies:

```js
npm install
```

- Start the development server:

```js
npm run dev
```

- Open http://localhost:5173/ to view it in your browser.

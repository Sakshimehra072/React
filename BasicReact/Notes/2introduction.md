DAY 1

# Why React Over JS

# React Library

React is a JavaScript library for building user interfaces. Its primary focus is on the "view" layer of the application, allowing developers to create reusable UI components. React doesn't dictate the entire architecture of the application, instead, it can be integrated into existing projects, and developers have the flexibility to choose other libraries or tools for tasks like routing or state management.

Why React Over JS

# 1. DOM Manipulation:

In Vanilla JavaScript, updating the DOM involves direct manipulation, often resulting in complex and error-prone code.
Manually managing updates to the DOM can lead to performance issues, especially in large and dynamic applications.
Debugging can be challenging when dealing with manual DOM updates and tracking changes in the application state.
React Improvement: Virtual DOM:

React introduces the Virtual DOM, a lightweight in-memory representation of the actual DOM.
Instead of directly manipulating the DOM, React works with the Virtual DOM to identify and update only the specific parts that have changed.
This minimizes the number of DOM manipulations, resulting in improved performance and a more efficient rendering process.


# 2. Unidirectional Data Flow:

In traditional JavaScript, managing state updates and ensuring a consistent flow of data can become challenging.
Bidirectional data binding can lead to unexpected side effects and make it harder to trace the source of state changes.


React Improvement: One-Way Data Binding:

React implements one-way data binding, providing a clear and predictable flow of data within the application.
The unidirectional data flow simplifies debugging and reduces the likelihood of bugs related to unexpected changes in the application state.
Developers can adopt patterns like Flux or Redux for centralized state management, further enhancing maintainability.


# 3. Componentization:

In traditional JavaScript, creating reusable and modular components can be challenging, leading to larger and less maintainable codebases.
The lack of a standardized component-based architecture makes collaboration and code reuse more difficult.
React Improvement: Component-Based Architecture:

React promotes a component-based architecture, allowing developers to create self-contained, reusable components.
Components encapsulate specific functionality, making the codebase more modular, readable, and maintainable.
This approach facilitates collaboration, accelerates development workflows, and supports the creation of large, scalable applications.
React is Declarative while Vanilla JS is Imperative

In imperative programming, developers explicitly write step-by-step instructions for the computer to follow. This involves detailing exactly how a task should be accomplished, often involving direct manipulation of the DOM.

For example, consider the imperative approach to updating the text content of an HTML element:

const element = document.getElementById('example');

element.textContent = 'Hello, World!';



In this example, you're explicitly instructing the browser to find an element with the ID 'example' and update its text content.

React (Declarative): React, on the other hand, takes a declarative approach. Instead of specifying how tasks should be performed, developers declare what the UI should look like based on the current state of the application. React abstracts away the direct manipulation of the DOM by introducing a virtual representation of it.

For instance, consider the declarative approach to the same task using React:

```javascript 
const ExampleComponent = () => {

return <div>Hello, World!</div>;

}
```

In this example, you declare the desired UI structure, and React takes care of updating the actual DOM accordingly. React maintains a virtual representation of the DOM (Virtual DOM) and efficiently updates only the necessary parts based on changes in the application state. This leads to cleaner, more readable code and simplifies the process of managing dynamic user interfaces.

The declarative nature of React makes it easier to understand, maintain, and scale applications, as developers focus on defining the desired outcome rather than manually specifying each step of the process.



# Prerequisites to Learn React

Variables and Data Types: Understand how to declare variables and the different data types in JavaScript.

Functions: Grasp the concept of functions, parameters, and return values.

Objects and Arrays: Learn how to work with objects and arrays, including methods and properties.

ES6+ Features:

Arrow Functions: Understand the syntax and advantages of arrow functions.
Destructuring: Learn how to destructure objects and arrays for concise code.
let and const: Understand block-scoping using let and constant variables with const.
Classes: Familiarize yourself with ES6 class syntax for object-oriented programming.
Asynchronous JavaScript:

# Promises:
 Understand the basics of promises for handling asynchronous operations.
Async/Await: Learn how to use async functions and await keyword for asynchronous programming.
Scope and Closures:

Lexical Scope: Understand how scope works in JavaScript, especially lexical (or static) scoping.
Closures: Grasp the concept of closures and how they allow functions to retain access to variables from their outer scope.

# DOM Manipulation:

Document Object Model (DOM): Understand how the DOM represents the structure of an HTML document.
Event Handling: Learn how to handle events using event listeners and callbacks.
HTTP and APIs:

HTTP Requests: Familiarize yourself with making HTTP requests using tools like fetch or libraries like Axios.
RESTful APIs: Understand the basics of RESTful API design and consumption.
Having a strong foundation in these JavaScript concepts will make it easier to grasp the concepts introduced in React.

------
DAY 2

# React App Walkthrough

# Create React App

Create a new React app: 

Open your terminal and run the following command to create a new React app using Create React App without installing it globally:
npx create-react-app your-app-name
Replace "your-app-name" with the desired name for your React app.
Navigate to the project directory: Change into the newly created app directory using the following command:
cd your-app-name

Run the development server: 

Start the development server to see your React app in action. Run the following command:
npm start
This will start the development server and open your app in a new browser window.


createRoot Function

The createRoot function is part of React's Concurrent Mode API, introduced to enable smoother user experiences by allowing React to work on multiple tasks concurrently. It is used to create a root in the React tree where concurrent rendering can take place. Concurrent Mode is an experimental set of features in React that may undergo changes in future releases.


```javascript
import React, { createRoot } from 'react';

import ReactDOM from 'react-dom';



// Create a root with createRoot

const root = createRoot(document.getElementById('root'));



// Concurrently render a component

const App = () => (

<div>

<h1>Hello, React Concurrent Mode!</h1>

</div>

);



// Render the component within the root

root.render(<App />);
```

# JSX

JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React to describe what the UI should look like. JSX provides a more concise and readable syntax for defining the structure of React components. It looks similar to XML or HTML but is actually a syntactic sugar for React.createElement calls.



 # Functional Component

A functional component in React is a simple JavaScript function that returns JSX (JavaScript XML) to describe the structure of the UI. Functional components are often referred to as "stateless components" because they don't have internal state or lifecycle methods



export default

In JavaScript (and also in React), the export default syntax is used to export a single "default" value or function from a module. This allows you to import that value or function without using curly braces {} when importing it in another module.



Creating Components in React

Create a new file for your component: Start by creating a new JavaScript or JSX file for your component. Let's say you want to create a basic functional component named MyComponent.


```javascript
// MyComponent.js

import React from 'react';

const MyComponent = () => {

return (

<div>

<p>This is my component!</p>

</div>

);

};

export default MyComponent;

Use the component in another file: You can then use this component in another file by importing it:

// App.js

import React from 'react';

import MyComponent from './MyComponent';

const App = () => {

return (

<div>

<h1>Hello, React App!</h1>

<MyComponent />

</div>

);

};

export default App;


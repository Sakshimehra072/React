# Basics

```javascript 
import React from 'react';
import './App.css';

const name = "Sakshi";
const element = "I am a software Developer";  //<--We can assign HTML to a varible with the help of jsx

function App(){
    return(

        <h1>Hi! My name is {name}</h1> // {name} is JSX
        {element}; //<--these {} are JSX
    );
}
```
```
Output 

Hi! My name is Sakshi

I am asoftware Developer
```
# JSX stands for JavaScript XML. JSX allows us to write HTML code in React. JSX makes it easier to write html in React.


We can assign an entire html tag to a variable with the help of JSX.
To render something on browser we use JSX.
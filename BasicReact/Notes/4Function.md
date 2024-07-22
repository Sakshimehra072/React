
``` javascript
import './App.css';

let count =0 ;

function App() {

const onIncrementClick = () =>{

    count =count + 1;
    console.log({ count });
}
    return (
        <>
        <button id='btn' onclick = {onIncrementClick}>Increment</button>
//In this case count increase every time on clicking the button 
// Beacuse {onIncrementClick} refer to onIncrementClick on every click

//OR

<button id='btn' onclick = {onIncrementClick9()}>Increment</button>
//In this case count increase only when button  RENDER on browser/Screen
// Beacuse {onIncrementClick()} calls onIncrementClick when code executes
        </>
    )
}
```
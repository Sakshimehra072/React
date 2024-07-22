# Conditional Rendering
Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

For eg :  suppose on ecommerce website some products are out of stock and we have to display ADD TO CART option for that product.
in thsi case we use CONDITIONAL RENDERING




```javascript

import './App.css';

const isAvailable = false;
function App(){
    return(
        <>
        <h1>shoping online</h1>
        {
            isAvailable ? <h1>Product  is available</h1> : <h1>This product is out of stock</h1>
        }


        </h1>
    )
}


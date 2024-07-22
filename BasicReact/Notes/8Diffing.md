# What is Diffing Algorithm in React ?
Diffing short for Differences Algorithm is used to differentiate the DOM Tree for efficient updates. React utilize diffing algorithm to identify the changes in the newly created virtual dom and previous version of dom after any changes are made.

# How Diffing Algorithm Works?
First, the content is rendered on the webpage and the DOM tree is created.
On change in any content due to user interaction or change in data from API,React works on observable patterns, hence, whenever there is a change in the state, it updates the nodes in the virtual DOM
In reconcilliation the old tree is compared to the newest version to determine the number of changes needed for updation.
After determining the changes a set of optimized and minimal instruction is created to implement on the real DOM.
These changes are then implemented and only content that changed is re-rendered on the web pages.
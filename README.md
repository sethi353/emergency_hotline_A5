# Emergency Hotline Project

## Q1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
- `getElementById("id")`: It only selects one element with a unique ID.
- `getElementsByClassName("class")`: It  selects multiple elements by class name, returns an HTMLCollection.
- `querySelector("selector")`: It selects the first matching element.
- `querySelectorAll("selector")`: It selects all matching elements, returns a NodeList.

## Q2. How to create and insert a new element into the DOM?
- To create : `document.createElement("tag")` used.
- Then set properties like `innerText` or `className`.
- lastly, use these `appendChild()` or `append()` to insert.

## Q3. What is Event Bubbling and how does it work?
- Event bubbling means when an event like a click starts from the target element. it needs to reaches the `document` .It serches the parent element.

## Q4. What is Event Delegation in JavaScript? Why is it useful?
- Event delegation means attaching a single event listener on a parent element to handle events for its child elements.
- it is useful because it reduces memory usage and works for dynamically added elements.

## Q5. Difference between preventDefault() and stopPropagation()
- `preventDefault()`: It stops the default action like  stopping a form submit etc.
- `stopPropagation()`: It stops the event bubbling so it doesn’t reach parent elements.

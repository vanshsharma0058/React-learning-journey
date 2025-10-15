## Props

->Props(shorts fro "properties") are like attributes for a component.
->They are used to pass data from a parent component to a child component.

# Example

->Imagine you have a parent and child component.

Parent → sends data
Child → receives and uses it

->Parent Component (App.js)

```jsx
import React from "react";
import Child from "./Child";

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Child name="Vansh" age={21} />
    </div>
  );
}

export default App;
```

->Child Component (Child.jsx):

```jsx
import React from "react";
function Child(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
    </div>
  );
}
export default Child;
```

->In this example, the `App` component passes the `name` and `age` props to the `Child` component.
->The `Child` component receives these props and uses them to display a personalized message.
->Props are read-only, meaning the child component cannot modify them.
->This is a fundamental concept in React that helps in creating dynamic and reusable components.

## Components

-A component is a reusable, independent, and isolated piece of code that represents a part of the UI.
-It is like a function that returns a piece of code.
Example: a button, card, or navigation bar.

-There are two types of components .
-1. Class component
-2. Functional component

-Here we will use functional component .
-Example of functional component is as follows :
-```jsx

function Card() {

return (

 <div className="card">
      <h1>vansh Sharma </h1>
 </div>
 );
  }
  export default Card; -`
-To use this component in app.js file we have to import it .
-`jsx
import Card from "./components/card";
const App = () => {
 return (
 <div>
      <Card /> /* using card component
 </div>
 );
  };
  export default App;
  -```
  -Here we have imported the card component and used it in the app component .
  -Now we will create another component called nav.jsx .

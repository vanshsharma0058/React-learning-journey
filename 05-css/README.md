### React Module-Based CSS Tutorial

This is a **simple React tutorial** demonstrating how to use **module-based CSS** for component-level styling.  
Each component has its own `.module.css` file, ensuring styles are scoped locally and do not conflict globally.

## Features

- Scoped CSS for individual components
- Simple reusable Button component
- Clean project structure for learning purposes

## Example

-button.jsx

```jsx
import React from "react";
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
```

-button.module.css

```css
.btn {
  padding: 10px 20px;
  background: rgb(78, 71, 71);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}
```

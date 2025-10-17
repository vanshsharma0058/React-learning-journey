## 🌐 Mini React Website Project

This is a **mini website project** built using **React** and **Tailwind CSS**, focusing on reusable components, clean folder structure, and smooth data flow between components.

## 🚀 Tech Stack

- ⚛️ **React JS** – For building UI components
- 🎨 **Tailwind CSS** – For modern, responsive styling
- 🧩 **Component-Based Architecture** – To ensure reusability and modularity
- 🧱 **Feature-Based + Atomic Structure** – To maintain scalability and better project organization

## ## 📂 Project Structure

The project is organized to keep UI elements modular and scalable.  
Each page (like `Page1`, `Page2`) contains its own set of related components.

07-mini-ui-project/
│
├── public/ # Static files (favicon, index.html, etc.)
│
├── src/
│ ├── assets/ # Images, icons, and static resources
│ │
│ ├── components/ # All reusable and page-specific components
│ │ │
│ │ ├── Page1/ # Components used in Page 1
│ │ │ ├── Arrow.jsx
│ │ │ ├── Herotext.jsx
│ │ │ ├── LeftContent.jsx
│ │ │ ├── navbar.jsx
│ │ │ ├── Page1content.jsx
│ │ │ ├── Rightcard.jsx
│ │ │ ├── Rightcardcontent.jsx
│ │ │ ├── RightContent.jsx
│ │ │ └── section1.jsx
│ │ │
│ │ └── Page2/ # Components used in Page 2 (future expansion)
│ │
│ ├── App.jsx # Main App component (routes and layout)
│ ├── index.css # Tailwind CSS and global styles
│ └── main.jsx # React entry point (renders App component)
│
├── package.json # Project dependencies and scripts
└── tailwind.config.js # Tailwind CSS configuration

---

## 🔗 Data Flow (Parent → Child)

This project demonstrates how to **pass data from a parent component to a child component** using **React props**.

**Example:**

```jsx
// ParentComponent.jsx
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const message = "Hello from Parent!";

  return <ChildComponent text={message} />;
}

export default ParentComponent;

// ChildComponent.jsx
function ChildComponent({ text }) {
  return <h2>{text}</h2>;
}

export default ChildComponent;
```

-✅ Data in React flows unidirectionally (top-down) — meaning parent components pass data to children using props.

## 🛠️ Installation & Setup

1. Clone the repository:
   git clone https://github.com/yourusername/07-mini-ui-project.git

2.Navigate to the project directory:

cd 07-mini-ui-project

3.Install dependencies:

npm install

4.Start the development server:

npm run dev

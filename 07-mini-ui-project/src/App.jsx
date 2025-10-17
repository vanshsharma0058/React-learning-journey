import Section1 from "./components/Page1/section1";
import Section2 from "./components/Page2/section2";

const user = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776",
    intro:
      "She maintains professionalism, meets deadlines efficiently, communicates clearly, and constantly improves her skills and productivity.",
    tag: "Satisfied",
    color: "blue",
  },
  {
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388",
    intro:
      "A dedicated professional who values teamwork, integrity, and consistent growth through learning and meaningful collaboration.",
    tag: "Underserved",
    color: "skyblue",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    intro:
      "She manages tasks effectively, adapts to challenges, and ensures excellence in every project she handles diligently.",
    tag: "Underbanked",
    color: "lightseagreen",
  },
  {
    img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    intro:
      "She manages tasks effectively, adapts to challenges, and ensures excellence in every project she handles diligently.",
    tag: "Reserved",
    color: "pink",
  },
];

const App = () => {
  return (
    <div>
      <Section1 users={user} />
      <Section2 />
    </div>
  );
};

export default App;

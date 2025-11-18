import axios from "axios";
import { useState } from "react";

const App = () => {
  // const getdata = async () => {
  //   // this is done with the help of [fetch]
  //   // const response = await fetch(
  //   //   "https://jsonplaceholder.typicode.com/todos/1"
  //   // );
  //   // const data = await response.json();
  //   // console.log(data.title);

  // };

  // const getdata = async () => {
  //   const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   console.log(data);
  // };

  const [data, setdata] = useState([]);
  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setdata(response.data);
  };

  return (
    <div>
      <button onClick={getdata}>getdata</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3 key={idx}>
              helo {elem.author} ,{idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;

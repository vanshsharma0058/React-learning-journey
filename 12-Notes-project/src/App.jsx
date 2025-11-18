import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");

  const [task, settask] = useState([]);

  const submithandler = () => {
    const copytask = [...task];
    copytask.push({ title, detail });

    settask(copytask);

    settitle("");
    setdetail("");
    // alert("Notes is saved to your NB..");
  };

  const deletenote = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  };

  return (
    <div className="max-h-full lg:h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submithandler();
        }}
        className="flex gap-4 mb-4 p-10 item-start   items-start flex-col lg:w-1/2"
      >
        <h1 className="  font-bold text-2xl">Create Notes : </h1>
        <input
          className="px-5 py-2 font-medium outline-none border-2 rounded w-full"
          type="text"
          value={title}
          placeholder="Enter Notes Heading"
          onChange={(e) => settitle(e.target.value)}
        />

        <textarea
          className="px-5 py-2 font-medium outline-none border-2 h-20 rounded w-full"
          type="text"
          placeholder="Enter Details"
          value={detail}
          onChange={(e) => setdetail(e.target.value)}
        />

        <button className="border-2 rounded-3xl  text-cyan-100 px-5 py-2.5 w-full active:scale-95">
          Add Notes
        </button>
      </form>

      <div className=" p-10 lg:border-l-2 lg:w-1/2 ">
        <h1 className="mb-5 font-bold text-2xl">Yours Notes: </h1>

        <div className="flex flex-wrap item-start justify-start gap-6  h-[90%] overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col  item-start justify-between h-50 p-5 w-40 rounded-2xl bg-amber-50 overflow-y-auto"
              >
                <div>
                  <h3 className="text-black leading-tight mb-3 text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="text-gray-500 leading-tight text-sm font-semibold">
                    {elem.detail}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deletenote(idx);
                  }}
                  className="text-amber-500 cursor-pointer bg-red-600 rounded-4xl active:scale-95 px-3 py-1 mt-4 w-full flex item-center justify-center gap-2"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

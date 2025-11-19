// ...existing code...
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [userdata, setuserdata] = useState([]);
  const [index, setindex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null); // selected image for modal

  const getdata = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=30`
      );
      setuserdata(response.data);
    } catch (err) {
      setError("Failed to load images.");
      setuserdata([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getdata();
    // smooth scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [index]);

  // keyboard shortcuts: left/right to change page, Esc to close modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft" && !isLoading && index > 1) {
        setindex((i) => i - 1);
        setuserdata([]);
      }
      if (e.key === "ArrowRight" && !isLoading) {
        setindex((i) => i + 1);
        setuserdata([]);
      }
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLoading, index]);

  // skeleton placeholders while loading (preserve layout)
  const skeletons = Array.from({ length: 20 }).map((_, i) => (
    <div key={i} className="w-64 h-40 bg-gray-700 rounded-md animate-pulse" />
  ));

  let printUserdata = (
    <div className="w-full min-h-[60vh] flex flex-wrap gap-4 p-2 justify-center items-start">
      {skeletons}
    </div>
  );

  if (error) {
    printUserdata = (
      <div className="w-full min-h-[60vh] flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  } else if (!isLoading && userdata.length > 0) {
    printUserdata = (
      <div className="flex flex-wrap gap-4 p-2 justify-center">
        {userdata.map((elem) => (
          <div
            key={elem.id}
            className="cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => {
              setSelected(elem);
              document.body.style.overflow = "hidden";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSelected(elem);
                document.body.style.overflow = "hidden";
              }
            }}
          >
            <Cards elem={elem} />
          </div>
        ))}
      </div>
    );
  }

  // close modal cleanup
  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Interactive Gallery</h1>
        <div className="text-sm text-gray-300">Page {index}</div>
      </header>

      {printUserdata}

      <div className="flex justify-center gap-4 items-center m-4 rounded-2xl p-2">
        <button
          onClick={() => {
            if (index > 1 && !isLoading) {
              setindex(index - 1);
              setuserdata([]);
            }
          }}
          disabled={isLoading || index === 1}
          className={`bg-amber-400 text-black px-4 py-2 rounded font-semibold active:scale-95 cursor-pointer transition-opacity ${
            isLoading || index === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105"
          }`}
        >
          Prev
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setindex(1);
              setuserdata([]);
            }}
            disabled={isLoading || index === 1}
            className="text-sm text-gray-300 hover:underline"
          >
            First
          </button>
          <span className="px-3 py-1 bg-gray-800 rounded">{index}</span>
        </div>

        <button
          onClick={() => {
            if (!isLoading) {
              setindex(index + 1);
              setuserdata([]);
            }
          }}
          disabled={isLoading}
          className={`bg-amber-400 text-black px-4 py-2 rounded font-semibold active:scale-95 cursor-pointer transition-opacity ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-black rounded-md overflow-hidden max-w-4xl w-full shadow-lg transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-2 bg-gray-900">
              <div className="text-sm text-gray-300">{selected.author}</div>
              <button
                onClick={closeModal}
                className="text-gray-200 px-3 py-1 rounded hover:bg-gray-800"
              >
                Close
              </button>
            </div>
            <img
              src={selected.download_url}
              alt={`By ${selected.author}`}
              className="w-full h-auto max-h-[80vh] object-contain transition-opacity duration-300"
            />
            <div className="p-3 text-sm text-gray-300">
              <a
                href={selected.url}
                target="_blank"
                className="text-amber-300 hover:underline"
              >
                Open source
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
// ...existing code...

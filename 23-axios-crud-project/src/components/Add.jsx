import React, { useState } from "react";
import "./card.css";
import { postdata, putdata } from "../api/PostApi";
import { useEffect } from "react";

const Add = ({ info, setinfo, update, setupdate }) => {
  const [addData, setaddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(update).length === 0;

  //use useEffect for add the data automatic in your form when data is update
  useEffect(() => {
    update &&
      setaddData({
        title: update.title || "",
        body: update.body || "",
      });
  }, [update]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setaddData((prev) => ({ ...prev, [name]: value }));
  };

  // function to add Post
  const addPostData = async () => {
    const res = await postdata(addData);
    if (res.status === 201) {
      setinfo([...info, res.data]);
    }
  };

  const updatePostData = async () => {
    const res = await putdata(update.id, addData);

    if (res.status === 200) {
      setinfo((prev) => {
        return prev.map((item) => {
          if (item.id === update.id) {
            return res.data;
          }
          return item;
        });
      });
    }
  };

  //form submit function
  const submitform = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
    setaddData({ title: "", body: "" });
    setupdate({});
  };

  return (
    <form className="field" onSubmit={submitform}>
      <label htmlFor="title"></label>
      <input
        type="text"
        autoComplete="off"
        placeholder="Add Title"
        name="title"
        value={addData.title}
        onChange={handleInput}
      />
      <label htmlFor="body"></label>
      <input
        type="text"
        autoComplete="off"
        placeholder="Add Post"
        name="body"
        value={addData.body}
        onChange={handleInput}
      />
      <button type="submit" value={isEmpty ? "Add" : "Edit"}>
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
};

export default Add;

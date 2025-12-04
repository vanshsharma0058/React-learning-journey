import React, { useEffect, useState } from "react";
import PostApi, { deletePost } from "../api/PostApi";
import "./card.css";
import Card from "./card.jsx";
import Add from "./Add.jsx";

const Post = () => {
  const [info, setinfo] = useState([]);
  const [update, setupdate] = useState({});

  // function to delete Post
  const delCard = async (id) => {
    try {
      const res = await deletePost(id); // for delete he data from api
      if (res.status === 200) {
        setinfo(info.filter((item) => item.id !== id));
      } else {
        console.log("Error in deleting the post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // function to get the Post
  const getPostdata = async () => {
    const res = await PostApi();
    setinfo(res.data);
  };

  //function to update the post

  const editPost = (elem) => setupdate(elem);

  useEffect(() => {
    getPostdata();
  }, []);

  return (
    <>
      <Add
        info={info}
        setinfo={setinfo}
        update={update}
        setupdate={setupdate}
      />
      <div className="App">
        {info.map((elem, idx) => {
          return (
            <Card
              key={idx}
              serial={idx + 1}
              id={elem.id}
              title={elem.title}
              body={elem.body}
              delCard={delCard}
              elem={elem}
              editPost={editPost}
            />
          );
        })}
      </div>
    </>
  );
};

export default Post;

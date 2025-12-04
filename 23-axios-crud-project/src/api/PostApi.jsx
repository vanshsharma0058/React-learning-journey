import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//get method

const PostApi = async () => {
  return api.get("/posts");
};

export default PostApi;

// detele method

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// Add data method / Post Method

export const postdata = (data) => {
  return api.post("/posts", data);
};

// Update data method / Put Method
export const putdata = (id, data) => {
  return api.put(`/posts/${id}`, data);
};

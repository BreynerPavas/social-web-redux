import axios from "axios";

const API_URL = "http://localhost:8080/posts";

const getAll = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
const addPost = async(post) => {
  const token = localStorage.getItem("token") || "";

  const res = await axios.post(API_URL + "/create", post,{headers: {
    authorization: token,
  },});
  return res.data; //payload
}
const getUserPost = async (id) => {
  const res = await axios.get(API_URL+"/getUserPosts/"+id);
  return res.data;
};
const getPostById = async (id) => {
  const res = await axios.get(API_URL+"/id/"+id);
  return res.data;
};

const addComment = async (comment) => {
  const token = localStorage.getItem("token") || "";

  const res = await axios.post("http://localhost:8080/comments/create/"+comment.idPost,{body: comment.body},{headers:
    {authorization: token}
  });
  return res.data;
}


const postsService = {
  getAll,
  addPost,
  getUserPost,
  getPostById,
  addComment
};

export default postsService;

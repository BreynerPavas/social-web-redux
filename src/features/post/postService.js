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

const postsService = {
  getAll,
  addPost,
  getUserPost
};

export default postsService;

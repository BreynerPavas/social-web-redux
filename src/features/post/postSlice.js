import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postService";


const initialState = {
posts:[],
userPost:[],
post:{}
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getUserPost = createAsyncThunk("posts/getUserPost", async (id) => {
  try {
    return await postsService.getUserPost(id);
  } catch (error) {
    console.error(error);
  }
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  try {
    return await postsService.addPost(post);
  } catch (error) {
    console.error(error);
  }
});

export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  try {
    return await postsService.getPostById(id);
  } catch (error) {
    console.error(error);
  }
});
export const addComment = createAsyncThunk("posts/addComment", async (comment) => {
  try {
    return await postsService.addComment(comment);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getUserPost.fulfilled, (state, action) => {
        state.userPost = action.payload.posts
      })
      .addCase(getPostById.fulfilled,(state,action)=>{
        state.post = action.payload
      })
      .addCase(addPost.fulfilled,(state,action)=> {
        state.posts = [action.payload,...state.posts]
      })
      
  },
});

export default postsSlice.reducer;

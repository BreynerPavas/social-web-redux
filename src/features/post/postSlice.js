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
export const like = createAsyncThunk("posts/like", async (_id) => {
  try {
    return await postsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});
export const unlike = createAsyncThunk("posts/unlike", async (_id) => {
  try {
    return await postsService.unlike(_id);
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
        console.log("sofia",action.payload.post);
        state.posts = [action.payload.post,...state.posts]
      })
      .addCase(like.fulfilled,(state,action)=>{
        state.post = action.payload;
        // creamos un nuevo array que tenga los productos actualizados. Concretamente agarramoso el producto que llega actualizado del backend y lo cambiamos por el producto que no esta actualizado
        const postsUpdated = state.posts.map(post=>{
            if(post._id == action.payload._id){
                post = action.payload
            }
            return post
        })
        state.posts = postsUpdated
        const userPostsUpdated = state.userPost.map(post => {
          if(post._id == action.payload._id){
            post = action.payload
        }
        return post
        })
        state.userPost = userPostsUpdated
    })
    .addCase(unlike.fulfilled,(state,action)=>{
      state.post = action.payload;

      // creamos un nuevo array que tenga los productos actualizados. Concretamente agarramoso el producto que llega actualizado del backend y lo cambiamos por el producto que no esta actualizado
      const postsUpdated = state.posts.map(post=>{
          if(post._id == action.payload._id){
              post = action.payload
          }
          return post
      })
      state.posts = postsUpdated

      const userPostsUpdated = state.userPost.map(post => {
        if(post._id == action.payload._id){
          post = action.payload
      }
      return post
      })
      state.userPost = userPostsUpdated


  })
      
      
  },
});

export default postsSlice.reducer;

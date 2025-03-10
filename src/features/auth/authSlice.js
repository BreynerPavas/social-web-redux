import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;



const initialState = {
  user: user,
  token: token,
  isError: false,
  isSuccess: false,
  message: "",
  users:[]
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;


    })
    
    .addCase(logout.fulfilled,(state)=>{
      state.user = null
      state.token = ""
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.message = action.payload.message;
    })
    .addCase(register.rejected,(state,action)=>{
      state.isError = true
      state.message = action.payload
    })
    .addCase(searchName.fulfilled,(state,action)=>{
      state.users = action.payload
    })
  },
});

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      // console.log(error.response.data.messages[0])
      const message = error.response.data.messages[0]
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const searchName = createAsyncThunk("auth/searchName", async (userName) => {
  try {
    return await authService.searchName(userName);
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
  }
});
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export default authSlice.reducer;

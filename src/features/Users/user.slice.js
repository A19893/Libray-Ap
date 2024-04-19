import { createSlice } from "@reduxjs/toolkit";
import { addUser, loginUsers } from "./user.action";

const initialState = {
  isLoading: false,
  loggedInState: false,
  users: {},
  message: "",
  type: "info",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // addUsers: (state, action) => {
    //   return action.payload;
    // },
    logOutUser: (state, action) => { 
      state.loggedInState= false;
      state.message= "User Logged Out Successfully"
      state.users= {};
    },
    deleteMessage: (state, action) => {
      state.message = "";
      state.type = "info";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // state.isLoading= false;
        // state.loggedInState= true;
        // state.users= action.payload;
        state.isLoading = false;
        state.message = "User Created Successfully";
        state.type = "Success";
      })
      .addCase(addUser.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.message = action.payload.error;
        state.type = "Error";
      })
      .addCase(loginUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUsers.fulfilled, (state, action) => {
        console.log(action.payload,"api hit hui");
        state.isLoading = false;
        state.loggedInState = true;
        state.users = action.payload?.existingUser;
        state.message = "User Logged In  Successfully";
        state.type = "Success";
        state.token = action.payload.token;
      })
      .addCase(loginUsers.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.message = action.payload.error;
        state.type = "Error";
      });
  },
});

export const { addUsers, logOutUser, deleteMessage, addLoggedInId } = userSlice.actions;
export default userSlice.reducer;

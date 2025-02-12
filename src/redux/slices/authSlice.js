import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  Userloading: false,
  modal: false,
  // token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.signupData = value.payload;
    },
    setUserLoading(state, value) {
      state.loading = value.payload;
    },
    setModal(state, value) {
      state.modal = value.payload;
    },
  },
});

export const { setUser, setUserLoading, setModal } =
  authSlice.actions;


export default authSlice.reducer;

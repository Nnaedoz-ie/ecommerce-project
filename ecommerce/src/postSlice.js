import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: []
  },
  reducers : {
    savePost: (state, action) => {
      state.value = action.payload 
    }
  }
})
export const { savePost } = postSlice.actions
export default postSlice.reducer
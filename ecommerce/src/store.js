import { configureStore } from '@reduxjs/toolkit';
import NumberSlice from './numberSlice'
import postSlice from './postSlice';


const Store = configureStore({
  reducer: {
    posts: postSlice
   
  }
})
export default Store
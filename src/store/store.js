import { configureStore } from "@reduxjs/toolkit";
import counterReduce from './slice'
export const store =configureStore({
    reducer:{
        counterReduce
    }
})
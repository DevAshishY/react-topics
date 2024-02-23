import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'couterApp',
    initialState:{
        count:0
    },
    reducers:{
        inc:(state,actions)=>{
           state.count = state.count +actions.payload
          
        },
        dec:(state,actions)=>{
            if(state.count > 0){
                state.count = state.count - actions.payload
            }
           
        }
    }
})

export default counterSlice.reducer;
export const{ inc,dec} =counterSlice.actions
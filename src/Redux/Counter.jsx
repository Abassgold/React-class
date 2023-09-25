import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0,
        name: 'kunle',
        allStudents:[]
    }, 
    reducers:{
        increment: (state)=> {
            state.count +=1
        },
        decrement: (state)=> {
            state.count -=1
        },
        incrementByAmount: (state, action)=> {
            state.count += action.payload
        }
    }
})
export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "cart",
    initialState:  [],
    reducers: {
        add(state, action) {
            
            state.push(action.payload)
            
        }
        
     
      
    }
})

export const { add  } = expenseSlice.actions

export default expenseSlice.reducer
import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter:{usermane:"null",id:0}
  },
  reducers: {
    increment: (state,action) => {
      state.counter=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment} = counterSlice.actions

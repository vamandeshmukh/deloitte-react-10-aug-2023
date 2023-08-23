
import { createSlice } from "@reduxjs/toolkit";

// const WriterSlice = createSlice();
// const WriterSlice = createSlice({name: '', initialState: {}, reducers: {}});

const WriterSlice = createSlice(
    {
        name: 'writer',

        initialState: {
            writerObj: { id: '', name: '', email: '' }
        },
        reducers: {
            setWriterObj: (state, action) => {
                console.log(action.payload);
                state.writerObj = action.payload;
            }
            // ,
            // anotherFunction: (state, action) => { // code  }
        }
    }
);

// export const { setWriterObj, anotherFunction } = WriterSlice.actions;
export const { setWriterObj } = WriterSlice.actions;
export default WriterSlice.reducer;


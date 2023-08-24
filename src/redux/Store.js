

// steps to use redux 
// 0. install redux libraries 
// 1. Create store 
// 2. Provide store to React app - index.js
// 3. create reducers / slices 
// 4. send data to store 
// 5. Wherever needed, access data from the store 



import { configureStore } from "@reduxjs/toolkit";
import WriterReducer from './WriterSlice';
import BlogListReducer from './BlogListSlice';

console.log('store');

// const store = configureStore();
// const store = configureStore({ reducer: {} });

const store = configureStore({
    reducer: {
        writer: WriterReducer,
        blogList: BlogListReducer,
        // anyComponent: AnyComponentReducer
    }
});

export default store;


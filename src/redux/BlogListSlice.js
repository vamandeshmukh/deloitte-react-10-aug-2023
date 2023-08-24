
import { createSlice } from "@reduxjs/toolkit";

const BlogListSlice = createSlice(
    {
        name: 'blogList',

        initialState: {
            blogListObj: []
        },
        reducers: {
            setBlogListObj: (state, action) => {
                console.log(action.payload);
                state.blogListObj = action.payload;
            }
        }
    }
);

export const { setBlogListObj } = BlogListSlice.actions;
export default BlogListSlice.reducer;


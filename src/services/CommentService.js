import axios from "axios";

const commentUrl = 'https://jsonplaceholder.typicode.com/comments';

const getCommentsByBlogId = (blogId) => {
    console.log(blogId);
    return axios.get(`${commentUrl}?postId=${blogId}`);
};

export { getCommentsByBlogId };
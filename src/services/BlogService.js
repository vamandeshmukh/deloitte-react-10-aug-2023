import axios from "axios";

const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

const getAllBlogs = () => {
    console.log('getAllBlogs');
    return axios.get(blogUrl);
};

const getBlogById = (blogId) => {
    console.log(blogId);
    // return axios.get(blogUrl + '/' + blogId);
    return axios.get(`${blogUrl}/${blogId}`);
};

const addNewBlog = (blogData) => {
    console.log(blogData);
    return axios.post(blogUrl, blogData);
};

export { getAllBlogs, getBlogById, addNewBlog };


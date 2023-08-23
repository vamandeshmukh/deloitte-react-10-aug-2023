import axios from "axios";

const writerUrl = 'https://jsonplaceholder.typicode.com/users';

const getWriterByBlogId = (writerId) => {
    console.log(writerId);
    return axios.get(`${writerUrl}/${writerId}`);
};

export { getWriterByBlogId };
import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "./Comments";

const url = 'https://jsonplaceholder.typicode.com/posts/22';

const BlogDetails = () => {

    const [blogData, setBlogData] = useState({ title: '', body: '' });

    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                console.log(resp.data);
                setBlogData(resp.data);
            })
            .catch((err) => { console.log(err); });
    }, []);

    return (
        <div className="container">
            <div>
                <p className="display-4 text-primary">{blogData.title}</p>
                <hr />
                <p className="lead"></p>
                <div>
                    {
                        blogData.title &&
                        <img width="100%" src="https://picsum.photos/900/400" alt={blogData.title} />
                    }
                </div>
                {/* increase the blog text  */}
                {/* <p>{Array.from(blogData.title).map((blog, i) => {
                    return <span obj={blog} key={i}> {blogData.body} </span>;
                })}</p> */}
                <p>{Array.from(blogData.title).map(() => {
                    return <span> {blogData.body} </span>;
                })}</p>
            </div>
            <div>
                {blogData &&
                    <Comments postId={blogData.id} />
                }
            </div>
        </div>
    );
};

export default BlogDetails;


// import axios from "axios";
// import { useEffect, useState } from "react";

// const url = 'https://jsonplaceholder.typicode.com/posts/22';

// const BlogDetails = () => {

//     const [blogData, setBlogData] = useState({ title: '', body: '' });

//     useEffect(() => {
//         axios.get(url)
//             .then((resp) => {
//                 console.log(resp.data);
//                 setBlogData(resp.data);
//             })
//             .catch((err) => { console.log(err); });
//     }, []);

//     return (
//         <div className="container">
//             <h1>Blog Details</h1>
//             <hr />
//             <h2>{blogData.title}</h2>
//             <p>{blogData.body}</p>
//         </div>
//     );
// };

// export default BlogDetails;
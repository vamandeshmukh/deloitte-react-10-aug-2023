import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from '../services/BlogService';

const BlogList = () => {

    const [allBlogslist, setAllBlogsList] = useState([]);

    useEffect(() => {
        getAllBlogs()
            .then(resp => setAllBlogsList(resp.data))
            .catch(err => console.log(err));
    },
        []);

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-2">
                    {/* left-side bar content here  */}
                </div>
                <div className="col-8">
                    <div>
                        <p className="display-5 text-primary">Deloitte Blogs</p>
                        <hr />
                        <p className="lead">Click a blog title to read the blog post.</p>
                        <div> {allBlogslist.map((blog, i) => {
                            return <div obj={blog} key={i}> <Link to={`/blog/${blog.id}`}>{blog.title}</Link> </div>;
                        })}</div>
                    </div>
                </div>
                <div className="col-2">
                    {/* Right-side bar content here  */}
                </div>
            </div>
        </div>
    );
};

export default BlogList;

// import axios from "axios";
// import { useEffect, useState } from "react";

// const BlogList = () => {

//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const [allBlogslist, setAllBlogsList] = useState([]);

//     useEffect(() => {
//         axios.get(url)
//             .then(resp => setAllBlogsList(resp.data))
//             .catch(err => console.log(err));
//     },
//         []);

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-2">
//                     {/* left-side bar content here  */}
//                 </div>
//                 <div className="col-8">
//                     <div>
//                         <p className="display-5 text-primary">Deloitte Blogs</p>
//                         <hr />
//                         <p className="lead">Click the blog title to read the blog post.</p>
//                         <div> {allBlogslist.map((blog, i) => {
//                             return <div obj={blog} key={i}> {blog.title} </div>;
//                         })}</div>
//                     </div>
//                 </div>
//                 <div className="col-2">
//                     {/* Right-side bar content here  */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogList;
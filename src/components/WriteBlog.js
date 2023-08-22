import axios from "axios";
import { useState } from "react";

const WriteBlog = () => {

    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const [newBlog, setNewBlog] = useState({ id: '', title: '', body: '' });

    const enterBlogForm = (evt) => {
        console.log(evt.target.value);
        setNewBlog({ ...newBlog, [evt.target.name]: evt.target.value });
    };

    const submitBlogForm = (evt) => {
        axios.post(url, newBlog)
            .then((resp) => {
                alert(resp.data.title + ' published successfully!');
                setNewBlog({ id: '', title: '', body: '' });
            })
            .catch();
        evt.preventDefault();
    };

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-2">
                    {/* left-side bar content here  */}
                </div>
                <div className="col-8">
                    <div>
                        <p className="display-5 text-primary">Write a New Blog</p>
                        <hr />
                        <p className="lead">Write your blog here and publish it to the world!</p>
                        <form className="form form-group" onSubmit={submitBlogForm}>
                            <input className="form-control my-1" type={'text'} name="title" value={newBlog.title}
                                onChange={enterBlogForm} placeholder="*Please enter title" required />
                            <textarea rows={10} className="form-control my-1" type={'text'} name="body" value={newBlog.body}
                                onChange={enterBlogForm} placeholder="*Please enter body" />
                            <input className="form-control btn btn-outline-primary my-1" type={'submit'} value="Submit" required />
                        </form>
                    </div>
                </div>
                <div className="col-2">
                    {/* Right-side bar content here  */}
                </div>
            </div>
        </div>
    );
};

export default WriteBlog;

// import { useState } from "react";

// const WriteBlog = () => {

//     const [newBlog, setNewBlog] = useState({ id: '', title: '', body: '' });

//     const enterBlogForm = (evt) => {
//         console.log(evt.target.value);
//         setNewBlog({ ...newBlog, [evt.target.name]: evt.target.value });
//     };
//     const submitBlogForm = (evt) => {
//         alert(newBlog.title + ' published!');
//         evt.preventDefault();
//         setNewBlog({ id: '', title: '', body: '' });
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-2">
//                     {/* left-side bar content here  */}
//                 </div>
//                 <div className="col-8">
//                     <div>
//                         <p className="display-5 text-primary">Write a New Blog</p>
//                         <hr />
//                         <p className="lead">Write your blog and publish it here.</p>
//                         <form className="form form-group" onSubmit={submitBlogForm}>
//                             <input className="form-control my-1" type={'text'} name="title" value={newBlog.title}
//                                 onChange={enterBlogForm} placeholder="*Please enter a title" required />
//                             <textarea className="form-control my-1" type={'text'} name="body" value={newBlog.body}
//                                 onChange={enterBlogForm} placeholder="*Please enter the body" />
//                             <input className="form-control btn btn-outline-primary my-1" type={'submit'} value="Submit" required />
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col-2">
//                     {/* Right-side bar content here  */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WriteBlog;


// import { useState } from "react";

// const WriteBlog = () => {

//     const [newBlog, setNewBlog] = useState({ id: '', title: '', body: '' });

//     const enterBlogForm = (evt) => {
//         console.log(evt.target.value);
//         // code here
//     };
//     const submitBlogForm = (evt) => {
//         // code here
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-2">
//                     {/* left-side bar content here  */}
//                 </div>
//                 <div className="col-8">
//                     <div>
//                         <p className="display-5 text-primary">Write a New Blog</p>
//                         <hr />
//                         <p className="lead">Write your blog and publish it here.</p>
//                         <form className="form form-group" onSubmit={submitBlogForm}>
//                             <input className="form-control my-1" type={'number'} name="eid" value={newBlog.title}
//                                 onChange={enterBlogForm} placeholder="*Please enter a title" required />
//                             <textarea className="form-control my-1" type={'text'} name="firstName" value={newBlog.body}
//                                 onChange={enterBlogForm} placeholder="*Please enter the body" />
//                             <input className="form-control btn btn-outline-primary my-1" type={'submit'} value="Submit" required />
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col-2">
//                     {/* Right-side bar content here  */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WriteBlog;


// const WriteBlog = () => {

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-2">
//                     {/* left-side bar content here  */}
//                 </div>
//                 <div className="col-8">
//                     <div>
//                         <p className="display-5 text-primary">Write a New Blog</p>
//                         <hr />
//                         <p className="lead">Write your blog and publish it here.</p>
//                         <form>

//                         </form>
//                     </div>
//                 </div>
//                 <div className="col-2">
//                     {/* Right-side bar content here  */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WriteBlog;























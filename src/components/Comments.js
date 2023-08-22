import axios from "axios";
import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/comments/';
// https://jsonplaceholder.typicode.com/comments?postId=1

const Comments = (postId) => {
    console.log(postId.postId);

    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        axios.get(`${url}?postId=${postId.postId}`)
            .then((resp) => { setCommentsList(resp.data); })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p className="lead"> {commentsList.length} Comments</p>
            <hr />
            <div>
                {
                    commentsList &&
                    commentsList.map((com, i) => {
                        return <div obj={com} key={i}>
                            <p><a href={`mailto:${com.email}`}>{com.email}</a></p>
                            <p>{com.name}</p>
                            <p>{com.body}</p>
                            <hr />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Comments;
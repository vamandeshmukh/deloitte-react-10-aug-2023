import axios from "axios";
import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/comments/';

const Comments = (postId) => {
    console.log(postId);

    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((resp) => { setCommentsList(resp.data); console.log(resp.data); })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p className="lead"> {commentsList.length} Comments</p>
            <hr />
            <div>
                {
                    commentsList &&
                    commentsList.map((com) => { return <div><p>{com.name}</p><p>{com.body}</p></div> })
                }
            </div>
        </div>
    );
};

export default Comments;
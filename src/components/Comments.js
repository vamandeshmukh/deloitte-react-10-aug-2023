import axios from "axios";
import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/comments/';

const Comments = (postId) => {

    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((resp) => { setCommentsList(resp.data); console.log(resp.data); })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>Comments</p>
            {/* <p>{commentsList && commentsList[0].body}</p> */}
            <div>
                {commentsList &&
                    commentsList.map((com) => { <div><p>{com.name}</p><p>{com.body}</p></div> })
                }
            </div>
        </div>
    );
};

export default Comments;
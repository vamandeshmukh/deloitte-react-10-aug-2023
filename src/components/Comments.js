import { useEffect, useState } from "react";
import { getCommentsByBlogId } from '../services/CommentService';

const Comments = (props) => {

    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        getCommentsByBlogId(props.postId)
            .then((resp) => { setCommentsList(resp.data); })
            .catch(err => console.log(err));
    }, [props.postId]);

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
                            <p className="fw-bold">{com.name}</p>
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


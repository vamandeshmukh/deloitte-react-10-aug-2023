import axios from "axios";
import { useEffect, useState } from "react";


const Comments = (props) => {

    const url = 'https://jsonplaceholder.typicode.com/comments/';
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        axios.get(`${url}?postId=${props.postId}`)
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

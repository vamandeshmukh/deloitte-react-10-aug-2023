import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWriterObj } from '../redux/WriterSlice';
import { getWriterByBlogId } from '../services/WriterService';

const BlogWriter = (props) => {

    // const writer = useSelector();
    const writer = useSelector((store) => { return store.writer.writerObj });
    const dispatch = useDispatch();

    useEffect(() => {
        getWriterByBlogId(props.writerId)
            .then((resp) => {
                console.log(resp.data);
                // setWriterObj(dispatch(resp.data));
                dispatch(setWriterObj(resp.data));

            })
            .catch(err => console.log(err));

    }, []);

    return (
        <div>
            <p>Posted by: {writer.name} </p>
            <p>Email: <a href={`mailto:${writer.email}`}>{writer.email}</a></p>
            <hr />
        </div>
    );
};

export default BlogWriter;


// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getWriterByBlogId } from '../services/WriterService';

// const BlogWriter = (props) => {

//     const [writer, setWriter] = useState({ id: '', name: '', email: '' });

//     useEffect(() => {
//         getWriterByBlogId(props.writerId)
//             .then((resp) => {
//                 console.log(resp.data);
//                 setWriter(resp.data);
//             })
//             .catch(err => console.log(err));

//     }, []);

//     return (
//         <div>
//             <p>Posted by: {writer.name} </p>
//             <p>Email: <a href={`mailto:${writer.email}`}>{writer.email}</a></p>
//             <hr />
//         </div>
//     );
// };

// export default BlogWriter;

import { useEffect, useState } from 'react';
import { getWriterByBlogId } from '../services/WriterService';

const BlogWriter = (props) => {

    const [writer, setWriter] = useState({ id: '', name: '', email: '' });

    useEffect(() => {
        getWriterByBlogId(props.writerId)
            .then((resp) => {
                console.log(resp.data);
                setWriter(resp.data);
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
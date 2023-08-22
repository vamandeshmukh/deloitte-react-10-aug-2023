import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBlog = () => {

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const enterSearch = (evt) => {
        setSearchValue(evt.target.value);
    };

    const submitSearch = (evt) => {
        evt.preventDefault();
        navigate(`/blog/${searchValue}`);
        // setSearchValue('');
    };


    return (
        <div>
            <form className="d-flex" role="search" onSubmit={submitSearch}>
                <input className="form-control me-2" type="number"
                    onChange={enterSearch} placeholder="Search a blog" required />
                <input className="btn btn-outline-primary" type="submit" value={'Search'} />
            </form>
        </div>
    );

};

export default SearchBlog;
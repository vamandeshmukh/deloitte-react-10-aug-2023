import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <p>Header component</p>
            <Link to='/home'>Home</Link>
            {/* <Link to={'demo'}>Demo</Link>
            <Link to={'parent'}>Parent</Link> */}

        </div>
    );

};

export default Header;


import { Link } from "react-router-dom";

const Header = () => {

    // use this navbar for proper styling - 
    // https://getbootstrap.com/docs/5.3/components/navbar/

    return (
        <div>
            <Link to='/home'><img height={'30px'} src="https://logodix.com/logo/64729.png" /> </Link>
            <Link to='/demo'>Demo</Link>
            <Link to='/parent'>Parent</Link>
            {/* create more components and add them here  */}
        </div>
    );

};

export default Header;


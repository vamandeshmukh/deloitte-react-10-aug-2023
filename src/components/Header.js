import { Link } from "react-router-dom";

const Header = () => {

    // assignment - 
    // use this navbar for proper styling - 
    // https://getbootstrap.com/docs/5.3/components/navbar/

    // return (
    //     <div>
    //         <Link to='/home'><img height={'30px'} src="https://logodix.com/logo/64729.png" /> </Link>
    //         <Link to='/demo'>Demo</Link>
    //         <Link to='/parent'>Parent</Link>
    //         {/* create more components and add them here  */}
    //     </div>
    // );

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img height={'30px'} src="https://logodix.com/logo/64729.png" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/demo">Demo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/parent">Parent</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">CompN</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );

};

export default Header;


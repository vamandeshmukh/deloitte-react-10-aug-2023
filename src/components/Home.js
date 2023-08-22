import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg")`,
                    backgroundRepeat: `no-repeat`,
                    // backgroundSize: 'contain',
                    backgroundPositionY: 'center',
                    backgroundPositionX: 'center'
                }}
            >
                <div className="d-flex flex-row-reverse">
                    <div className="col-5">
                        <div style={{ minHeight: "100vh" }} className="container">
                            <div>
                                <p className="display-4 text-primary pt-5">Deloitte React App</p>
                                <Link className="lead text-white" style={{ textDecoration: 'none' }} to='/bloglist'>Enter...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};
export default Home;




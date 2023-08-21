import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url("https://i.pinimg.com/originals/43/38/f6/4338f68220a65f4f0cd411e891957fed.jpg")`,
                    backgroundRepeat: `no-repeat`
                }} >
                <div style={{ minHeight: "100vh" }} className="container">
                    <div style={{ textShadow: '2px 2px black', textAlign: 'right' }} >
                        <p className="display-4 text-white pt-5">Deloitte React App</p>
                        <Link className="lead text-white" style={{ textDecoration: 'none' }} to='/demo'>Enter...</Link>
                    </div>
                </div>
            </div >
        </div>
    );
};
export default Home;
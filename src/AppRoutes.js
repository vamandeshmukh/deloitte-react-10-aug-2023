import { BrowserRouter, Route, Routes } from "react-router-dom";
import DemoComp from "./components/DemoComp";
import Home from "./components/Home";
import Parent from "./components/Parent";


const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="demo" element={<DemoComp />} />
                    <Route path="parent" element={<Parent />} />
                    <Route path="" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );


};

export default AppRoutes;

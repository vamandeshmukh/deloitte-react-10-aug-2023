import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import BlogList from "./components/BlogList";
import DemoComp from "./components/DemoComp";
import Header from "./components/Header";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Parent from "./components/Parent";
import WriteBlog from "./components/WriteBlog";

const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div>
                    <Routes>
                        <Route path="bloglist" element={<BlogList />} />
                        {/* <Route path="blog" element={<BlogDetails />} /> */}
                        <Route path="blog/:id" element={<BlogDetails />} />
                        <Route path="home" element={<Home />} />
                        <Route path="demo" element={<DemoComp />} />
                        <Route path="parent" element={<Parent />} />
                        <Route path="write" element={<WriteBlog />} />
                        <Route path="" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );


};

export default AppRoutes;

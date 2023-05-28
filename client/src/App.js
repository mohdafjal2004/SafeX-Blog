import "./App.css";
import Authentication from "./Auth/Authentication";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserDashBoard from "./Components/UserDashBoard";
import Registration from "./Auth/Registration";
import GetImage from "./Components/GetImage";
import UploadImage from "./Components/UploadImage";
import GetAllBlogs from "./Components/Blog/GetAllBlogs";
import BlogDetails from "./Components/Blog/BlogDetails";
import PostBlog from "./Components/Blog/PostBlog";
import Navbar from "./Components/Navbar";
// import UploadImage from "./Components/UploadImage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/getAllBlogs" element={<GetAllBlogs />} />
          <Route path="/post" element={<PostBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/uploadImage" element={<UploadImage />} />
          <Route path="/getImage" element={<GetImage />} />
          <Route path="/" element={<Registration />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/user" element={<UserDashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

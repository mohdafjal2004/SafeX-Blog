import "./App.css";
import Authentication from "./Auth/Authentication";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserDashBoard from "./Components/UserDashBoard";
import Registration from "./Auth/Registration";
import GetImage from "./Components/GetImage";
import UploadImage from "./Components/UploadImage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UploadImage />} />
          <Route path="/getImage" element={<GetImage />} />
          {/* <Route path="/" element={<Registration />} /> */}
          <Route path="/auth" element={<Authentication />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/user" element={<UserDashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

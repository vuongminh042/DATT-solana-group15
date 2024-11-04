import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/website/Home/Home";
import About from "./pages/website/About/About";
import Contact from "./pages/website/Contact/Contact";
import Causes from "./pages/website/Causes/Causes";
import CauseDetails from "./pages/website/Cause-details/Cause-details";
import Volunteer from "./pages/website/volunteer/Volunteer";
import Site from "./pages/website/Site/Site";
import Blog from "./pages/website/Blog/Blog";
import BlogDetails from "./pages/website/Blog-details/Blog-details";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/cause-details" element={<CauseDetails />} />
        <Route path="/volunteer" element={<Volunteer />} />
        
        <Route path="/site" element={<Site />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

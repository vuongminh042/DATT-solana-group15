import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/website/Home/Home";
import About from "./pages/website/About/About";
import Contact from "./pages/website/Contact/Contact";
import Causes from "./pages/website/Causes/Causes";
import CauseDetails from "./pages/website/Cause-details/Cause-details";
import Events from "./pages/website/Events/Events";
import EventsDetails from "./pages/website/Events-details/Events-details";
import Donation from "./pages/website/Donation/Donation";
import Mission from "./pages/website/Mission/Mission";
import Faq from "./pages/website/Faq/Faq";
import Volunteer from "./pages/website/volunteer/Volunteer";
import VolunteerDetails from "./pages/website/volunteer-details/volunteer-details";
import Blog from "./pages/website/Blog/Blog";
import BlogDetails from "./pages/website/Blog-details/Blog-details";
import Dashboard from "./pages/dashboard/Dashboard";
import PostList from "./pages/dashboard/Posts/PostList";
import AddPost from "./pages/dashboard/Posts/AddPost";
import EditPost from "./pages/dashboard/Posts/EditPost";
import UserList from "./pages/dashboard/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/cause-details" element={<CauseDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events-details" element={<EventsDetails />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/volunteer-details" element={<VolunteerDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="post-list" element={<PostList />} />
          <Route path="post-add" element={<AddPost />} />
          <Route path="post-edit" element={<EditPost />} />
          <Route path="user-list" element={<UserList />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import PostEmployee from "./components/Employee/PostEmployee";
import UpdateEmployee from "./components/Employee/UpdateEmployee";
import Header from "./components/Header/Header";
import NoMatch from "./components/noMatch/NoMatch";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<PostEmployee />} />
        <Route path="/employee/:id" element={<UpdateEmployee />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

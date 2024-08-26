import Course from "./components/Course";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
}

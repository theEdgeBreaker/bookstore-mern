import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="  dark:bg-slate-900 dark:text-white light:bg-red-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

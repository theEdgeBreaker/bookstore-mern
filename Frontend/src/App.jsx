import Home from "./home/Home";
import Courses from "./courses/Courses";
import Contacts from "./contacts/Contacts";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
      <div className="  dark:bg-slate-900 dark:text-white light:bg-red-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

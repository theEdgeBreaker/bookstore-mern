import Home from "./home/Home";
import Courses from "./courses/Courses";
import Contacts from "./contacts/Contacts";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

export default function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="  dark:bg-slate-900 dark:text-white light:bg-red-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

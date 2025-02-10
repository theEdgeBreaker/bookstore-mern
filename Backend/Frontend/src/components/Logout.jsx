import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";
function Logout() {
  // const [setAuthUser] = useAuth();

  const handleLogout = async () => {
    try {
      const { email } = JSON.parse(localStorage.getItem("Users"));
      console.log(email);


      const response = await axios.post("http://localhost:4001/user/logout", {
        email: email,
      });

      console.log(response);


      // setAuthUser(null); // Ensure to set authUser to null
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        // to automatically reload the page
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => { }, 2000);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;

import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import ContactMe from "./components/ContactMe/ContactMe";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer draggable={false} transition={Zoom} />
      <Navbar />
      <Profile />
      <AboutMe />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;

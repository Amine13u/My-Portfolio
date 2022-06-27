import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <AboutMe />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;

import Home from "./pages/Home";
import KnowYourYamuna from "./pages/KnowYourYamuna";
import Impact from "./pages/Impact";
import Navbar from "./components/Navbar";

function App() {

  return(
    <div>
      <Navbar/>
      <KnowYourYamuna/>
      <Impact />
      {/* <Home/> */}
    </div>
  );
}

export default App;

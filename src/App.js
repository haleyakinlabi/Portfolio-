import { useState } from "react";
import UseMediaQuery from "./hooks/UseMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState('Home')
  const isAboveMediumScreens = UseMediaQuery("(min-width: 1060px)")


  return (
    <div className="app bg-deep-blue">
     <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
     />



    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";

// Bouns Components Import
import SignUp from "../Custom Components/SignUp/SignUp";
import LogInPage from "../Custom Components/LogInPage/LogInPage";
import Notfound from "../Custom Components/Notfound/Notfound";

function App() {

  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="/" element={<Home />} />
          <Route path="Search" element={<SearchPage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

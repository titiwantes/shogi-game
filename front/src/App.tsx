import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import { AppProvider } from "./contexts/AppContext";
import Game from "./pages/Game";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

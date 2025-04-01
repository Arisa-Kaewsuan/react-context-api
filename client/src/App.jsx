import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { createContext } from "react";
export const userDataContext = createContext()
import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <Router>
      <userDataContext.Provider
      value = {{
        user: userData
      }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/view/:id" element={<ViewProductPage />} />
        </Routes>
        </userDataContext.Provider>
      </Router>
      
    </div>
  );
}

export default App;

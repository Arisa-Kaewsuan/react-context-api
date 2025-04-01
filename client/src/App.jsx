import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";
// Step 1 : import createContext
import { createContext } from "react";

// Step 2 : สร้างตัวแปรมาเก็บ context ที่ create ขึ้นมาแล้วต้อง export ออกไปด้วย component อื่นจะได้ใช้งานได้
export const UserDataContext = createContext();

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      {/* Step 3 : เอา <UserDataContext.Provider> ครอบ Homepage กับ ViewProductPage */}
      <UserDataContext.Provider value={{ user: userData }}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;

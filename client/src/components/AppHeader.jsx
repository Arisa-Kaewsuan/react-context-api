// Step 4 : การนำมาใช้ให้ import 2 ตัวนี้
import { UserDataContext } from "../App";
import { useContext } from "react";

function AppHeader() {
  // Step 5 : ประการ instance object เพื่อใช้อ้างอิงถึง
  const context = useContext(UserDataContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      {/* Step 6 : นำ value มาใช้ */}
      <h2>สวัสดีคุณ ({context.user.username})</h2>
    </div>
  );
}

export default AppHeader;

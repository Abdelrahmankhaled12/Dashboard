import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/partner/Sidebar";
import Orders from "./components/partner/pages/Orders";
import Navbar from "./components/partner/Navbar";
import Dashboard  from "./components/partner/pages/Dashboard";
import Products from "./components/partner/pages/Products";
// import FooterPartner from "./components/partner/FooterPatrner";

function App() {
  return (
    <div className="App">
      <div className="flex">
          <Sidebar />
        <div className="w-full bg-backGroundColor">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Products" element={<Products/>} />

          </Routes>
          {/* <FooterPartner /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

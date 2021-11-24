import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Admin from "./components/pages/Admin/Admin";
import AddProduct from "./components/pages/Admin/AddProduct";
import Product from "./components/pages/Admin/Product";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products/" element={<Product />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

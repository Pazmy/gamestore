import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Cart from "./components/pages/Cart";
import Admin from "./components/pages/Admin/Admin";
import AddProduct from "./components/pages/Admin/AddProduct";
import Product from "./components/pages/Admin/Product";
import EditProduct from "./components/pages/Admin/EditProduct";
import UserProduct from "./components/pages/UserProduct";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<UserProduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products/" element={<Product />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

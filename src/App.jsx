import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <CartProvider>
      <UserProvider>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pizza/:pizzaId" element={<Home />} /> 
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      </UserProvider>
    </CartProvider>
  );
}

export default App;


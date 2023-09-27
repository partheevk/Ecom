import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Categeries from "./pages/Categeries/Categeries";
import ProductDetails from "./pages/productDetails/productDetails";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
      
      dispatch(fetchCategories());
  },[])
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:catId?" element={<Categeries/>} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

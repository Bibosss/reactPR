import "./App.css";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/pages/Basket/Basket";
import { BasketProvider } from "./components/BasketContent/BasketContent";
import Reviews from "./components/Reviews/Reviews";
import AddReview from "./components/pages/ReviewsWrite/AddReview";
import Footer from "./components/Footer/Footer";
import Products from "./components/pages/Products/Products";

const App = () => {
  return (
    <BasketProvider>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Faq />
                <Reviews />
              </>
            }
          />
          <Route path="/basket" element={<Basket />} />
          <Route path="/addreview" element={<AddReview />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        <Footer />
      </div>
    </BasketProvider>
  );
};

export default App;

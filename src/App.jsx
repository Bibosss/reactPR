import './App.css'
import Faq from './components/Faq/Faq';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Routes, Route } from "react-router-dom";
import SearchResults from './components/SearchResults/SearchResults';
import Basket from './components/pages/Basket/Basket';
import { BasketProvider } from './components/BasketContent/BasketContent';
import Reviews from './components/Reviews/Reviews';
import AddReview from './components/pages/ReviewsWrite/AddReview';
import ModalPhone from './components/ModalPhone/ModalPhone';

const App = () => {
  return (
    <BasketProvider>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<>
            <Hero />
            <Faq />
            <Reviews />
          </>} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/addreview' element={<AddReview/>} />
        </Routes>
      </div>
    </BasketProvider>
  );
}

export default App;
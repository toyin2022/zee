import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Provider } from "react-redux";

import Shop from "./pages/Shop";
import OneShop from "./pages/OneShop";
import rootReducer from "./reducers/rootReducer";

import Services from "./pages/Services";
import Reviews from "./components/Reviews";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createStore } from "redux";

import Cart from "./pages/Cart";
function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<OneShop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

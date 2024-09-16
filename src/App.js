import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import CartPage from "./Pages/CartPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

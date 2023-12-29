import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Catalogue } from './Components/catalogue/Catalogue';
import { ProductDisplay } from './Components/catalogue/ProductDisplay';
import { ShoppingCart } from './Components/mainpages/ShoppingCart';
import { Footer } from './Components/mainpages/Footer';
import { Header } from './Components/mainpages/Header';
import { MainBody } from './Components/mainpages/MainBody';
import { Checkout } from './Components/mainpages/Checkout';
import { Paymentmethod } from './Components/mainpages/Paymentmethod';
import { Thankyou } from './Components/mainpages/Thankyou';
import { ConfirmOrder } from './Components/mainpages/ConfirmOrder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
       <header>
        <Header/>
       </header>
     
      <main style={{flexGrow: 1}}>
            <ToastContainer position="bottom-center" limit={1} />

     <Routes> 
      <Route path="/" exact element={<MainBody/>} />
      <Route path="/catalogues" exact element={ <Catalogue />}/>
      <Route path="/products-detail/:slug" exact element={ <ProductDisplay />}/>
      <Route path="/shopping-cart" exact element={ <ShoppingCart />}/>
      <Route path="/checkout" exact element={ <Checkout />}/>
      <Route path="/payment-method" exact element={ <Paymentmethod />}/>
      <Route path="/confirm-order" exact element={ <ConfirmOrder />}/>
      <Route path="/thankyou" exact element={ <Thankyou />}/>
     </Routes>
      </main>
     
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

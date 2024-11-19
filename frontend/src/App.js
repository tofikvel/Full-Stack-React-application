import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeaderBar from './components/HeaderBar';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import PaginationBar from './components/PaginationBar';
import Footer from './components/Footer';
import Item from './pages/Item';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <Header />
        <div className="wrapper">
          <div className="sidenav-product-list">
            <Sidenav />
            <div className="product-list-pagination">
              <div className="product-list-box">
                <Routes>
                  <Route
                    path='/'
                    element={<Home />}
                  />
                  <Route
                    path='/item'
                    element={<Item />}
                  />
                </Routes>
              </div>
              <div className="pagination">
                <PaginationBar />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

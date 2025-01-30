import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => (
  <div className="container">
    <header>
      <h1>Universal Link</h1>
      <a href="https://universal.nogu.dev/buyVoucher">Buy Voucher</a>
      {/* <Link to="/buyVoucher">Buy Voucher</Link> */}
    </header>
  </div>
);
const BuyVoucher = () => (
  <div className="container">
    <header>
      <h1>Universal Link to buyVoucher</h1>
    </header>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-voucher" element={<BuyVoucher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

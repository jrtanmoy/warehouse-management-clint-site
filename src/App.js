import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import CheckoutOrder from './components/Checkout/CheckoutOrder';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddNewItem from './components/AddNewItem/AddNewItem';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/inventory/:inventoryId'
          element={
            <RequireAuth>
              <InventoryDetail />
            </RequireAuth>} />
        <Route path='/manageinventories'
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>} />
        <Route path='/addnewitem'
          element={
            <RequireAuth>
              <AddNewItem />
            </RequireAuth>} />
        <Route path="/checkout" element={<CheckoutOrder />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

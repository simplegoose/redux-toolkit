import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateTotals, clearCart } from './features/cart/cartSlice';
import { closeModal } from './features/modal/modalSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="App">
      {
        isOpen
        && (
        <Modal
          onCancel={() => dispatch(closeModal())}
          onClear={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        />
        )
      }
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;

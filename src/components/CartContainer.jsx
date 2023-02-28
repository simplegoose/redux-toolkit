import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispach = useDispatch();

  return (
    <section className="cart">
      <header>Your Bag</header>
      <div>
        {
          cartItems
            .map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                amount={item.amount}
              />
            ))
        }
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total:&nbsp;
            <span>
              $
              {total}
            </span>
          </h4>
        </div>
        <button type="button" className="btn clear-btn" onClick={() => dispach(openModal())}>Clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;

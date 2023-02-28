import React from 'react';
import PropTypes from 'prop-types';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

const CartItem = ({
  id, img, title, price, amount,
}) => {
  const dispach = useDispatch();

  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button type="button" className="remove-btn" onClick={() => dispach(removeItem(id))}>Remove</button>
      </div>
      <div>
        <button type="button" className="amount-btn" onClick={() => dispach(increase(id))}>
          <HiChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button type="button" className="amount-btn" onClick={() => dispach(decrease(id))}>
          <HiChevronDown />
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default CartItem;

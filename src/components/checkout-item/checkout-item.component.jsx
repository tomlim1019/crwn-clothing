import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { addCartItem, removeCartItem, decreaseCartItem } from '../../redux/cart/cart.action';


const CheckoutItem = ({cartItem, removeCartItem, addCartItem, decreaseCartItem}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{ name }</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseCartItem(cartItem)}>&#10094;</div>
        <span className='value'>{ quantity }</span>
        <div className='arrow' onClick={() => addCartItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>${ price }</span>
      <div 
        className='remove-button' 
        onClick={() => removeCartItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  removeCartItem: item => dispatch(removeCartItem(item)),
  addCartItem: item => dispatch(addCartItem(item)),
  decreaseCartItem: item => dispatch(decreaseCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

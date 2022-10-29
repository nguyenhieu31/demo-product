import '../cart/cart.css';
import { useDispatch } from 'react-redux';
import { incrementProduct } from '../../redux/product/productSlice'
import { decrementProduct } from '../../redux/product/productSlice'
import { deleteProduct } from '../../redux/product/productSlice'
/* eslint-disable array-callback-return */
const Cart = ({ cart, ...props }) => {
  const dispatch = useDispatch();
  function getSubTotal() {
    return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }
  function handleIncrementProduct(item) {
    dispatch(incrementProduct(item));
  }
  function handleDecrementProduct(item) {
    dispatch(decrementProduct(item));
  }
  function handleDeleteProduct(item) {
    dispatch(deleteProduct(item));
    renderListCart();
  }
  function renderListCart() {
    return cart.map((item) => {
      const { id, quantity, image, color, name, price } = item;
      return (
        <div key={id} className="itemCartInform">
          <div style={{ display: 'flex', gap: "1rem" }}>
            <img src={image} alt='...'></img>
            <div className="content">
              <h5 className="title">{color} - {name}</h5>
              <div className="inform">
                <span className="text">Color: {color}</span>
                <span className="text">Device: IPhone 14</span>
                <span className="text">In Stock</span>
              </div>
              <div className="in_deBtn">
                <i className="fa-solid fa-minus" onClick={() => handleDecrementProduct(item)}></i>
                <span className="number">{quantity}</span>
                <i className="fa-solid fa-plus" onClick={() => handleIncrementProduct(item)}></i>
              </div>
            </div>
          </div>
          <div className="priceAndDeleteBtn">
            <i className="fa-solid fa-xmark" onClick={() => handleDeleteProduct(item)}></i>
            <h5 className="price">${price}.00</h5>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="wrapper">
      <div className="listCart">{renderListCart()}</div>
      <div className="informPay">
        <h3 className="title">Order Summary</h3>
        <div className="money">
          <span className="text">subTotal</span>
          <span className="cost">${getSubTotal()}.00</span>
        </div>
        <div className="shippingCost">
          <span className="text">Shipping Cost</span>
          <span className="cost">Free</span>
        </div>
        <div className="saleTax">
          <span className="text">Sale Tax</span>
          <span className="cost">-</span>
        </div>
        <div className="estimatedTotal">
          <h5 className="text">Estimated Total</h5>
          <h5 className="cost">${getSubTotal()}.00</h5>
        </div>
        <button className="btnPay">Buy Now</button>
      </div>
    </div>
  )
}
export default Cart;
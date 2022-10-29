import Cart from '../components/cart/cart'
import { useSelector } from 'react-redux';
function CartPage() {
  const { cart } = useSelector(state => state.product);
  return <Cart cart={cart}></Cart>
}
export default CartPage;
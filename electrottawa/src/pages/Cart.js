//inspired by https://www.npmjs.com/package/react-use-shoppingcart
import { useCart } from "react-use-shoppingcart";
import { useHistory } from "react-router-dom";
const Cart = () => {
  var sum = 0;
  const history = useHistory();
  function handleClick() {
    history.push("/checkout");
  }
  const { cartItems, removeFromCart, clearCart, totalPriceCart } = useCart();
  return (
    <div>
      <div className="d-flex justify-content-center"><h1 className="titre">SHOPPING CART</h1></div>
      <div id="checkoutcontainer">
      <div className="row" id="tabheadCheckout">

        <div className="col">ITEM</div>
        <div className="col">PRICE</div>
        <div className="col">QUANTITY</div>
        <div className="col">TOTAL</div>
        <div className="col">REMOVE</div>
      </div>
      <div className="cartContainer">
        {cartItems.map(item => {
          sum += item.product.price * item.qty;
          return (
            <div className="cart" key={item.product.id}>
              <div>
                <div className="row" id='checkoutitems'>
                  <div className="col">{item.product.name}</div>
                  <div className="col">{item.product.price}$</div>
                  <div className="col">{item.qty}</div>
                  <div className="col">{item.product.price * item.qty}</div>
                  <div className="col"><button id='removeButton' onClick={() => removeFromCart(item.product.id)}>
                    X
                  </button></div>
                  
                </div>
              </div>
              {/* <div>
                <div>
                  
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
      <div>
        <div id="checkoutTotal">Total : {sum}$</div>
        <div className="d-grid gap-2 col-1 mx-auto" >
          <button className='addCart' style={{ fontSize: '1.6ex', backgroundColor: 'linear-gradient(#b22222)', color: 'white'}} onClick={handleClick}>CHECKOUT</button>

          <button className="btn btn-dark btn-sm" onClick={clearCart}>CLEAR</button>
        </div>


      </div>
      </div>
    </div>
  );
};
export default Cart;
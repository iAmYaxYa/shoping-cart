import CartItem from "./CartItem";
import { useAppContext } from "./Context";

const CartContainer = () => {
  const { carts, clearCart, totalCost } = useAppContext();

  const cartArray = Array.from(carts.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [key, item] = cartItem;
          return <CartItem key={key} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total{" "}
            <span>
              $
              {Number(totalCost).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

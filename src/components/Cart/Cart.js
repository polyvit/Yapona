import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOrder";

const Cart = (props) => {
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false); // отображается компонент SubmitOrder
  const [isDataSubmitting, setIsDataSubmitting] = useState(false); // данные в процессе отправки
  const [wasFetchSuccessful, setWasFetchSuccessful] = useState(false); // данные успешно отправлены
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsSubmitOrderAvailable(true);
  };
  const submitOrderHandler = async (userData) => {
    setIsDataSubmitting(true);
    await fetch(
      "https://yapona-project-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedMeals: cartContext.items,
        }),
      }
    );
    setIsDataSubmitting(false);
    setWasFetchSuccessful(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const modalButtons = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onHideCart}>
        Закрыть
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Заказать
        </button>
      )}
    </div>
  );
  const cartModalWindow = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvailable && (
        <SubmitOrder
          onSubmit={submitOrderHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isSubmitOrderAvailable && modalButtons}
    </React.Fragment>
  );
  const dataSubmittedWindow = (
    <React.Fragment>
      <p>Данные успешно отправлены</p>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрыть
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isDataSubmitting && !wasFetchSuccessful && cartModalWindow}
      {isDataSubmitting && <p>Данные отправляются</p>}
      {wasFetchSuccessful && dataSubmittedWindow}
    </Modal>
  );
};

export default Cart;

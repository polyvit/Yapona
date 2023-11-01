import styles from "./SubmitOrder.module.css";
import { useRef, useState } from "react";

const isInputValid = (value) => value.trim() !== "";

const SubmitOrder = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    city: true,
    address: true,
  });

  const nameRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredAddress = addressRef.current.value;

    const isNameValid = isInputValid(enteredName);
    const isCityValid = isInputValid(enteredCity);
    const isAddressValid = isInputValid(enteredAddress);

    setFormValidity({
      name: isNameValid,
      city: isCityValid,
      address: isAddressValid,
    });

    const isFormValid = isNameValid && isCityValid && isAddressValid;
    if (!isFormValid) {
      return;
    }
    props.onSubmit({
      name: enteredName,
      city: enteredCity,
      address: enteredAddress,
    });
  };

  const setInputClasses = (type) => {
    return `${styles.control} ${formValidity[type] ? "" : styles.invalid}`;
  };

  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div className={setInputClasses("name")}>
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidity.name && <p>Введите имя</p>}
      </div>
      <div className={setInputClasses("city")}>
        <label htmlFor="city">Город</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Введите город</p>}
      </div>
      <div className={setInputClasses("address")}>
        <label htmlFor="address">Адрес</label>
        <input type="text" id="address" ref={addressRef} />
        {!formValidity.address && <p>Введите адрес</p>}
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Подтвердить заказ</button>
        <button type="button" onClick={props.onCancel}>
          Отменить
        </button>
      </div>
    </form>
  );
};

export default SubmitOrder;

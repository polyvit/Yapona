import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    // метод контекста для добавления элемента в корзину
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        input={{
          type: "number",
          id: `${props.id}`,
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
        label="Количество"
        ref={amountInputRef}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Пожалуйста, введите количество от 1 до 10</p>}
    </form>
  );
};

export default MealItemForm;

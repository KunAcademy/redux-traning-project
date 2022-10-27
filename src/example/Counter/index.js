import { Button, InputNumber } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  decrementByAmount,
  incrementByAmount,
  incrementAsync, 
  decrementAsync
} from "../../redux/slice/counterSlice";
import styles from '../../styles/Counter.module.scss'


const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2)
  const [decrementAmount, setDecrementAmount] = useState(2)

  const handleOnChangeDecrementAmount = (event) => setDecrementAmount(event)

  const handleOnChangeIncrementAmount = (event) => {
    setIncrementAmount(event)
  }
  
  return (
    <div className={styles.counterWrapper}>
      <div className={styles.counterNumber}>{count}</div>
      <div className={styles.counterValue}>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
      <div className={styles.counterFunction}>
        <InputNumber value={incrementAmount} onChange={handleOnChangeIncrementAmount} />
        <Button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increment Amount</Button>
        <Button onClick={() => dispatch(decrementByAmount(decrementAmount))}>Decrement Amount</Button>
        <InputNumber value={decrementAmount} onChange={handleOnChangeDecrementAmount} />
      </div>
      <div>
        <Button onClick={() => dispatch(incrementAsync(incrementAmount))}>Increment Async</Button>
        <Button onClick={() => dispatch(decrementAsync(decrementAmount))}>Increment Async</Button>
      </div>
    </div>
  );
};

export default Counter;

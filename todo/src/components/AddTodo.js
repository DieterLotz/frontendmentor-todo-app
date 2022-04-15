import React, { useRef, useState } from 'react';
import classes from './AddTodo.module.scss';
import './../styles/_checkbox.scss';

const AddTodo = (props) => {
    const [enteredValue, setEnteredValue ] = useState('');

    const handleOnChange = (event) => {
        event.preventDefault();
        setEnteredValue(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(enteredValue);
        setEnteredValue('');
    };

    return ( 
        <div className={classes['add-todo-container']}>
           <form className={classes['todo-form']} onSubmit={onSubmitHandler}>
            <input type="checkbox"></input>
            <input type="text" placeholder="Create a new todo..." onChange={handleOnChange} value={enteredValue}></input>
           </form>
        </div>
    );
}
 
export default AddTodo;
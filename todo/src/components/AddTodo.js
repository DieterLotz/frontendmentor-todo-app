import React, { useRef } from 'react';
import classes from './AddTodo.module.scss';

const AddTodo = (props) => {
    const input = useRef('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(input.current)
            props.onSubmit(input.current.value);
    };

    return ( 
        <div className={classes['add-todo-container']}>
           <form className={classes['todo-form']} onSubmit={onSubmitHandler}>
            <input type="checkbox"></input>
            <input type="text" placeholder="Create a new todo..." ref={input}></input>
           </form>
        </div>
    );
}
 
export default AddTodo;
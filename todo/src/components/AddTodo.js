import React, { useState } from 'react';
import styles from './AddTodo.module.scss';
import './../styles/_checkbox.scss';

const AddTodo = (props) => {
    const [enteredTodo, setEnteredTodo ] = useState({text: '', isCompleted: false});

    const handleTodoOnChange = (event) => {
        setEnteredTodo(previous => {
            return {
                ...previous,
                text : event.target.value,
            }
        });
    };

    const handleIsCompletedOnChange = (event) => {
        setEnteredTodo(previous => {
            return {
                ...previous,
                isCompleted : event.target.checked,
            }
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredTodo.text)
        {
            props.onSubmit(enteredTodo);
            setEnteredTodo({text: '', isCompleted: false});
        }
    };

    return ( 
        <div className={styles['add-todo-container']}>
           <form className={styles['todo-form']} onSubmit={onSubmitHandler}>
            <input type="checkbox" onChange={handleIsCompletedOnChange} checked={enteredTodo.isCompleted}></input>
            <input type="text" placeholder="Create a new todo..." onChange={handleTodoOnChange} value={enteredTodo.text}></input>
           </form>
        </div>
    );
}
 
export default AddTodo;
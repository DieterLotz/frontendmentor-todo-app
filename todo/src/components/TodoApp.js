import React, { useState } from "react";
import AddTodo from './AddTodo';
import classes from './TodoApp.module.scss'
import TodoList from "./TodoList";

import MoonIcon from './../assets/svg/icon-moon.svg';
import SunIcon from './../assets/svg/icon-sun.svg'

const todos = [
    {
        key: 1,
        text: 'Clean the dishes',
        isCompleted: false
    },
    {
        key: 2,
        text: 'Do the washing',
        isCompleted: true
    }
];

const TodoApp = () => {
    const [todoList, setTodoList] = useState(todos);

    const onClick = () => {
        //toggle theme
      };

    const onChangeHandler = (key) => {
        setTodoList(prev => {
           let items = [...prev];
           let indexOfTodo = items.findIndex(todo => todo.key === key);

           items[indexOfTodo] = {
               ...items[indexOfTodo],
               isCompleted : !items[indexOfTodo].isCompleted
           };

           return items;
        });
    };

    const removeTodo = (key) => {
        setTodoList(prev => {
            return prev.filter(todo => todo.key !== key);
        });
    };

    const clearCompleted = () => {
        setTodoList(prev => {
            return prev.filter(todo => todo.isCompleted === false);
        });
    };

    const onSubmitHandler = (todo) => {
        setTodoList(prev => {
            return [
                ...prev,
                {
                    key: prev.length + 1,
                    text : todo,
                    isCompleted: false
                }
            ];
        });
    };

    return (
        <>
            <div className={classes['todo-container']}> 
                <div className={classes['header']}>
                    <h1>todo</h1>
                    <img src={SunIcon} alt="" onClick={onClick}/>
                </div>
                <AddTodo onSubmit={onSubmitHandler}/>
                <TodoList todos={todoList} onChange={onChangeHandler} onRemove={removeTodo} onClearCompleted={clearCompleted}/>
                {/* <TodoFilter/> */}
            </div>
        </>
    );
}
 
export default TodoApp;
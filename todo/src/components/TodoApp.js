import React, { useState, useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import AddTodo from './AddTodo';
import classes from './TodoApp.module.scss'
import TodoList from "./TodoList";

import MoonIcon from './../assets/svg/icon-moon.svg';
import SunIcon from './../assets/svg/icon-sun.svg'

import { v4 as uuidv4 } from 'uuid';

const INITIAL_TODOS = [
    {
        key: uuidv4(),
        text: 'Clean the dishes',
        isCompleted: false
    },
    {
        key: uuidv4(),
        text: 'Do the washing',
        isCompleted: true
    },
    {
        key: uuidv4(),
        text: 'Tidy room',
        isCompleted: false
    }
];

const TodoApp = () => {
    const [todoList, setTodoList] = useState(INITIAL_TODOS);
    const {theme, toggleTheme} = useContext(ThemeContext);

    const onClick = () => {
        toggleTheme();
    };

    const onChangeHandler = key => {
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

    const removeTodo = key => {
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
                    key: uuidv4(),
                    text : todo.text,
                    isCompleted: todo.isCompleted
                }
            ];
        });
    };

    return (
        <>
            <div className={classes['todo-container']}> 
                <div className={classes['header']}>
                    <h1>Todo</h1>
                    <img src={theme === "dark" ? SunIcon : MoonIcon} alt="" onClick={onClick}/>
                </div>
                <AddTodo onSubmit={onSubmitHandler}/>
                <TodoList todoList={todoList} setTodoList={setTodoList} onChange={onChangeHandler} onRemove={removeTodo} onClearCompleted={clearCompleted}/>
            </div>
        </>
    );
}
 
export default TodoApp;
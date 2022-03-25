import React, { useState } from "react";
import AddTodo from './AddTodo';
import classes from './TodoContainer.module.scss'
import TodoList from "./TodoList";

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

const TodoContainer = () => {
    const [todoList, setTodoList] = useState(todos);

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
        <div className={classes['todo-container']}> 
            <AddTodo onSubmit={onSubmitHandler}/>
            <TodoList todos={todoList} onChange={onChangeHandler} onRemove={removeTodo}/>
            {/* <TodoFilter/> */}
        </div>
    );
}
 
export default TodoContainer;
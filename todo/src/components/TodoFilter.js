import React from "react";
import styles from "./TodoFilter.module.scss";

const TodoFilter = () => {

    const filterBy = (selection) => {
        // filter
    };

    return (
        <div>
            <button type="button">All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
        </div>
    );
}
 
export default TodoFilter;
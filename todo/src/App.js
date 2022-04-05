import React from 'react';
import TodoApp from './components/TodoApp';

import MoonIcon from './assets/svg/icon-moon.svg';
import SunIcon from './assets/svg/icon-sun.svg';

import styles from './App.module.scss';

function App() {

  const onClick = () => {
    //toggle theme
  };

  return (
    <div className={styles.app}>
      <header>
        <h1>todo</h1>
        <img src={SunIcon} alt="" onClick={onClick}/>
      </header>
      <main>
        <TodoApp/>
      </main>
    </div>
  );
}

export default App;

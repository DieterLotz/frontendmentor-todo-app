import React from 'react';
import TodoApp from './components/TodoApp';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <header></header>
      <main>
        <TodoApp/>
      </main>
    </div>
  );
}

export default App;

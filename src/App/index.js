import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <TodoProvider>
      <div className='w-4/12 m-auto'>
      <AppUI />
      </div>
      
    </TodoProvider>
  );
}

export default App;
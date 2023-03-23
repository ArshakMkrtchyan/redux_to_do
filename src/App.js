import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, removeToDo } from './Components/Actions/Action';


function App() {
  const [counter, setCounter] = useState(0)
  const [todo, setTodo] = useState('') // <-- added the assignment operator "="
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const todoSubmit = () => {
    if (todo !== '') {
      dispatch(addToDo(counter, todo))
      setCounter(counter + 1)
      setTodo('') // <-- set the state of todo to an empty string
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='todo'>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
      </div>
      <button onClick={todoSubmit}>add</button>
      <div className='todos'>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <p>{todo.task}</p>
            <button onClick={() => dispatch(removeToDo(todo.id))}>remove</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;

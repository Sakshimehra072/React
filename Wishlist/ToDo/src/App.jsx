import './App.css'
import { useState } from 'react'
import { v4 as uuid } from "uuid";

function App() {

  const [todo, setTodo] = useState ('');
  const [todoList, setTodoList] = useState([]); // todolist stores   the value into an array(whatever value is set in todo get stored in todolist)

  const onTodoInputChange = (e) => {
    setTodo(e.target.value)            // onChange will set the value here     
  }

  const onAddTodoClick = () => {
    setTodoList([...todoList, { id: uuid(), todo: todo, isCompleted: false }])     //uuid will generate a unique key (The value of the todo variable, which holds the text of a new todo item.) 
    setTodo('');
  }
  // console.log(todoList);

  const onDeleteClick = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id != id);
    setTodoList(updatedTodoList);
    // console.log(updatedTodoList);      ----->  shows only items which is not deleted
  }

  const onTodoCheckedChange = (id) => {
    const updatedTodoList = todoList.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)   //if id is not matched , return the value(todo) as it is
    setTodoList(updatedTodoList);
    console.log(updatedTodoList);
  }

  return (
    <>
      <div className='App'>
        <h1 className="font-sans text-4xl text-left">TO DO</h1>

        <div>
          <input value={todo} onChange={onTodoInputChange} placeholder="Add your task here...." />
          <button onClick={onAddTodoClick} className="scale-75 hover:scale-90">Add</button>
        </div>

        <div>
          <div>
            {
              todoList?.length > 0 && todoList.map(todo => (
                <div key={todo.id}>
                  <label>
                    <input onChange={() => onTodoCheckedChange(todo.id)} type='checkbox' />
                    <span className={`${todo.isCompleted ? `strike-through` : ''}`}>{todo.todo}</span>
                  </label>
                  <button className="scale-75 hover:scale-90" onClick={() => onDeleteClick(todo.id)} >Delete</button>     {/* () => onDeleteClick(todo.id)-----> function is calling only when button is clicked */}

                </div>
              ))
            }
          </div>
        </div>

      </div>
    </>
  );
}
export default App;

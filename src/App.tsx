import React, {useState} from 'react';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Todo } from './models/model';
import './App.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState <Todo[]>([]) // array of Todos

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("")
    }
  };

  console.log("------todos:", todos)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskList
          todos={todos}
          setTodos={setTodos}
          // CompletedTodos={CompletedTodos}
          // setCompletedTodos={setCompletedTodos}
        />
        
    </div>
  );
}

export default App;

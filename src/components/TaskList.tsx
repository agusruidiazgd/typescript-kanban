import React from 'react'
import {Todo} from '../models/model';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Props> = ({ todos, setTodos } : Props) => {
  return (
    <div>
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default TaskList
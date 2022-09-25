import React from 'react'
// import {Todo} from '../models';

interface Props {
  todos: any[];
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
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
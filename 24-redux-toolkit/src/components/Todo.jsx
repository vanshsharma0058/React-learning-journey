import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  // select the todos array from state.todo.todos
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

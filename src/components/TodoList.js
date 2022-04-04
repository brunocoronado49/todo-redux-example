import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        // Copia todo lo que contenga un elemento, como el texto por ejemplo
        {...todo}
        // Al hacer click se ejecuta esta funcion que toma el id del elemento
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)



export default TodoList
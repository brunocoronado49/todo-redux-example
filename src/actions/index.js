let nextTodoId = 0

// Manejo de acciones para cada caso de uso

// Lógica de agregar tarea, manda el tipo de acción y lo que recibe para mostrar
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    // Se le asigna un id
    id: nextTodoId++,
    // Recibe el texto de la tarea
    text
  }
}

// Acción para la visibilidad de los filtros
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    // Recibe un filtro
    filter
  }
}

// Esta acción manda el cambio del estado de una tarea
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    // Recibe un id
    id
  }
}
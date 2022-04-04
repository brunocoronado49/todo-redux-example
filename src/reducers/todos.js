// Aqui es donde se manejan los reducers, los cuales son metodos que reciben como parametro 
// el estado inicial y ka accion para retornar un nuevo estado
const todo = (state = {}, action) => {
  // antes de retonar un estado de siguen los pasos a ejecutar para que el estado cambie
  switch (action.type) {
    // Si el caso de la accion es añadir una tarea retorna la info de la tarea y la marca como incompleta
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    // Para cambiar de incompleta a completa se cambia el estado del id
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      // retirna el objeto y le asigna si lo contrario a complete en el estado actual
      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
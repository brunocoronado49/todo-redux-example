import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        // Usa el metodo dispatch para ejecutar la acción addTodo, la cual es la que agrega una nueva tarea
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Añadir tarea
        </button>
      </form>
    </div>
  )
}

// Connect genera los componentes de contenedores, es un método que le pasamos como parámetro lógica
// Y después le pasamos el componente para que lo use como un contenedor
AddTodo = connect()(AddTodo)

export default AddTodo
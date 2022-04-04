import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    {/*Este filtro es un container, para manejar la lógica de lo que quieres que se muestre*/}
    <FilterLink filter="SHOW_ALL">
      Todos
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Activos
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completados
    </FilterLink>
  </p>
)

export default Footer
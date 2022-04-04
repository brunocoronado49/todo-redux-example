const Link = ({ active, children, onClick }) => {

  // Una condicion en caso de que un elemento de la lista este activo o no
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         // Ejecuta una funcion para seleccionar el elemento
         onClick()
       }}
    >
      {/*muestra el texto dependiendo de lo que se vaya a mostrar*/}
      {children}
    </a>
  )
}


export default Link
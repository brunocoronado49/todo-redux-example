import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    // Tenemos una comaparacion del filtro de los props con el filtro del estado
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // Al dar click lanza un metodo para cambiar el filtro de visibilidad por el que tiene en los props
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

// Le pasamos el componente al contenedor para que funcione con el
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
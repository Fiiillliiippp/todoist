import { Link } from "react-router-dom"
import { routes } from "../../data/routes"

const TheNavigation = () => {
  return(
    <nav>
      <Link to={`${routes.home}`}>Home</Link>
      <Link to={`${routes.calendar}`}>Calendar</Link>
      <Link to={`${routes.filters}`}>Filters</Link>
    </nav>
  )
}

export default TheNavigation
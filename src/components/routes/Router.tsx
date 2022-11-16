import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { routes } from "../../data/routes"
import Calendar from "../../pages/Calendar"
import Filters from "../../pages/Filters"
import Home from "../../pages/Home"
import Projects from "../../pages/Projects"

const Router = () => {
  return(
    <div>
      <Routes>
        <Route path={`${routes.home}`} element={<Home />} />
        <Route path={`${routes.calendar}`} element={<Calendar />} />
        <Route path={`${routes.filters}`} element={<Filters />} />
        <Route path={`${routes.projects}`} element={<Projects />} />

      </Routes>
    </div>
  )
}

export default Router
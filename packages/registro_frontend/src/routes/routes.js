import Home from '../views/Home/Home'
import Form from '../views/form/Form'
import Vehículos from '../views/Vehiculos/Vehiculos'

const routes = [
  {
    name: 'home',
    path: '/',
    Component: Home
  },
  {
    name: 'registrar_vehiculo',
    path: '/registrar_vehiculo',
    Component: Form
  },
  {
    name: 'vehiculos',
    path: '/vehiculos/:id',
    Component: Vehículos
  }
]

export default routes

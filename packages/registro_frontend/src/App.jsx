import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate
} from 'react-router-dom'

import routes from './routes/routes'

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        <Route path='/*' element={<Navigate to={routes[0].path} replace />} />
      </Routes>

    </Router>
  )
}

export default App

// ./src/App.js
import './App.css'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import CreatePet from './components/CreatePet'
import Home from './components/Home'
import Login from './components/Login'
import Pets from './components/Pets'
import Signup from './components/Signup'
import SinglePet from './components/SinglePet'

import PetsState from './context/Pets/PetsState'

function App() {
  return (
    <>
      <PetsState>
        <Router>
          <Header />

          <Switch>
            {/* RUTAS PRIVADAS */}
            {/* SECCIÓN DE MI PERFIL */}

            {/* RUTAS DE AUTENTICACIÓN */}
            <Route exact path="/iniciar-sesion" component={Login} />
            <Route exact path="/crear-cuenta" component={Signup} />

            {/* RUTAS PÚBLICAS */}
            <Route exact path="/mascotas/crear" component={CreatePet} />
            <Route exact path="/mascotas/:id" component={SinglePet} />
            <Route exact path="/mascotas" component={Pets} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </PetsState>
    </>
  )
}

export default App

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

import UsersState from './context/Users/UsersState'

import AuthRoute from './components/Routes/AuthRoute'
import PublicRoute from './components/Routes/PublicRoute'
import PrivateRoute from './components/Routes/PrivateRoute'

import Profile from './components/User/Profile'

function App() {
  return (
    <>
      <UsersState>
        <PetsState>
          <Router>
            <Header />

            <Switch>
              {/* RUTAS PRIVADAS */}
              {/* SECCIÓN DE MI PERFIL */}
              {/* SOLO  SI ESTÁS LOGGEADO PUEDES ACCEDER */}
              <PrivateRoute exact path="/perfil" component={Profile} />

              {/* RUTAS DE AUTENTICACIÓN */}
              {/*  NO SE VA A PODER ACCEDER A ESTAR RUTAS SI ESTÁS LOGGEADO. */}
              <AuthRoute exact path="/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/crear-cuenta" component={Signup} />

              {/* RUTAS PÚBLICAS */}
              {/* PERMITIR QUE ESTÉS LOGGEADO O NO, ACCEDER A LA RUTA */}
              <PublicRoute exact path="/mascotas/crear" component={CreatePet} />
              <PublicRoute exact path="/mascotas/:id" component={SinglePet} />
              <PublicRoute exact path="/mascotas" component={Pets} />
              <PublicRoute exact path="/" component={Home} />
            </Switch>
          </Router>
        </PetsState>
      </UsersState>
    </>
  )
}

export default App

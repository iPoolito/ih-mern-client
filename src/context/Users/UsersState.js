import React, { useReducer } from 'react'
import axiosClient from './../../config/axios'

import UsersContext from './UsersContex'
import UsersReducer from './UsersReducer'

const UsersState = props => {
  const initialState = {
    user: {
      _id: null,
      username: null,
      email: null
    },
    authStatus: false
  }

  const [globalState, dispatch] = useReducer(UsersReducer, initialState)

  // CREAR USUARIO - POST

  const registerUser = async dataForm => {
    console.log(dataForm)

    try {
      const res = await axiosClient.post('/api/users/create', dataForm)
      // YA TENGO EL TOKEN EN RES, QUÉ HAGO AHORA?
      // GUARDAR ESE TOKEN EN LOCAL STORAGE

      const token = res.data.data.token

      dispatch({
        type: 'CREAR_USUARIO_EXITOSAMENTE',
        payload: token
      })
    } catch (error) {
      console.log(error)
    }
  }

  // INICIAR SESIÓN - POST
  const loginUser = async dataForm => {
    try {
      const res = await axiosClient.post('/api/auth/login', dataForm)

      const token = res.data.data.token

      dispatch({
        type: 'INICIO_SESION_EXITOSO',
        payload: token
      })
    } catch (error) {
      console.log(error)
    }
  }

  // VERIFICAR SESIÓN - GET - CONFIRMACIÓN DE CREDENCIALES
  const tokenVerification = async () => {
    // OBTENER TOKEN
    const token = localStorage.getItem('token')

    // VERIFICAR DE QUE SI NO HAY TOKEN, LIMPIE TODO EL LOCAL STORAGE
    if (!token) {
      console.log('Borrando Token de los headers')
      delete axiosClient.defaults.headers.common['x-auth-token'] // LIMPIAR LA PETICIÓN DEL HEADER
    }

    // SI TODO BIEN... ENTONCES, AGREGUEMOS EL TOKEN A LOS HEADERS
    axiosClient.defaults.headers.common['x-auth-token'] = token

    // HACER LA PETICIÓN
    try {
      const res = await axiosClient.get('/api/auth/verifying-token')

      const currentUser = res.data.data.user

      dispatch({
        type: 'OBTENER_USUARIO',
        payload: currentUser
      })

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const logoutUser = async () => {
    dispatch({
      type: 'CERRAR_SESION'
    })
  }

  return (
    <UsersContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        tokenVerification,
        logoutUser
      }}
    >
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersState

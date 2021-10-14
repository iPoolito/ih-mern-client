const reducer = (globalState, action) => {
  switch (action.type) {
    case 'OBTENER_USUARIO':
      return {
        ...globalState,
        authStatus: true,
        user: action.payload
      }

    case 'INICIO_SESION_EXITOSO':
    case 'CREAR_USUARIO_EXITOSAMENTE':
      localStorage.setItem('token', action.payload)

      return {
        ...globalState,
        authStatus: true
      }

    case 'CERRAR_SESION':
      localStorage.removeItem('token')

      return {
        ...globalState,
        user: null,
        authStatus: null
      }

    default:
      return globalState
  }
}

export default reducer

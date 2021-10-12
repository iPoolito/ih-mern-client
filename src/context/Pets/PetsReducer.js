// ./src/context/Pets/PetsReducer.js

const reducer = (globalState, action) => {
  switch (action.type) {
    case 'OBTENER_MASCOTAS':
      return {
        ...globalState,
        pets: action.payload
      }

    case 'AGREGAR_MASCOTA':
      /**
       * type: "AGREGAR_MASCOTA"
       * payload: newPet
       * */
      return {
        ...globalState,
        pets: [...globalState.pets, action.payload]
      }

    default:
      return globalState
  }
}

export default reducer

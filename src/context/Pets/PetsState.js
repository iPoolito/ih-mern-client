// ./context/Pets/PetsState.js
/**
 * ESTADO GLOBAL
 * AQUÍ VAMOS A GESTIONAR TODA LA INFORMACIÓN DEL ESTADO GLOBAL QUE PROVEE A TODOS LOS COMPONENTES Y TAMBIÉN SE CONECTA CON ENTES EXTERNOS (BACKENDS APIS, NUESTROS O DE TERCEROS)
 */

import React, { useReducer } from 'react'
import PetsContext from './PetsContext'
import PetsReducer from './PetsReducer'

import axiosClient from './../../config/axios'

const PetsState = props => {
  // 1. ESTADO INICIAL
  const initialState = {
    pets: []
  }

  // 2. CONFIGURACIÓN PRIMORDIAL DE REDUCERS
  // REDUCER - UNA FUNCIÓN, LA ÚNICA AUTORIZADA, PARA CAMBIAR EL ESTADO GLOBAL

  // useReducer tiene dos argumentos:
  //  a. Archivo con los diferentes escenarios para cambiar el estado global
  // b. Estado Inicial

  // useReducer devuelve en una desestructuración de arreglos:
  // a. globalState - Estado global de los datos (Ya no es el initialstate)
  // b. dispatch - Órdenes para cambiar el estado global a través del reducer
  const [globalState, dispatch] = useReducer(PetsReducer, initialState)

  // 3. FUNCIONES API / CONEXIÓN A REDUCERS (DISPATCH)
  // ESTAS FUNCIONES DISPARAN A LOS REDUCERS LA ORDEN DE CAMBIAR EL ESTADO GLOBAL

  const getAllPets = async () => {
    try {
      const res = await axiosClient.get('/api/pets/get-all')

      const petsFromDB = res.data.data

      dispatch({
        type: 'OBTENER_MASCOTAS',
        payload: petsFromDB
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addPet = async dataForm => {
    console.log(dataForm)

    try {
      await axiosClient.post('/api/pets/create', dataForm)
      return getAllPets()
    } catch (error) {
      console.log(error)
    }
  }

  // 4. RETORNO - PROVEEDORES DE LOS DATOS A LOS COMPONENTES

  return (
    <PetsContext.Provider
      value={{
        pets: globalState.pets,
        getAllPets,
        addPet
      }}
    >
      {props.children}
    </PetsContext.Provider>
  )
}

export default PetsState

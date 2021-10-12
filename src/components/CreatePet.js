// ./src/components/CreatePet.js

import React, { useState, useContext } from 'react'
import PetsContext from './../context/Pets/PetsContext'

export default function CreatePet() {
  // ESTADO GLOBAL
  // ADQUIRIR VALORES DEL ESTADO GLOBAL A TRAVÉS DEL CONTEXTO
  const ctx = useContext(PetsContext)

  const { addPet } = ctx

  // ESTADO LOCAL
  const [newPet, setNewPet] = useState({
    name: '',
    pictureUrl: '',
    age: 0,
    gender: 'male',
    isVaccinated: false,
    description: ''
  })

  // FUNCIONES DE ESTADO LOCAL
  const handleForm = event => {
    event.preventDefault()

    console.log([event.target.name])

    console.log(event.target.checked)

    if ([event.target.name][0] === 'isVaccinated') {
      console.log('Hola mundo')
      setNewPet({
        ...newPet,
        isVaccinated: event.target.checked
      })
    }

    setNewPet({
      ...newPet,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    addPet(newPet)
  }

  return (
    <>
      <main className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="h-1/2 bg-gray-100"></div>
            <div>
              <form
                onSubmit={e => {
                  handleSubmit(e)
                }}
                className="space-y-8"
              >
                <div className="space-y-8">
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        ¿Quieres que adopten a una mascota o encontrasete a una?
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Llena este formulario y aparecerá en nuestro directorio.
                      </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label for="first-name" className="block text-sm font-medium text-gray-700">
                          Nombre de la mascota
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={newPet.name}
                            name="name"
                            onChange={e => {
                              handleForm(e)
                            }}
                            className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label for="last-name" className="block text-sm font-medium text-gray-700">
                          Edad
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            value={newPet.age}
                            name="age"
                            onChange={e => {
                              handleForm(e)
                            }}
                            className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label for="email" className="block text-sm font-medium text-gray-700">
                          Foto de la mascota
                        </label>
                        <div className="mt-1">
                          <input
                            value={newPet.pictureUrl}
                            name="pictureUrl"
                            onChange={e => {
                              handleForm(e)
                            }}
                            type="text"
                            className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label for="email" className="block text-sm font-medium text-gray-700">
                          Género
                        </label>
                        <div className="mt-1">
                          <select
                            value={newPet.gender}
                            name="gender"
                            onChange={e => {
                              handleForm(e)
                            }}
                            type="email"
                            className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                          >
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label for="country" className="block text-sm font-medium text-gray-700">
                          ¿Sabes si está vacunada tu mascota?
                        </label>

                        <div className="mt-1">
                          <input
                            type="checkbox"
                            name="isVaccinated"
                            checked={newPet.isVaccinated}
                            onChange={e => {
                              handleForm(e)
                            }}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label for="street-address" className="block text-sm font-medium text-gray-700">
                          Descripción o comentarios
                        </label>
                        <div className="mt-1">
                          <textarea
                            value={newPet.description}
                            name="description"
                            onChange={e => {
                              handleForm(e)
                            }}
                            className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

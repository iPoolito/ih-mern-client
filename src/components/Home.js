// ./src/components/Home.js

import React, { useContext, useEffect } from 'react'
import PetsContext from './../context/Pets/PetsContext'

import { Link } from 'react-router-dom'

import ClipLoader from 'react-spinners/ClipLoader'

export default function Home() {
  // ESTADO GLOBAL
  // ADQUIRIR VALORES DEL ESTADO GLOBAL A TRAVÉS DEL CONTEXTO
  const ctx = useContext(PetsContext)

  const { pets, getAllPets } = ctx

  // SIDE EFFECTS - USEEFFECT

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <div>
      <div class="bg-white">
        <div class="relative pb-32 bg-gray-800">
          <div class="absolute inset-0">
            <img
              class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
          </div>
          <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Adopta una mascota
            </h1>
            <p class="mt-6 max-w-3xl text-xl text-gray-300">Estás por a conocer a tu mejor amigo.</p>
          </div>
        </div>

        <section
          class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 class="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            <div class="flex flex-col bg-white rounded-2xl shadow-xl">
              <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-medium text-gray-900">Perritos</h3>
                <p class="mt-4 text-base text-gray-500">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet
                  purus dui laoreet diam sed lacus, fames.
                </p>
              </div>
              <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>

            <div class="flex flex-col bg-white rounded-2xl shadow-xl">
              <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-medium text-gray-900">Conejos</h3>
                <p class="mt-4 text-base text-gray-500">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet
                  purus dui laoreet diam sed lacus, fames.
                </p>
              </div>
              <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>

            <div class="flex flex-col bg-white rounded-2xl shadow-xl">
              <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-medium text-gray-900">Gatitos</h3>
                <p class="mt-4 text-base text-gray-500">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet
                  purus dui laoreet diam sed lacus, fames.
                </p>
              </div>
              <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr />

      <div class="bg-white">
        <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
          <h2 class="sr-only">Products</h2>

          <div class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {/* 1 PRODUCTO */}

            {pets.length === 0 ? (
              <ClipLoader />
            ) : (
              pets.map(e => {
                return (
                  <>
                    <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                      <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                        <img
                          src={e.pictureUrl}
                          alt="Foto de mascota"
                          class="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div class="pt-10 pb-4 text-center">
                        <h3 class="text-xl  font-medium text-gray-900 mb-10">
                          <Link to={`/mascotas/${e._id}`}>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            {e.name}
                          </Link>
                        </h3>

                        <Link to={`/mascotas/${e._id}`}>
                          <button
                            type="button"
                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Ver mascota
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                )
              })
            )}
          </div>
        </div>
      </div>

      <hr />
    </div>
  )
}

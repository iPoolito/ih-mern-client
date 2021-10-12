// ./src/Header.js

import React from 'react'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header class="bg-indigo-600">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div class="flex items-center">
            <Link to="/">🐶</Link>
            <div class="hidden ml-10 space-x-8 lg:block">
              <Link to="/mascotas" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
                Lista de Mascotas
              </Link>

              <Link to="/mascotas/crear" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
                Crear mascota
              </Link>
            </div>
          </div>
          <div class="ml-10 space-x-4">
            <a
              href="#"
              class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
            Solutions
          </a>

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Pricing">
            Pricing
          </a>

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Docs">
            Docs
          </a>

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Company">
            Company
          </a>
        </div>
      </nav>
    </header>
  )
}

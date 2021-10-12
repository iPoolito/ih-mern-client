// ./src/Pets.js
import React, { useContext } from 'react'
import PetsContext from './../context/Pets/PetsContext'

export default function Pets() {
  const ctx = useContext(PetsContext)

  return (
    <div>
      Este es mi listado de mascotas
      <hr />
      {ctx.pets.map(e => e.name)}
    </div>
  )
}

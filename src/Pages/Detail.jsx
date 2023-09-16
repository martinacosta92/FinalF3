import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Detail = () => {
  const [dentista, setDentista] = useState ({})
  const params = useParams ()
  console.log (params)

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  useEffect(() => {
  axios(url)
  .then (res => setDentista(res.data))
}, [] )


  return (
    <>
      <h1>Detail Dentist id </h1>
    <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Telefono</th>
        <th>Sitio Web</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        
        <td>{dentista.name}</td>
        <td>{dentista.email}</td>
        <td>{dentista.phone}</td>
        <td>{dentista.website}</td>
      </tr>
      </tbody>

    </table>
    </>
  )
}

export default Detail
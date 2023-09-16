import React, { useState } from "react";



const Form = () => {

    // Guardo todo en un estado único
    const [cliente, setCliente] = useState({
        nombre: '',
        email: '',
    })

    // const [nombre, setNombre] = useState('')
    // const [direccion, setDireccion] = useState('')

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(cliente.nombre.length > 5 && cliente.email.length>5) {
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }

    
  return (
    <form>
      <label>Nombre Completo</label>
      <input type="text" value={cliente.nombre}
          onChange={(event) => setCliente({...cliente, nombre: event.target.value})}
      />
      <label>Email</label>
      <input type="email" value={cliente.email}
          onChange={(event) => setCliente({...cliente, email: event.target.value})}
      />
      <br></br>
      <button onClick={handleSubmit}>Enviar</button>
      {show && <h3>Gracias {cliente.nombre}, te contactaremos cuanto antes al email {cliente.email} </h3>}
      {error && <h4 style={{color: 'red'}}>Por favor llene correctamente todos los campos</h4>}
      </form>
  )
}
export default Form;
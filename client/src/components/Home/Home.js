import React from 'react'
import { useState } from 'react';
import { ClosedSession } from './ClosedSession';
import { MostPopular } from './MostPopular';
import NavScroll from './NavScroll';


export const Home = () => {

  const [error, setError] = useState(false);

  const loginUser = async e => {

    e.preventDefault();

    let loginDates = {
      email: e.target.email.value,
      pass: e.target.pass.value
    }



    let usersLocal = {
      email: e.target.email.value

    }


    let Metadatos = {
      method: 'POST',
      body: JSON.stringify(loginDates),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };


    fetch("http://localhost:5000/login", Metadatos)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        if (response.validation) {
          localStorage.setItem("emailUsuarioLogado", JSON.stringify(usersLocal.email))
          // Redirigir al usuario a una página protegida
          window.location = '/start';
        } else {
          setError(true)
        }
      })
  }



  return (


    <div>
      <NavScroll></NavScroll>

      <h1 className='h1Login'>🎥 FILMNOW</h1>

      <br />

      <h3 className='h3Login'>¡Accede y encuentra la película que estás buscando!</h3>

      <form className='login' onSubmit={loginUser}>

        <input className='inputLogin' placeholder='Correo electrónico' type="email" name='email' />
        <input className='inputLogin' placeholder='Contraseña' type="password" name='pass' />
        <input className='inputLogin' type="submit" value="Acceder" />

      </form>

      <MostPopular />

      {error && <p className='pInco'>Los datos no son correctos.</p>}

      {!localStorage.getItem("usuarioLogado") && <ClosedSession />}

      <p className='pLogin'>¿Aún no estás Registrado? <a href="/home/register">Create una cuenta</a></p>



    </div>
  )
}

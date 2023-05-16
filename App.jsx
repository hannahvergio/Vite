import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'


function App() {
  return (
    <>
      <h1>Welcome to BerjoApp!</h1>
        <div className="container">
          <label htmlFor="username">Username </label>
          <input type="text" placeholder='Enter Username' />

          <br />

          <label htmlFor="pass">Password </label>
          <input type="password" placeholder='Enter Password'/>

        </div>
        <br />
        <Button label = "Login"/> <h5> or </h5>
        <Button label = "Signup"/>
    </>
  )
}

export default App

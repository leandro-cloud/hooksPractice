import React, { useState } from 'react'

export const MyFirstComponent = () => {

  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <h3>El numero del contador es {counter}</h3>
      <button type='submit' className='button-large' onClick={ () => setCounter(counter + 1)}>Sumar contador</button>
    </div>
  )
}

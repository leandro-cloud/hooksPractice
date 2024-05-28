import React, { useState } from 'react'

export const SecondComponent = () => {

  const [name, setName] = useState('Leandro Peralta')
  const [ isnameChanged, setIsNameChanged] = useState(false)
  
  const changeName = () => {
    if (isnameChanged) {
      setName('Leandro Peralta')

    }else {
      setName('Pedro oliveros')
    }
    setIsNameChanged(!isnameChanged)
  }



  return (
    <div>
      <h3>SecondComponent</h3>
      <p>{name}</p>
      <div>
        <button className='button-large' onClick={ changeName }>Cambiar nombre</button>
      </div>
    </div>
  )
}

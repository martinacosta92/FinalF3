import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context/Context'

const Favs = () => {

    const {favs} = useDentistStates()
    
  return (
    <div className='card-grid'>
        {favs.map(fav => <Card dentist={fav} key={fav.id}/> )}
    </div>
  )
}

export default Favs
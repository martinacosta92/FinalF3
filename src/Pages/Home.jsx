import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context/Context'

const Home = () => {

    const {state} = useDentistStates()

  return (
    <div className='card-grid'>
        {state.dentist.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
    </div>
  )
}

export default Home
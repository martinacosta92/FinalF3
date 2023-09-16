import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'
import img from '../assets/images/doctor.jpg'


const Card = ({dentist}) => {
  
    const {dispatch, favs, addToFavorites, removeFromFavorites} = useDentistStates()
    const isFavorite = favs.some((favDentist) => favDentist.id === dentist.id);
    const toggleFavorite = () => {
      if (isFavorite) {
        removeFromFavorites(dentist);
      } else {
        addToFavorites(dentist);
      }
    };

  return (
    <div className='card'>
      <img src= {img} />
        <Link to={'/detail/' + dentist.id}>
          
            <h3>{dentist.name}</h3>
            <h3>{dentist.username} </h3>
            
        </Link>
        <button className='favButton' onClick={toggleFavorite}>
        {isFavorite ? <div className='star'>&#9733; </div> : <div className='star'>&#9734;</div> }
      </button>
    </div>
  )
}

export default Card
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Context/Context'

const Navbar = () => {
  const { themeState, dispatch1 } = useTheme();

  const toggleTheme = () => {
    dispatch1({ type: 'SWITCH_THEME' });
  };

  useEffect(() => {
    document.body.className = themeState.darkMode ? 'dark' : 'light';
  }, [themeState.darkMode]);


  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>

        
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar
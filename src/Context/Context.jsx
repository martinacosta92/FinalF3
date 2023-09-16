import axios from 'axios'
import {createContext, useContext, useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'




const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const DentistStates = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTIST':
            return {...state, dentist: action.payload}
        case 'SWITCH_THEME':
            return {...state, darkMode: !state.darkMode}
        default:
            throw new Error()
    }
}

const initialState = {
  dentist: [],

}
const Context = ({ children }) => {
    const [favs, setFavs] = useState(initialFavState);  
    const [state, dispatch] = useReducer(reducer, initialState)
    const [themeState, dispatch1] = useReducer(reducer, { darkMode: false });


    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
        .then(res => {
            console.log(res.data)
            dispatch({type: 'GET_DENTIST', payload: res.data})})
        .catch(err => console.log(err))
    }, [])
  
    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(favs));
    }, [favs]);
  
    // Función para agregar un dentista a favoritos
    const addToFavorites = (dentistToAdd) => {
      setFavs((prevFavs) => [...prevFavs, dentistToAdd]);
    };
  
    // Función para quitar un dentista de favoritos
    const removeFromFavorites = (dentistToRemove) => {
      setFavs((prevFavs) => prevFavs.filter((dentist) => dentist.id !== dentistToRemove.id));
    };
  
    useEffect(() => {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'dark') {
        dispatch({ type: 'TOGGLE_THEME' });
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('theme', themeState.darkMode ? 'dark' : 'light');
    }, [themeState.darkMode]);

    return (
      <DentistStates.Provider
        value={{ dispatch, state, dispatch1, themeState, favs, setFavs, addToFavorites, removeFromFavorites }}
      >
        {children}
      </DentistStates.Provider>
    );
  };
  
export default Context

export const useDentistStates = () => useContext(DentistStates)
export function useTheme() {
  const context = useContext(DentistStates);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
}
import React, { useState, useEffect } from 'react'
const API = 'https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2oFTNJUT6t5JD4jhXCXoil0nWVvdJpEtd21LLi4_MW-_5i-Rd8LpSl3UA'
export const NewContext = React.createContext({
    films: {},
    listFilms:{},
    isLoading:true // Initial value
});
const AppProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [films, setFilms] = useState([])
    const [listFilms, setListFilms] = useState([])

    const fetchFilms = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(API)
            const res = await response.json()
            setFilms(res.phim)
            setListFilms(listFilms.concat(res.phim.phimbo, res.phim.phimle, res.phim.phimhoathinh, res.phim.phimchieurap))
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchFilms()
    }, [])
    return <NewContext.Provider
        value={{
            films, listFilms, isLoading
        }}
    >
        {props.children}
    </NewContext.Provider>
}
export default AppProvider

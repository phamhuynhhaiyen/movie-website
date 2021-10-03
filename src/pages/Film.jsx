import React,{useContext, useEffect} from 'react'
import Helmet from '../component/Helmet'
import { NewContext } from '../data/AppProvider'
import {useParams} from 'react-router-dom'
import FilmView from '../component/FilmView'
import Grid from '../component/Grid'
import Section, { SectionBody, SectionTitle } from '../component/Section'
import FilmCard from '../component/FilmCard'
const Film = props => {
    const {listFilms} = useContext(NewContext)
    // const path = useLocation();
    // const url = path.pathname.substring(1);
    const {title} = useParams()

    const getFilm =(title)=> listFilms.find(e => e.title === title)

    const phim = getFilm(title)

    const getRandom = (count, array) => {
        const max = array.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return array.slice(start, start + count)
    }

    useEffect(() => {
        window.scrollTo(0,0)
    }, getRandom(8,listFilms))
    return (
        <Helmet title={phim.title}>
           <FilmView data={phim}/>
           <Section>
                <SectionTitle>
                    Có thể bạn cũng thích
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={3}
                        smCol={2}
                        xsCol={1}
                        gap={2}>
                            {getRandom(8,listFilms).map((item, index)=>(
                                <FilmCard data={item} key={index}/>
                            ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}


export default Film

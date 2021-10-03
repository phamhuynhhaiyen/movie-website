import React, {useContext } from 'react'
import Helmet from '../component/Helmet'
import HeroSlider from '../component/HeroSlider'
import heroSlider from '../assets/data/hero-slider'
import Grid from '../component/Grid'
import Section, { SectionBody, SectionTitle } from '../component/Section'
import FilmCard from '../component/FilmCard'
import { NewContext } from '../data/AppProvider'

const Home = () => {
    const { films} = useContext(NewContext);

    const getRandom = (count, array) => {
        const max = array.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return array.slice(start, start + count)
    }

    return (
        <Helmet title="Trang chủ">
            <HeroSlider data={heroSlider}/>
            <Section>
                <SectionTitle>
                    Phim hay
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={3}
                        smCol={2}
                        xsCol={1}
                        gap={2}>
                            {getRandom(12,films.phimchieurap).map((item, index)=>(
                                <FilmCard data={item} key={index}/>
                            ))}
                            {/* <Button onClick={()=>console.log(listFilms)}></Button> */}
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Phim bộ
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={3}
                        smCol={2}
                        xsCol={1}
                        gap={2}>
                            {getRandom(12,films.phimbo).map((item, index)=>(
                                <FilmCard data={item} key={index}/>
                            ))}
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Phim hoạt hình
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={3}
                        smCol={2}
                        xsCol={1}
                        gap={2}>
                            {getRandom(12,films.phimhoathinh).map((item, index)=>(
                                <FilmCard data={item} key={index}/>
                            ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Home

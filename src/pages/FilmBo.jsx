import React,{useContext} from 'react'
import Helmet from '../component/Helmet'
import { NewContext } from '../data/AppProvider';
import Section,{ SectionBody, SectionTitle} from '../component/Section';
import Grid from '../component/Grid';
import FilmCard from '../component/FilmCard';

const FilmBo = () => {
    const { films } = useContext(NewContext);
    return (
        <Helmet title="Phim bộ">
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
                            {(films.phimbo).map((item, index)=>(
                                <FilmCard data={item} key={index}/>
                            ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default FilmBo

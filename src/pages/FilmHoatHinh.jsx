import React,{useContext} from 'react'
import Helmet from '../component/Helmet'
import { NewContext } from '../data/AppProvider';
import Section,{ SectionBody, SectionTitle} from '../component/Section';
import Grid from '../component/Grid';
import FilmCard from '../component/FilmCard';

const FilmHoatHinh = () => {
    const { films } = useContext(NewContext);
    return (
        <Helmet title="Phim hoạt hình">
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
                            {(films.phimhoathinh).map((item, index)=>(
                                <FilmCard data={item} key={index}/>
                            ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default FilmHoatHinh

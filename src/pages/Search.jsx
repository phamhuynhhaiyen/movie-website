import React,{useContext} from 'react'
import Helmet from '../component/Helmet'
import { NewContext } from '../data/AppProvider';
import Section,{ SectionBody, SectionTitle} from '../component/Section';
import Grid from '../component/Grid';
import FilmCard from '../component/FilmCard';
import { useParams } from "react-router-dom";

const Search = () => {
    const { listFilms } = useContext(NewContext);
    const {ten} = useParams()
    return (
        <Helmet title="Kết quả tìm kiếm">
            <Section>
                <SectionTitle>
                Kết quả tìm kiếm "{ten}"
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={3}
                        smCol={2}
                        xsCol={1}
                        gap={2}>
                            {
                                listFilms.filter((item)=> item.title.toLowerCase().includes(ten.toLowerCase())).map((item,index) => <FilmCard data={item} key={index}/>)
                            }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Search

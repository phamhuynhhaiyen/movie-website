import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Section, { SectionTitle } from './Section'

const FilmView = props => {
    const data = props.data
    const [url, setUrl]= useState(data.episode.length >= 1 ? data.episode[0].url : '')
    const [tap, setTap]= useState(data.episode.length >= 1 ? data.episode[0].episode: '')
    useEffect(() => {
        setUrl(data.episode.length >= 1 ? data.episode[0].url : '')
        setTap(data.episode.length >= 1 ? data.episode[0].episode : '')
    }, [data])
    return (
        data.episode.length >= 1 ? 
        <div className="film-view">
            <div className="film-view__video">
                <iframe src={url} allowFullScreen={true} frameBorder="0" width="100%" height="600"></iframe>
            </div>
            <div className="film-view__title">
                <p>{data.title} <span>{data.episode.length > 1 ? ` - Tập ${tap}` : ''}</span></p>
            </div>
            <div className="film-view__episode">
                <p>Tập phim</p>
                {
                    (data.episode.length < 2) ? <button className="film-view__episode__btn active">FULL</button> :   

                        data.episode.map((item, index)=>(
                            <button key={index} className={`film-view__episode__btn ${tap===item.episode ? `active` : ''}`}
                            onClick={()=>{
                                setUrl(item.url)
                                setTap(item.episode)
                            }}>{item.episode}</button>
                        ))
                }
            </div>
        </div> : <Section><SectionTitle>Phim không khả dụng</SectionTitle></Section>
    )
}

FilmView.propTypes = {
    data: PropTypes.object.isRequired
}

export default FilmView

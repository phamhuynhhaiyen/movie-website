import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const FilmCard = props => {
    const data = props.data
    return (
        <Link to={`/phim/${data.title}`}>
            <div className="film-card">
                <img className="film-card__image" src={data.imageUrl} alt="" />
                <div className="film-card__contain">
                    <h3 className="film-card__contain__title">{data.title}</h3>
                </div>
            </div>
        </Link>
    )
}

FilmCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default FilmCard

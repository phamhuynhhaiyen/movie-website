import React, { useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Link } from 'react-router-dom'

const HeroSlider = props => {
    const data = props.data

    const [activeSlider, setActiveSlider] = useState(0)

    const nextSlide = useCallback(
        () => {
            const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
            setActiveSlider(index)
        },
        [activeSlider, data],
    )

    const prevSlide = () => {
        const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1
        setActiveSlider(index)
    }

    useEffect(() => {
        const slideAuto = setInterval(() => {
            nextSlide()
        }, 5000);
        return () => {
            clearInterval(slideAuto)
        }

    }, [nextSlide])

    return (
        <div className="hero-slider">
            {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlider} />
                ))
            }

                <div className="hero-slider__prev" onClick={prevSlide}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="hero-slider__next" onClick={nextSlide}>
                    <i className="fas fa-chevron-right"></i>
                </div>

        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired
}

const HeroSliderItem = props => {
    return (
        <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
            <div className="hero-slider__item__info">
                <div className="hero-slider__item__info__container">
                    <h1 className="hero-slider__item__info__container__title">
                        {props.item.title}
                    </h1>
                    <Link to={`/phim/${props.item.title}`}>
                    <Button animate={true} icon="far fa-play-circle">Xem phim</Button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__image">
                <img src={props.item.imageUrl} alt=""/>
            </div>
        </div>
    )
}
export default HeroSlider

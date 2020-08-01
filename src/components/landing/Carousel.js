import React from 'react'
import { Slide } from 'react-slideshow-image'

export const Carousel = () => {
    const slideImages = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg'
    ];

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }

    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        {/* <span>Desarrollo de Apps Móviles</span> */}
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        {/* <span>Desarrollo Web</span> */}
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        {/* <span>Slide 3</span> */}
                    </div>
                </div>
            </Slide>
        </div>
    )
}

import React from 'react'
import { Carousel } from './Carousel'
import { Intro } from './Intro'
import { ParallaxComp } from './Parallax'

export const Home = () => {   

    return (
        <div>
            <Carousel></Carousel>
            <Intro></Intro>
            <ParallaxComp></ParallaxComp>
        </div>
    )
}

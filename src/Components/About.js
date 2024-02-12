import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt='' />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt='' />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Order meals for individual and special evenings.
            </h1>
            <p className='primary-text'>
                Craving fresh, flavorful food without the prep hassle? At FOODIE, our passionate chefs do the chopping, dicing, and marinating.
            </p>
            <p className='primary-text'>
                so you can enjoy restaurant-quality meals at home in minutes. Explore globally-inspired dishes, dietary options galore, and the convenience of fresh, prepped ingredients delivered straight to your door.
            </p>
            <div className='about-buttons-container' >
                <button className='secondary-button' >Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill /> Watch Video
                </button>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "PickMeals",
            text: "Say goodbye to grocery hassles and hello to an explosion of freshness!  We use only the finest, seasonal ingredients to create a diverse menu you'll love.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "From comforting classics to exotic adventures, there's something for everyone. enjoy steaming hot meals that tantalize your senses, no pre-made, reheated fare here! We cook just for you.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "We cook each dish just for you moments before it speeds to your door.  Explore our mouthwatering menu, bursting with variety - comfort classics, ready to order? discover why we're the go-to for fresh.",
        },
    ]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>Craving piping hot, made-to-order fresh food delivered straight to your door? Look no further!  At FOODIE, we don't just deliver, we wow your taste buds with gourmet meals prepared just in time.</p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data) => (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt='' />
                        </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work
import React from 'react'
import ProfilePic from "../Assets/person1.png"
import {AiFillStar} from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>Customers can, depending on the delivery company, choose to pay online or in person, with cash or card. A flat rate delivery fee is often charged with what the customer has bought.</p>
        </div>
        <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt='' />
                <p>
                  The delivery driver was friendly and professional, which added another positive touch to the experience. Overall, FOODIE exceeded my expectations and made online food delivery a truly enjoyable experience. I'll definitely be ordering again soon!
                </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Williams</h2>
        </div>
    </div>
  )
}

export default Testimonial
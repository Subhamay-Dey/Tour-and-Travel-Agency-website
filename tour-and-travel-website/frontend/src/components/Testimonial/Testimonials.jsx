import React from 'react'
import Slider from "react-slick"
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

const Testimonials = () => {
  return (
    <>
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure facere temporibus, iusto consequuntur at ad ducimus nobis doloribus? Dignissimos velit in nisi dolore totam dolorem inventore maxime assumenda atque! Ab.
          </p>

          <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
            <div>
              <h6 className='mb-0 mt-3'>John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure facere temporibus, iusto consequuntur at ad ducimus nobis doloribus? Dignissimos velit in nisi dolore totam dolorem inventore maxime assumenda atque! Ab.
          </p>

          <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
            <div>
              <h6 className='mb-0 mt-3'>John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure facere temporibus, iusto consequuntur at ad ducimus nobis doloribus? Dignissimos velit in nisi dolore totam dolorem inventore maxime assumenda atque! Ab.
          </p>

          <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
            <div>
              <h6 className='mb-0 mt-3'>John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  )
}

export default Testimonials
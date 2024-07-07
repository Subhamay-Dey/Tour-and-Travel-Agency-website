import React from 'react'
import Slider from "react-slick"
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";
import ava04 from "../../images/ava-4.jpg";

const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
          "Absolutely amazing experience! The tour was perfectly organized and exceeded all our expectations. The guides were knowledgeable, and the itinerary was well-planned. Highly recommend this agency for a vacation!"
          </p>
          <div className='d-flex align-items-center gap-4 mt-3 relative'>
            <img src={ava01} alt="" className='w-25 h-25 rounded-2 absolute bottom-[1%]'/>
            <div>
              <h6 className='mb-0 mt-3'>John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
          "Incredible service and unforgettable destinations. Our vacation was seamless and stress-free, thanks to the meticulous planning. The staff went above and beyond to ensure we had a memorable trip. Thank you!"
          </p>
          <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
            <div>
              <h6 className='mb-0 mt-3'>Lia Franklin</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
          "Best travel agency ever! Everything was so well planned, from accommodations to excursions. The staff was super friendly and helpful, making our journey enjoyable and hassle-free. We'll definitely be back!"
          </p>
          <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
            <div>
              <h6 className='mb-0 mt-3'>John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
          "Fantastic trip! Every detail was taken care of, allowing us to relax and enjoy our vacation. The personalized service and attention to detail made all the difference. Will definitely book again!"
          </p>
          <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} alt="" className='w-25 h-25 rounded-2'/>
            <div>
              <h6 className='mb-0 mt-3'>Lia Franklin</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  )
}

export default Testimonials
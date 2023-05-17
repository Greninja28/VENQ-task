import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './styles.css'

// import required modules
import { Pagination, Scrollbar, Mousewheel } from "swiper";
import { Typography } from "@mui/material";

const LeftSide = () => {

  // const swiperRef = useRef(null);
  // const [prevActiveIndex, setPrevActiveIndex] = useState(0);

  // useEffect(() => {
  //   const swiper = swiperRef.current.swiper;

  //   swiper.on('slideChange', () => {
  //     const { activeIndex } = swiper;
  //     const slides = swiper.slides;

  //     // Reset opacity of previous non-focused slide
  //     slides[prevActiveIndex].style.opacity = 1;
  //     slides[prevActiveIndex].classList.remove('number-focused');

  //     // Reduce opacity of current non-focused slide
  //     slides.forEach((slide, index) => {
  //       if (index !== activeIndex) {
  //         slide.style.opacity = 0.5;
  //         slide.classList.remove('number-focused');
  //       }
  //     });

  //     // Update the previous active index
  //     setPrevActiveIndex(activeIndex);
  //   });
  // }, [prevActiveIndex]);

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    swiper.on('slideChange', () => {
      const { activeIndex } = swiper;

      // Update the active index
      setActiveIndex(activeIndex);
    });
  }, []);

  return (
    <>
      <Swiper
        direction='vertical'
        ref={swiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        scrollbar={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination, Scrollbar, Mousewheel]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          const { activeIndex } = swiper;

          // Update the active index
          setActiveIndex(activeIndex);
        }}
      >
        <SwiperSlide className={`swiper-slide ${activeIndex === 0 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 0 ? 'number-focused' : 'number'}>01</div>
          <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '10px' }}>Browse</Typography>
          <Typography variant="h6" style={{ textAlign: 'left', paddingRight: '35%' }}>
            Sign up in less than 3 minutes and browse our collection of properties
          </Typography>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 1 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 1 ? 'number-focused' : 'number'}>02</div>
          <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '10px' }}>Purchase</Typography>
          <Typography variant="h6" style={{ textAlign: 'left', paddingRight: '35%' }}>
            Buy a piece of the ones you love, starting from only AED 500
          </Typography>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 2 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 2 ? 'number-focused' : 'number'}>03</div>
          <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '10px' }}>Invest</Typography>
          <Typography variant="h6" style={{ textAlign: 'left', paddingRight: '35%' }}>
            Sign up in less than 3 minutes and browse our collection of properties
          </Typography>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 3 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 3 ? 'number-focused' : 'number'}>04</div>
          <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '10px' }}>Select</Typography>
          <Typography variant="h6" style={{ textAlign: 'left', paddingRight: '35%' }}>
            Sign up in less than 3 minutes and browse our collection of properties
          </Typography>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 4 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 4 ? 'number-focused' : 'number'}>05</div>
          <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '10px' }}>Happy</Typography>
          <Typography variant="h6" style={{ textAlign: 'left', paddingRight: '35%' }}>
            Sign up in less than 3 minutes and browse our collection of properties
          </Typography>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default LeftSide
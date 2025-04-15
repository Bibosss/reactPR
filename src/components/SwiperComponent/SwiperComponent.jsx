import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import css from "./SwiperComponent.module.css";
import { useState } from "react";

const SwiperComponent = ({ slides }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div>
      <Swiper
        onSwiper={setSwiperInstance}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={css.li}>
            <h2 className={css.h2}>{slide.name}</h2>
            <p className={css.p}>{slide.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.div}>
        <button
          className={`${css.button}`}
          onClick={() => swiperInstance?.slidePrev()}
        >
          <FaArrowLeft className={css.arrow} />
        </button>
        <button
          className={`${css.button}`}
          onClick={() => swiperInstance?.slideNext()}
        >
          <FaArrowRight className={css.arrow} />
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import styles from './Slider.module.css';
// import 'swiper/css'
import 'swiper/swiper-bundle.min.css';

const Slider = ({ slides }) => {

	return (
		<div>
			<Swiper
				slidesPerView={1}
				loop
				modules={[Navigation, Pagination, A11y, Autoplay]}
				autoplay={{ delay:5000, disableOnInteraction: false }}
				navigation
				pagination={{ clickable: true }}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<img
							className={styles.Image}
							src={slide.image}
							alt={slide.title} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

const PicSlider = () => {
	const swiper = useSwiper();
	return (
		<div>
			<Swiper
			slidesPerView={1}
			loop
			autoplay
			>
				<SwiperSlide>
					<img src="https://cdn.shopify.com/s/files/1/1265/2145/files/Mobile.jpg?v=1674071222&width=1400" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://cdn.shopify.com/s/files/1/1265/2145/files/app-launch-desktop-banner.jpg?v=1677267452&width=1400" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://cdn.shopify.com/s/files/1/1265/2145/files/Desktop_-_4.jpg?v=1679682625&width=1400" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://cdn.shopify.com/s/files/1/1265/2145/files/Desktop_banner.jpg?v=1682002604&width=1400" alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default PicSlider;
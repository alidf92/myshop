import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import styled from "styled-components";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const HeadSlider = () => {
    return (
        <BannerMain>
            <Right>
                <Swiper
                    className="width-900"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay
                >
                    <SwiperSlide>
                        <SliderImg src="/images/mob2.jpeg" alt="mobtwo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImg src="/images/mob4.jpeg" alt="mobfour" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImg src="/images/mob5.jpeg" alt="mobfive" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderImg src="/images/mob6.jpeg" alt="mobsix" />
                    </SwiperSlide>
                </Swiper>
            </Right>
            <Left>
                <SliderImgLeft src="/images/mob1.jpeg" alt="mobone" />
                <SliderImgLeft src="/images/mob3.jpeg" alt="mobthree" />
            </Left>
        </BannerMain>
    ); 
};

export default HeadSlider;

const BannerMain = styled.div`
    display: flex;
    overflow-x: hidden;
    direction: rtl;
    max-width: 1380px;
    margin-right: auto;
    margin-left: auto;
`;  

const Right = styled.div`
    display: flex;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
    padding: 15px 0;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 1000px) {
        max-width: 100%;
    }
`;
const SliderImg = styled.img`
    width: 100%;
    border-radius: 10px;
    @media only screen and (max-width: 1000px) {
        max-width: 100%;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    max-width: 33.34%;
    flex-basis: 33.34%;
    padding-right: 15px;
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;
const SliderImgLeft = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
`;

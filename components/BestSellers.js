import React, { useContext, useState } from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import { BestSellerContext } from "../pages";
import Card from "./Card";

const BestSellers = (props) => {
    const best = useContext(BestSellerContext);
    const [items, setItems] = useState([]);

    const Cards = best.map((item) => {
        return item.images === null ? (
            <Card
                key={item.id}
                discount={item.discount}
                name={item.name}
                price={item.price}
                id={item.id}
                sellprice={item.sell_price}
                img="noimg"
                measurement={item.measurement}
            />
        ) : (
            <Card
                key={item.id}
                discount={item.discount}
                name={item.name}
                price={item.price}
                sellprice={item.sell_price}
                id={item.id}
                img={item.images.images.original}
                measurement={item.measurement}
            />
        );
    });
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
        <>
        <Main>
            <Title>پیشنهاد شگفت انگیز</Title>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        168: {
                            width: 168,
                            slidesPerView: 1,
                        },
                        268: {
                            width: 268,
                            slidesPerView: 1,
                        },
                        640: {
                            width: 640,
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1000: {
                            width: 1000,
                            slidesPerView: 3,
                        },
                        1380: {
                            width: 1380,
                            slidesPerView: 4,
                        },
                    }}
                    className="swip-width"
                    spaceBetween={50}
                    observer={true}
                    observeParents={true}
                    slidesPerView={4}
                    navigation
                >
                    {Cards.map((i) => {
                        return (
                            <div key={Math.random()}>
                                <SwiperSlide
                                    key={Math.random()}
                                    className="swippad"
                                >
                                    {i}
                                </SwiperSlide>
                            </div>
                        );
                    })}
                </Swiper>
            </Main>
        </>
    );
};

export default BestSellers;



const Main = styled.div`
margin-top:170px;
padding-top:20px;
position: relative;
    max-width: 1380px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    direction: rtl !important;
`;

const Title = styled.p`
position: absolute;
right:0;
top:-70px;
    font-size: 1.3rem;
    font-weight: bold;
    color:#3f3f3f;

`;

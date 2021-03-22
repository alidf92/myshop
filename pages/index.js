import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BestSellers from "../components/BestSellers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeadSlider from "../components/HeadSlider";
import Offers from "../components/Offers";

export const OfferContext = React.createContext();
export const BestSellerContext = React.createContext();

export default function Home() {
    const [offerData, setOfferData] = useState([]);
    const [bestSellersData, setbestSellersData] = useState([]);
    useEffect(() => {
        axios
            .get("https://www.bamadar.com/data/api/get_promotions")
            .then((res) => {
                setOfferData(res.data.data);
            })
            .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        axios
            .get("https://www.bamadar.com/data/api/top_user_sells")
            .then((res) => {
                setbestSellersData(res.data.data);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <>
            <Main>
                <head>
                    <title>MyShop</title>
                </head>
                <Header />
                <HeadSlider />
            </Main>
            <OfferContext.Provider value={offerData}>
                <Offers />
            </OfferContext.Provider>
            <BestSellerContext.Provider value={bestSellersData}>
                <BestSellers />
            </BestSellerContext.Provider>
            <Footer />
        </>
    );
}

const Main = styled.div`
    margin: 0 15px;
`;

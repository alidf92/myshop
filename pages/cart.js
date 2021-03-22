import React, { useContext, useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import AddToCartContext from "../components/Context";
import BasketItems from "../components/BasketItems";
import Header from "../components/Header";

const cart = () => {
    const itemsContext = useContext(AddToCartContext);
    console.log(itemsContext);
    const clearHandler = (e) => {
        itemsContext.clear();
    };
    return (
        <>
            <Header />
            <Items>
                {itemsContext.items.length != 0 ? (
                    itemsContext.items.map((item) => {
                        return (
                            <BasketItems
                                img={item.img}
                                content={item.content}
                                name={item.name}
                                price={item.price}
                                id={item.id}
                                balance={item.balance}
                            />
                        );
                    })
                ) : (
                    <EmpCart>
                        <div>
                            <img src="/images/EmptyCart.svg" alt="emp" />
                        </div>
                        <EmpSpan>سبد خرید خالی است</EmpSpan>
                    </EmpCart>
                )}
                {
                    itemsContext.items.length != 0 ?
                    <Clear onClick={clearHandler}>حذف همه</Clear>
                    :""
                }
            </Items>

        </>
    );
};

export default cart;

const Items = styled.div``;

const EmpCart = styled.div`
    width: 200px;
    margin-right: auto;
    margin-left: auto;
    padding: 50px 0;
    margin-top: 150px;
    img {
        padding-left: 100px;
        width: 300px;
    }
`;

const EmpSpan = styled.div`
    margin-top: 25px;
    color: #000;
    text-align: center;
    margin-right: 22px;
`;

const Clear = styled.div`
color:#de0021;
cursor: pointer;
max-width:1200px;
margin-top:40px;
    margin-right: auto;
    margin-left: auto;
`
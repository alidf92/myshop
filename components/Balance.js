import React, { useContext } from "react";
import styled from "styled-components";
import AddToCartContext from "../components/Context";

const Balance = (props) => {
    const itemsContext = useContext(AddToCartContext);
    const addHandler = (e) => {
        itemsContext.plus(props.name, props.price, props.id, props.balance);
    };
    const negHandler = (e) => {
        itemsContext.neg(props.name, props.price, props.id, props.balance);
    };
    return (
        <NumChanges>
            <NumBorder>
                <PlusNum onClick={addHandler}>
                    <p>+</p>
                </PlusNum>
                <span> {props.balance}</span>
                <MinNum onClick={negHandler}>
                    <p>_</p>
                </MinNum>
            </NumBorder>
        </NumChanges>
    );
};

export default Balance;

const PlusNum = styled.div`
    position: relative;
    color: #fff;
    background-color: none;
    cursor: pointer;
    p {
        font-size: 16px !important;
        position: absolute;
        left: 6px;
        top: -15px;
    }
`;
const MinNum = styled.div`
    position: relative;
    color: #fff;
    background-color: none;
    cursor: pointer;
    p {
        font-size: 16px !important;
        position: absolute;
        right: 6px;
        bottom: -11px;
    }
`;

const NumChanges = styled.div`
    display: flex;

    margin-right: auto;
    margin-left: auto;
`;
const NumBorder = styled.div`
    display: flex;
    padding: 5px 27px 8px 27px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    span {
        display: flex;
        padding: 0px 4px;
        padding-top: 3px;
        font-size: 14px;
    }
`;

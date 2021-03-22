import React, { useContext, useState } from "react";
import styled from "styled-components";
import AddToCartContext from "./Context";
import { CartIcon } from "./icons/icons";


const Card = (props) => {
    const itemsContext = useContext(AddToCartContext);
    const imgsrc =
        props.img === `noimg`
            ? noimg
            : `https://www.bamadar.com/data` + props.img;
    const hasDiscount = props.discount;
    const [status , setStatus] = useState(false)
    const addHandler = (e) => {
        itemsContext.addItem(props.name, props.price, props.id , props.key , imgsrc);
        setStatus(true)
    };


    


    return (
        <>
            <CardMain>
                <CardRowOne>
                    <BuyPlus onClick={addHandler}>
                        <CartIcon />
                    </BuyPlus>
                    <img src={imgsrc} alt="img" />
                </CardRowOne>
                <CardContent>
                    <CardRowTwo>
                        <NameSpan>{props.name}</NameSpan>
                    </CardRowTwo>
                    <CardRowThree>
                        <Price>{props.sellprice} ریال </Price>
                        <Discount className={hasDiscount ? "" : "disnone"}>
                            <span> {props.discount} % </span>
                        </Discount>
                    </CardRowThree>
                    <CardRowFour>
                        <OldPrice className={hasDiscount ? "" : "disnone"}>
                            {props.price}
                        </OldPrice>
                    </CardRowFour>
                </CardContent>
            </CardMain>
        </>
    );
};

export default Card;

const CardMain = styled.div`
    position: relative;
cursor: pointer;
    direction: rtl !important;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 455px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 0.88rem !important;
    line-height: 28px;
    :hover {
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
    }
    @media only screen and (max-width:500px){
        width: 250px;
    height: 350px;
        
    }
`;

const CardRowOne = styled.div`
    margin: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    width: 190px;
    height: 200px;
    margin-bottom: 20px;
    z-index: 0;
    margin-right: auto;
    margin-left: auto;
    img {
        width: 100%;
        @media only screen and (max-width:500px){
        width:95px;
        height:100px;
        justify-content:center;
        }
    }
`;

const CardRowTwo = styled.div`
    padding: 20px;
    padding-top: 25px;
`;

const BuyPlus = styled.div`
    cursor: pointer;
    position: absolute;
    top: -1px;
    right: -2px;
    background-color: #e9444b;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    svg {
        margin: 6px 17px -4px 17px;
        width: 24px;
        height: 25px;
    }
`;

const CardContent = styled.div`
    padding-top: 10px;
`;
const NameSpan = styled.p`
    height: 50px;
    margin-bottom: 10px;
    display: grid;
`;
const CardRowThree = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
`;
const Price = styled.div``;
const Discount = styled.div`
    background-color: #e9444b;
    border-radius: 20px;
    color: #fff;
    width:55px;
    height:35px;
    text-align: center;
    padding-top:3px;

`;
const CardRowFour = styled.div`
    padding: 0 25px;
`;
const OldPrice = styled.p`
    text-decoration: line-through;
    color: #a0a0a0;
`;

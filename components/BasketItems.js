import React from "react";
import styled from "styled-components";
import Balance from "./Balance";

const BasketItems = (props) => {
    return (
        <>
            <Item>
                <ColOne>
                    <img src={props.img} alt="img" />
                </ColOne>
                <ColTwo>
                    <RowOne>{props.name}</RowOne>
                    <RowTwo>{props.price}</RowTwo>
                    <RowThree>
                        <Balance
                            id={props.id}
                            balance={props.balance}
                            price={props.price}
                            name={props.name}
                        />
                    </RowThree>
                </ColTwo>
                <ColThree>
                    <div>جمع کل</div>
                    <p>{props.price * props.balance}</p>
                </ColThree>
            </Item>
        </>
    );
};

export default BasketItems;

const Item = styled.div`
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: space-between !important;
    max-width: 1200px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 5%;
    border-radius: 35px;
    background: rgba(222, 0, 33, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    @media (max-width: 700px) {
        font-size: 11px;
    }
`;

const ColOne = styled.div`
    img {
        width: 150px;
        height: 150px;
        border-radius: 35px;
        @media only screen and (max-width: 1200px) {
            width: 110px;
            height: 115px;
            margin-top: 20px;
        }
        @media only screen and (max-width: 500px) {
            width: 80px;
            height: 90px;
            margin-top: 30px;
        }
    }
`;
const ColTwo = styled.div`
    padding-top: 35px;
`;
const RowOne = styled.div``;
const RowTwo = styled.div`
    margin: 10px 0;
`;
const RowThree = styled.div`
    display: flex;
    justify-content: center;
`;
const ColThree = styled.div`
    margin-top: 35px;
    p {
        margin-top: 45px;
    }
`;
const Clear= styled.div``
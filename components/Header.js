import React, { useContext } from "react";
import styled from "styled-components";
import {
    CartIcon,
    CategoryIcon,
    SearchIcon,
    UserProfileIcon,
} from "./icons/icons";
import Router from "next/router";
import AddToCartContext from "./Context";

const Header = () => {
    const itemsContext = useContext(AddToCartContext);
    const number = itemsContext.items.length;
    return (
        <HeaderMain>
            <TopHeader>
                <ColOne
                    onClick={() => {
                        Router.push("/");
                    }}
                >
                    <img src="/images/Logo.png" alt="Logo" />
                </ColOne>
                <ColTwo>
                    <SearchBox>
                        <input type="text" name="search" />
                        <SearchBtn>
                            <SearchIcon />
                        </SearchBtn>
                    </SearchBox>
                </ColTwo>
                <ColThree>
                    <RowOne>
                        <UnderLine
                            onClick={() => {
                                Router.push("/profile");
                            }}
                        >
                            <span>علی فراهانی</span>
                            <UserProfileIcon />
                        </UnderLine>
                    </RowOne>
                    <RowTwo>
                        <PaddLeft
                            onClick={() => {
                                Router.push("/cart");
                            }}
                        >
                            <span>سبد خرید</span>
                            <Relative>
                                {number == 0 ? "" : <Badge>{number}</Badge>}

                                <CartIcon />
                            </Relative>
                        </PaddLeft >
                        <PaddLeft>
                            <span>دسته بندی</span>
                            <CategoryIcon />
                        </PaddLeft>
                    </RowTwo>
                </ColThree>
            </TopHeader>
        </HeaderMain>
    );
};

export default Header;
const HeaderMain = styled.div`
    margin: 15px;
    border-radius: 15px;
    display: block;
    direction: rtl;
    max-width: 1380px;
    margin-right: auto;
    margin-left: auto;
    background-color: #de0021;
    color: #fff;
`;

const TopHeader = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    @media only screen and (max-width: 885px) {
        align-items: unset;
        flex-direction: column;
    }
`;

const ColOne = styled.div`
    display: flex;
    width: 100%;
    @media only screen and (max-width: 1280px) {
        display: none;
    }
    img {
        width: 162px;
        cursor: pointer;
    }
`;
const ColTwo = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`;
const SearchBox = styled.div`
    position: relative;
    width: 650px;
    @media only screen and (max-width: 885px) {
        width: 97%;
        margin-right: auto;
        margin-left: auto;
    }
    input {
        border: 1px solid #fff;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        outline: none;
        padding: 15px 5px;
    }
`;
const SearchBtn = styled.div`
    background-color: #dadada;
    height: 47px;
    width: 45px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    svg {
        position: absolute;
        top: 13px;
        right: 4px;
    }
`;
const ColThree = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    direction: ltr;
    justify-content: flex-end;

    @media only screen and (max-width: 885px) {
        flex-direction: row;
        justify-content: space-between;
        order: -1 !important;
    }
`;

const RowOne = styled.div`
    padding-left: 12px;
    display: flex;
    cursor: pointer;

    svg {
        cursor: pointer;
    }
    span {
        padding-top: 10px;
        padding-right: 15px;
        @media only screen and (max-width: 380px) {
            padding-right: 0px;
            padding-top: 13px;
            width: 100%;
            font-size: 12px;
        }
        @media only screen and (max-width: 1000px) {
            font-size: 12px;
        }
    }
`;
const UnderLine = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    @media only screen and (max-width: 885px) {
        border-bottom: none;
    }
`;

const RowTwo = styled.div`
    padding-top: 14px;
    display: flex;
    font-size: 11px;
    span {
        margin-right: 3px;
        width: 100%;
        @media only screen and (max-width: 380px) {
            display: none;
        }
    }
    span,
    svg {
        @media only screen and (max-width: 380px) {
            margin-right: 10px;
        }
        cursor: pointer;
    }
`;

const PaddLeft = styled.div`
    display: flex;
    padding-left: 12px;
    @media only screen and (max-width: 380px) {
        padding-left: 3px;
    }
`;

const Relative = styled.div`
    position: relative;
`;

const Badge = styled.div`
    position: absolute;
    bottom: 19px;
    left: 15px;
    height: 18px;
    width: 18px;
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    color: #de0021;
    font-size: 13px;
`;

import React from "react";
import styled from "styled-components";
import { FaceBookIcon, InstaIcon, TelegramIcon } from "./icons/icons";

const Footer = () => {
    return (
        <Main>
            <RowOne>
                <TelegramIcon />
                <InstaIcon />
                <FaceBookIcon />
            </RowOne>
            <RowTwo>
                طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ،
                صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار
                به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ
                شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر
                گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.
            </RowTwo>
            <RowThree>
                <span>پشتیبانی</span>
                <span>راهنما</span>
                <span>قوانین</span>
                <span>تماس با ما</span>
                <span>درباره ما</span>
            </RowThree>
        </Main>
    );
};

export default Footer;

const Main = styled.div`
    margin-top: 200px;
    padding-top: 40px;
    background-color: #505050;
`;

const RowOne = styled.div`
    max-width: 440px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    svg {
        width: 24px;
        height: 24px;
    }
    @media only screen and (max-width:1000px) {
            padding-right:40px;
            padding-left:40px;
            svg {
        width: 18px;
        height: 18px;
    }
    }
`;

const RowTwo = styled.div`
    padding: 55px 0 30px 0;
    max-width: 900px;
    margin-right: auto;
    margin-left: auto;
    color: #fff;
    @media only screen and (max-width:1000px) {
        display: none;
    }   
`;

const RowThree = styled.div`
    max-width: 900px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-top: 25px;
    padding-bottom: 25px;
    @media only screen and (max-width:1000px) {
            padding-right:30px;
            padding-left:30px;
            font-size:12px;
    }   
`;

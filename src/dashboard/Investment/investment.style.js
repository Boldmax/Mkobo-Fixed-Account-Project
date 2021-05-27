import styled from 'styled-components';
import { Link } from "react-router-dom";

export const InvestCard = styled.div`
 position: relative;
 display: block;
 height: 200px;
 width: 590px;
 background: rgba(2, 72, 205, 1);
 margin-top: 4rem;
 box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
 border-radius: 10px;
 margin-left: auto;
 margin-right: auto;

 @media (max-width: 1024px) {
    width: 420px;
    height: 172px;
}

@media (max-width: 414px) {
    width: 320px;
    height: 152px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 360px) {
    width: 320px;
    height: 152px;
    margin-left: auto;
    margin-right: auto;
}
`

export const Total = styled.h2`
display: block;
margin-right: auto;
margin-left: auto;
padding-top: 3rem;
width: 15rem;
color: #ffffff;
font-size: 14px;
line-height: 21px;
font-weight: 400;
`

export const Amount = styled.span`
display: block;
margin-right: auto;
margin-left: auto;
margin-top: 1.2rem;
width: 15rem;
color: #ffffff;
font-size: 32px;
line-height: 21px;
font-weight: 700;
`

export const Header = styled.h2`
display: block;
margin-left: 6rem;
margin-top: 4rem;
width: 12rem;
color: #233862;
font-size: 32px;
line-height: 21px;
font-weight: 600;

@media (max-width: 414px) {
margin-left: auto;
margin-right: auto;
}
`

export const Links = styled(Link)`
color: #AAC6CE;
font-size: 14px;
font-weight: 600;
width: 7rem;
margin: 0;
margin-left: 0rem;
padding: 0;

@media (max-width: 1280px) {
    margin-left: 3rem;
}

@media (max-width: 414px) {
    font-size: 12px;
    font-weight: 600;
    width: max-content;
    margin-left: 0rem;
    margin-top: 1rem;
}

&&:hover {
    color: #0248CD ;
    border-bottom: 2px solid #0248CD ;
}

&&:focus {
    color: #0248CD ;
    border-bottom: 2px solid #0248CD ;
}
`
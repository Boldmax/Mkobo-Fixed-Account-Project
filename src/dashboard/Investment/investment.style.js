import styled from 'styled-components';

export const InvestCard = styled.div`
 position: relative;
 display: block;
 height: 200px;
 width: 590px;
 background: rgba(2, 72, 205, 1);
 margin-top: 4rem;
 box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
 border-radius: 5px;
 margin-left: auto;
 margin-right: auto;

 @media (max-width: 1024px) {
    width: 420px;
    height: 172px;
}`

export const Total = styled.h2`
display: block;
margin-right: auto;
margin-left: auto;
padding-top: 2rem;
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
margin-top: 1.5rem;
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
`


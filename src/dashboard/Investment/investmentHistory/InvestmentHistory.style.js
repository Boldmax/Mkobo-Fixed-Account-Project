import styled from 'styled-components';


export const Table = styled.div`
position: relative;
display: block;
height: 100px;
width: 77vw;
background: #ffffff;
margin-top: 5px;
border-radius: 3px;
box-shadow: 0px 6px 7px -5px rgba(35, 56, 98, 0.13);
margin-left: auto;
margin-right: auto;

@media (max-width:414px){
    height: 70px;
    width: 85vw;
}
`

export const Title = styled.h3`
position: relative;
display: block;
width: max-content;
color: rgba(2, 72, 205, 1);
font-size: 18px;
margin-left: 1.4rem;
margin-top: 2rem;

@media (max-width:414px){
margin-left: 2rem;
}
`

export const InvestmentType = styled.h3`
position: relative;
display: block;
width: max-content;
color: rgba(35, 56, 98, 1);
font-size: 14px;
margin-left: 4rem;
margin-top: 1.5rem;
font-weight: 700;

@media (max-width:414px){
margin-left: 1rem;
margin-top: 0.8rem;
font-size: 12px;
}
`

export const Amount = styled.h3`
position: absolute;
width: max-content;
color: ${(props) => props.credit ? "rgba(38, 199, 35, 1)" : "#CB3F3F"};
font-size: 14px;
margin-left: 62rem;
margin-top: -2.5rem;
font-weight: 700;

@media (max-width:1284px){
margin-left: 55rem;
}

@media (max-width:414px){
margin-left: 16rem;
margin-top: -2.9rem;
}

@media (max-width:384px){
margin-left: 14rem;
margin-top: -2.9rem;
}
`

export const Time = styled.h3`
font-family: Poppins ;
font-size: 14px ;
line-height: 21px;
line-height: 100%;
margin: -0.8rem auto auto 4rem;
text-align: Left;
vertical-align: Center;
color: rgba(170, 198, 206, 1);

@media (max-width:414px){
    margin: -0.8rem auto auto 1rem;
}
`
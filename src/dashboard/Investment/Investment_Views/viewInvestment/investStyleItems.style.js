import styled from 'styled-components';


export const ViewInvestCard = styled.div`
position: relative;
display: block;
height: 208px;
width: 480px;
background: #ffffff;
margin-top: 2rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 6px;
margin: 2rem auto auto 2rem;

@media (max-width: 1280px) {
width: 420px;
height: 250px;
}

@media (max-width: 1024px) {
   width: 420px;
   height: 172px;
}

@media (max-width: 414px) {
   width: 320px;
   height: 240px;
}

@media (max-width: 360px) {
   width: 320px;
   height: 220px;
}
`

export const Title = styled.h3`
position: absolute;
display: block;
width: 10rem;
color: #233862;
margin-left: 2rem;
font-size: 22px;
font-weight: 600;
margin-top: 1rem;

@media (max-width: 1024px) {
    margin-left: 1rem;
    font-size: 19px;
    font-weight: 600;
}

@media (max-width: 968px) {
    margin-left: 1rem;
    font-size: 16px;
    font-weight: 600;
}
`

export const Head1 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #233862;
margin-top: 4rem;
float: left;
margin-left: 2rem;
margin-bottom: 2.5rem;
font-size: 1rem;

@media (max-width: 1024px) {
    margin-left: 1rem;
    font-size: 12px;
    font-weight: 600;
}

@media (max-width: 968px) {
    margin-left: 1rem;
    font-size: 10px;
    font-weight: 600;
}
`

export const Head2 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #0248CD;
margin-top: 3.8rem;
margin-left: 23rem;
font-size: 0.9rem;
font-weight: 600;

@media (max-width: 1280px) {
    margin-left: 20rem;
    font-size: 0.85rem;
}

@media (max-width: 1024px) {
    margin-left: 20rem;
    font-size: 0.85rem;
    font-weight: 600;
}

@media (max-width: 968px) {
    margin-left: 14rem;
    font-size: 0.85rem;
    font-weight: 600;
}

@media (max-width: 414px) {
    margin-left: 14.4rem;
}

`

export const Head3 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #0248CD;
margin-top: 7.5rem;
margin-left: 2rem;
font-size: 0.9rem;
font-weight: 600;


@media (max-width: 1024px) {
    margin-left: 1rem;
    font-size: 0.85rem;
    font-weight: 600;
}

@media (max-width: 968px) {
    margin-left: 1rem;
    font-size: 0.85rem;
    font-weight: 600;
}

@media (max-width: 360px) {
    margin-top: 8rem;
}
`
export const Head4 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #0248CD;
margin-top: 7.5rem;
margin-left: 23rem;
font-size: 0.9rem;
font-weight: 600;

@media (max-width: 1280px) {
    margin-left: 18.9rem;
    font-size: 0.85rem;
}

@media (max-width: 1024px) {
    margin-left: 20rem;
    font-size: 0.85rem;
    font-weight: 600;
}

@media (max-width: 968px) {
    margin-left: 14rem;
    font-size: 0.85rem;
    font-weight: 600;
}

@media (max-width: 414px) {
    margin-top: 9rem;
    margin-left: 13.4rem;
}

@media (max-width: 360px) {
    margin-top: 8rem;
}
`

export const Rate = styled.span`
color: rgba(38, 199, 35, 1);
;
font-size: 1rem;

@media (max-width: 1024px) {
    font-weight: 600;
}

@media (max-width: 968px) {
    font-size: 10px;
    font-weight: 600;
}
`
export const BackButton = styled.button`
display: block;
position: relative;
width: 151.51px;
height: 40px;
font-size: 14px;
font-weight: 600;
border-radius: 4px;
border: none;
color: #ffffff;
background: ${(props) => props.liquidate ? "#CB3F3F" : "#0248CD"}; 
margin:9.5rem auto auto auto;

@media (max-width: 1280px) {
margin: 11rem 2rem 2rem 8.6rem;
}

@media (max-width: 1024px) {
    width: 140px;
    height: 42px;
}

@media (max-width: 414px) {
margin:11rem 2rem 2rem 6rem;
}

@media (max-width: 360px) {
width: 134px;
height: 40px;
margin:10.4rem 2rem 2rem 6rem;
}
`
export const Select = styled.select`
position: absolute;
width: 12rem;
height: 2.8rem;
color: rgba(35, 56, 98, 1);
margin: -2.4rem auto auto 11rem;
border: 1px solid rgba(93, 129, 162, 0.3);
background: rgba(250, 251, 251, 1);

option{

}
@media (max-width: 414px) {
    margin: -2.4rem auto auto 10rem;
}

@media (max-width: 375px) {
    margin: -2.4rem auto auto 9rem;
}

@media (max-width: 360px) {
    margin: -2.4rem auto auto 8rem;
}
`

export const Filter = styled.span`
position: relative;
display: block;
width: max-content;
color: rgba(170, 198, 206, 1);
font-size: 14px;
line-height: 21px;
margin: 3rem auto auto 3rem;

@media (max-width: 414px) {
    margin: 3rem auto auto 2rem; 
}

@media (max-width: 375px) {
    margin: 3rem auto auto 1rem; 
}

@media (max-width: 360px) {
    margin: 3rem auto auto 0rem; 
}
`

//View Invest modals ////////////////////////////////////////////////////////////////////////////////////

export const WithdrawCard = styled.div`
position: absolute;
height: 700px;
width: 490px;
left: 0px;
border-radius: 0px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 13px 0px rgba(1, 27, 51, 0.21);
z-index: 20;
margin: auto auto auto 58.2rem;
top: ${(props) => props.hide ? "7rem" : "-60rem"};

@media (max-width:1280px){
margin: auto auto auto 48.2rem; 
}

@media (max-width:414px){
    left: auto;
    height: 40.375rem;
    width: 24rem;
    margin: auto auto auto 0.9rem;
    top: ${(props) => props.hide ? "20rem" : "-50rem"};
}

@media (max-width:384px){
left: auto;
width: 21.75rem;
margin: auto auto auto 1rem;
}

@media (max-width:360px){
margin: auto auto auto 0.4rem;
}
`
export const LiquidateCard = styled.div`
position: absolute;
height: 700px;
width: 490px;
left: 0px;
border-radius: 0px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 13px 0px rgba(1, 27, 51, 0.21);
z-index: 20;
margin: auto auto auto 58.2rem;
top: ${(props) => props.change ? "7rem" : "-60rem"};

@media (max-width:1280px){
margin: auto auto auto 48.2rem; 
}

@media (max-width:414px){
    left: auto;
    height: 40.375rem;
    width: 24rem;
    margin: auto auto auto 0.9rem;
    top: ${(props) => props.hide ? "20rem" : "-50rem"};
}

@media (max-width:384px){
left: auto;
width: 21.75rem;
margin: auto auto auto 1rem;
}

@media (max-width:360px){
margin: auto auto auto 0.4rem;
}
`

export const Close = styled.span`
display: block;
color: rgba(170, 198, 206, 1);
font-size: 2rem;
margin: 1rem auto auto 28rem;
cursor: pointer;
font-weight: 300;

@media (max-width:414px){
margin: 1rem auto auto 21rem;
font-size: 1.5rem;
}

@media (max-width:384px){
margin: 1rem auto auto 19rem;
font-size: 1.5rem;
}
`;

export const Header = styled.h3`
position: relative;
height: 36px;
width: 273px;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 29px;
color: rgba(2, 72, 205, 1);
letter-spacing: -0.015em;
text-align: left;
margin: 3rem auto auto 2.1rem;

@media (max-width:384px){
margin: 3rem auto auto 1.5rem;
}
`

export const Content = styled.h3`
position: relative;
height: 63px;
width: 419px;
color: rgba(170, 198, 206, 1);
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
margin: 0.5rem auto auto 2.1rem;

@media (max-width:414px){
font-size: 13px;
width: 297px;
margin: 0.5rem auto auto 2.1rem;

@media (max-width:384px){
margin: 0.5rem auto auto 1.5rem;
}
}
`

export const AlertCard = styled.h3`
position: relative;
height: 88px;
width: 419px;
border-radius: 4px;
background: rgba(2, 72, 205, 0.33);
margin: 1rem auto auto 2.1rem;

@media (max-width:414px){
height: 58px;
width: 319px;
}

@media (max-width:414px){
width: 300px;
}

@media (max-width:384px){
margin: 1rem auto auto 1.5rem;
width: 300px;
}
`

export const AlertContent = styled.h3`
position: relative;
display: block;
height: 55px;
width: 347px;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
margin: 1.3rem auto auto auto;
color: #0248CD;

@media (max-width:414px){
font-size: 13px;
width: 247px;
margin: 0.6rem auto auto auto;
}
`

export const Content2 = styled.h3`
position: relative;
height: 24px;
width: 352px;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
margin: 1rem auto auto 2.1rem;
color: #AAC6CE;

@media (max-width:414px){
margin: 1rem auto auto 0rem;
}
`

export const SubmitButton = styled.button`
position: relative;
display: block;
height: 48px;
width: 419px;
border-radius: 4px;
background: ${(props) => props.red ? "rgba(203, 63, 63, 1)" : "rgba(2, 72, 205, 1)"};
color: #ffffff;
border: none;
margin: 7rem auto auto auto;

@media (max-width:414px){
display: block;
height: 46px;
width: 290px;
margin: 7rem auto auto auto;
}
`

export const Cancel = styled.a`
position: relative;
display: block;
height: 22px;
width: 383px;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 21px;
text-decoration: none;
cursor: pointer;
text-align: center;
color: rgba(35, 56, 98, 1);
margin: 2rem auto auto auto;
`

export const CheckBox = styled.input`
position: relative;
height: 15px;
width: 15px;
border-radius: 1px;
color: rgba(2, 72, 205, 1);
cursor: pointer;
margin: auto auto auto auto;

@media (max-width:414px){
margin: auto auto auto 1.5rem;
}
`
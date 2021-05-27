import styled from 'styled-components';


export const ViewInvestCard = styled.div`
position: relative;
display: block;
height: 220px;
width: 330px;
background: #0248CD;
margin-top: 2.5rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 10px;
margin-left: auto;
margin-right: auto;

@media (max-width: 1280px) {
    height: 220px;
    width: 300px;
}

@media (max-width: 1024px) {
   width: 420px;
   height: 172px;
}

@media (max-width: 414px) {
   width: 420px;
   height: 230px;
}

@media (max-width: 360px) {
   width: 420px;
   height: 220px;
}
`

export const Title = styled.h3`
position: absolute;
display: block;
width: 10rem;
color: #ffffff;
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
color: #ffffff;
margin-top: 5rem;
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
    font-size: 0.85rem;;
    font-weight: 600;
}


`

export const Head2 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #ffffff;
margin-top: 5rem;
margin-left: 15rem;
font-size: 0.9rem;
font-weight: 600;

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
    margin-left: 19rem;
}

@media (max-width: 384px) {
    margin-left: 18rem;
    font-size: 0.85rem;
}

@media (max-width: 360px) {
    margin-left: 16.7rem;
}
`

export const Head3 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #ffffff;
margin-top: 8.2rem;
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


`
export const Head4 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #ffffff;
margin-top: 11rem;
margin-left: 2rem;
font-size: 0.9rem;
font-weight: 600;

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
    margin-left: 1.2rem;

}

@media (max-width: 360px) {
    margin-left: 1rem;

}
`

export const Rate = styled.span`
color: #ffffff;
font-size: 1rem;
font-weight: 600;

@media (max-width: 1024px) {
    font-weight: 600;
}

@media (max-width: 968px) {
    font-size: 0.85rem;;
    font-weight: 600;
}
`
export const BackButton = styled.button`
display: block;
position: absolute;
width: 104px;
height: 40px;
font-size: 14px;
font-weight: 600;
border: none;
border-radius: 5px;
color: #0248CD;
background: #ffffff ; 
margin: 9.4rem 6rem 2rem 11rem;

@media (max-width: 1024px) {
    width: 140px;
    height: 42px;
}

@media (max-width: 414px) {
margin:9.4rem 5rem 2rem 13.5rem;
}

@media (max-width: 384px) {
    margin-left: 12.2rem;
}

@media (max-width: 360px) {
    margin:9.2rem 6rem 2rem 11rem;
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
    margin: 3rem auto auto 0rem; 
}

@media (max-width: 360px) {
    margin: 3rem auto auto 0rem; 
}
`

// modals Components //////////////////////////////////////////////////

export const ModalPlane = styled.div`
position: absolute;
display: block;
height: 46.625rem;
width: 30.625rem;
left: 58.5rem;
top: ${(props) => props.control ? "7rem" : "-50rem"};
border-radius: 13px;
color: rgba(1, 27, 51, 0.21);
background: rgba(255, 255, 255, 1);
transform: all 2s ease;
box-shadow: 0px 0px 13px 0px rgba(1, 27, 51, 0.21);
z-index: 19;

@media (max-width:1280px){
    left: 48.5rem;
}

@media (max-width:414px){
    left: auto;
    height: 40.375rem;
    width: 24rem;
    margin: auto auto auto 0.9rem;
    top: ${(props) => props.control ? "20rem" : "-50rem"};
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
export const Input = styled.input`
height: 56px;
width: 419px;
left: 35px;
top: 236.7802734375px;
border-radius: 5px;
border: 1px solid rgba(93, 129, 162, 0.3);
color: rgba(170, 198, 206, 1);
margin: 0.2rem auto auto 2rem;
background: #ffffff;

@media (max-width:414px){
display: block;
height: 36px;
width: 300px;
left: auto;
margin: 0.2rem auto auto auto;
}

`;

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

export const Header = styled.h5`
display: block;
color: rgba(2, 72, 205, 1);
/* font-family: Montserrat; */
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 29px;
letter-spacing: -0.015em;
text-align: left;
margin: 2rem auto auto 2rem;

@media (max-width:414px){
font-size: 20px;
margin: 2rem auto auto 2.5rem;
}

@media (max-width:384px){
margin: 2rem auto auto 1.5rem;
}
`;

export const Content = styled.h5`
height: 48px;
width: 419px;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: rgba(170, 198, 206, 1);
margin: auto auto auto 2.3rem;
margin-top: ${(props) => props.adjust ? "3rem" : "auto"};

@media (max-width:414px){
margin: auto auto auto 2.5rem;
width: 18.625rem;
font-size: 12px;
margin-top: ${(props) => props.adjust ? "3rem" : "auto"};
}

@media (max-width:384px){
margin: auto auto auto 1.5rem;
}
`;

export const ContentB = styled.h5`
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: rgba(35, 56, 98, 1);
margin: 2rem auto auto 2rem;

@media (max-width:414px){
margin: 2rem auto auto 2.5rem;
width: 300px;
font-size: 13px;
}

@media (max-width:384px){
margin: 2rem auto auto 1.5rem;
}
`

export const SelectBox = styled.select`
position: relative;
height: 56px;
width: 419px;
left: 35px;
border-radius: 5px;
border: 1px solid rgba(93, 129, 162, 0.3);
margin: 0.3rem auto auto auto;
background: #ffffff;

option{

}

@media (max-width:414px){
display: block;
height: 36px;
width: 300px;
left: auto;
margin: 0.2rem auto auto auto;
}
`

export const SubmitButton = styled.button`
display: block;
height: 48px;
width: 419px;
left: 0px;
top: 0px;
border-radius: 4px;
border: none;
background: rgba(169, 177, 192, 1);
margin: auto;

&&:hover{
background: rgba(2, 72, 205, 1);
color: #ffffff;
}

@media (max-width:414px){
display: block;
height: 36px;
width: 290px;
margin: 0.2rem auto auto auto;
}
`
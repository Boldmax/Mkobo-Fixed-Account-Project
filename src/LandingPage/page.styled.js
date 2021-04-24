import styled from 'styled-components';

export const Navbutton = styled.button`
border: 2px solid #0248CD;
background: ${(props) => props.primary ? "#ffffff" : "#0248CD"} ; 
border-radius: 4px;
font-size: 14px;
color: ${(props) => props.primary ? "#0248CD" : "#ffffff" };

@media (max-width: 1920px) {
    width: 164px;
    height: 50px;
    font-size: 18px;

}

@media (max-width: 1440px) {
    width: 154px;
    height: 48px;
    font-size: 14px;
}

@media (max-width: 1024px) {
    width: 124px;
    height: 38px;
    font-size: 13px;
}

@media (max-width: 768px) {
    width: 124px;
    height: 38px;
    font-size: 13px;
}

&:hover{
    background: ${(props) => props.primary ? "#0248CD" : "#ffffff" };
    color: ${(props) => props.primary ? "#ffffff" : "#0248CD"};
}
`


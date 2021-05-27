import styled from 'styled-components';


export const ButtonBar = styled.div`
position: relative;
display: block;
background-color: #ffffff;
height: 72px;
width: 323px;
border: 1px solid #AAC6CE;
border-radius: 5px;

@media (max-width: 1024px) {
    width: 303px;
    height: 60px;
}
`

export const InputBar = styled.input`
position: relative;
display: block;
background: #E5E5E5;
height: 56px;
width: 530px;
border: 1px solid #5D81A24D;
border-radius: 5px;
font-size: 1.5rem;
margin: 1rem 0;

@media (max-width: 1024px) {
    width: 380px;
    height: 46px;
    font-size: 1rem;
    margin-left: 5rem;
}

@media (max-width: 414px) {
    width: 320px;
    height: 46px;
    font-size: 1rem;
    margin-left: 2rem;
}

@media (max-width: 384px) {
    width: 320px;
    margin-left: 1rem;
}

@media (max-width: 360px) {
    margin-left: 0rem;
}
`

export const BackButton = styled.button`
display: block;
position: relative;
width: 154px;
height: 48px;
font-size: 14px;
font-weight: 600;
border-radius: 5px;
color: #ffffff;
background-color: #0248CD;
background-color: yellow;
margin:2rem 2rem 2rem 8rem;

@media (max-width: 1024px) {
    width: 140px;
    height: 42px;
}

@media (max-width: 414px) {
    margin:2rem auto 2rem 15rem;
}

&:hover{
    color: #0248CD;
    background-color: #ffffff;
    border: 1px solid #0248CD;
    padding: 0.5rem 2rem;
}
`

/* export const Cards = styled.div`
 position: relative;
 display: block;
 height: 192px;
 width: 530px;
 background: rgba(2, 72, 205, 1);
 margin: auto;
 margin-top: 1rem;
 box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);

 @media (max-width: 1024px) {
    width: 420px;
    height: 172px;
}
` */

/* export const Title = styled.h3`
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
`

export const Head1 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #ffffff;
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
`

export const Head2 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #ffffff;
margin-top: 3rem;
margin-left: 25rem;
font-size: 0.9rem;

@media (max-width: 1024px) {
    margin-left: 20rem;
    font-size: 0.85rem;
    font-weight: 600;
}
`

export const Head3 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #ffffff;
margin-top: 9rem;
margin-left: 2rem;
font-size: 0.9rem;

@media (max-width: 1024px) {
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
margin-top: 9rem;
margin-left: 25rem;
font-size: 0.9rem;

@media (max-width: 1024px) {
    margin-left: 20rem;
    font-size: 0.85rem;
    font-weight: 600;
}
` */
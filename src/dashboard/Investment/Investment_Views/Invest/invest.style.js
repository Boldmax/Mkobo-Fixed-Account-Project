import styled from 'styled-components';


export const ViewInvestCard = styled.div`
position: relative;
display: block;
height: 220px;
width: 300px;
background: #0248CD;
margin-top: 4rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 10px;
margin-left: auto;
margin-right: auto;

@media (max-width: 1024px) {
   width: 420px;
   height: 172px;
}`

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
color: #ffffff;
margin-top: 3.8rem;
margin-left: 12rem;
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
`

export const Head3 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #ffffff;
margin-top: 7.6rem;
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
`

export const Rate = styled.span`
color: green;
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
position: absolute;
width: 104px;
height: 40px;
font-size: 14px;
font-weight: 600;
border: none;
border-radius: 5px;
color: #0248CD;
background: #ffffff ; 
margin:9.8rem 6rem 2rem 11rem;

@media (max-width: 1024px) {
    width: 140px;
    height: 42px;
}
`
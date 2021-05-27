import styled from 'styled-components';


export const ViewInvestCard = styled.div`
position: relative;
display: block;
height: 250px;
width: 540px;
background: #ffffff;
margin-top: 2rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 10px;
margin-left: auto;
margin-right: auto;
z-index: 1;

@media (max-width: 1280px) {
width: 420px;
height: 250px;
}

@media (max-width: 1024px) {
   width: 420px;
   height: 172px;
};

@media (max-width: 414px) {
    width: 580px;
    height: 240px;
/*     background-color: black; */
};

@media (max-width: 360px) {
height: 240px;
width: 540px;
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
margin-left: 25rem;
font-size: 0.9rem;
font-weight: 600;

@media (max-width: 1280px) {
    margin-left: 19rem;
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
    margin-left: 17rem;
};

@media (max-width: 384px) {
    margin-left: 15.5rem;
};
`

export const Head3 = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: #0248CD;
margin-top: 9rem;
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
color: #0248CD;
margin-top: 9rem;
margin-left: 25rem;
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
    margin-left: 18rem;
};

@media (max-width: 384px) {
    margin-left: 16.5rem;
};
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

export const Dates = styled.h5`
position: absolute;
display: block;
width: 14rem;
color: grey;
margin-top: 13rem;
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
    margin-left: 5rem;
    margin-top: 12rem;
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
    margin: 3rem auto auto 1.5rem; 
}

@media (max-width: 375px) {
    margin: 3rem auto auto 0rem; 
}

@media (max-width: 360px) {
    margin: 3rem auto auto 0rem; 
}
`
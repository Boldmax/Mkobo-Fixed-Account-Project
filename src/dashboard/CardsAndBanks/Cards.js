import React from 'react'
//import AccountNav from '../Account/AccountNav';
import vector from './Vector.png'
import states from '../Investment/Investment_Views/resources';
import image from './Visa.png';
import Master from './Master.png';
import { BankEmpty, BankDesc, Button, LargeCard, MainCards, Cross, CrossDecsrip, CardNumber, CardOwner, Logo } from "./cardsAndBank.style";


export default function Cards() {

    if (states.length === 0) {
        return <div className="cardContainer">
            <img id="CardImg" src={vector} />
            <BankEmpty>No card</BankEmpty>
            <BankDesc id="noCard">You have not added any debit card to your account. You need to add a card to fund
            your account. Click add card below to get started.
            </BankDesc>
            <Button>Add card</Button>
        </div>
    }
    return (
        <div className="accountCardDisplay">
            <LargeCard>
                <Cross>
                    +
               </Cross>
                <CrossDecsrip copy>
                    Add new account
               </CrossDecsrip>
            </LargeCard>
            {states.options.map((detail, key) => {
                return <MainCards visa={detail.cardType} key={key}>
                    <CardNumber>{detail.cardNumber}</CardNumber>  
                    <Logo visa={detail.cardType} image={image} Master={Master} />                 
                    <CardOwner>{detail.user_name}</CardOwner>                  
                </MainCards>
            })}
        </div>
    )
}

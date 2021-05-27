import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Nav } from './cardsAndBank.style'
import './cardsAndBank.css';



export default function CardsAndbanks() {
    return (
        <div className="Cardandbanks">
            <Title> Cards & Banks </Title>
            <div className="CardandbanksNav">
                <Link to="/dashboard/cardsandbanks/cards" style={{ margin: "0", padding: "0", textDecoration: "none" }}>
                    <Nav href="#">Cards</Nav>
                </Link>
                <Link to="/dashboard/cardsandbanks/account" style={{ margin: "0", padding: "0", textDecoration: "none" }}>
                    <Nav href="#">Account</Nav>
                </Link>
            </div>
            <hr id='breaker' />
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';



export default function CardsAndbanks() {
    return (
        <div className="Cardandbanks">
            <h2> Cards & Banks </h2>
            <div className="CardandbanksNav">
                <Link to="/dashboard/cardsandbanks/cards" style={{ margin: "0", padding: "0", marginRight: "5rem" }}>
                    <a  href="#">Cards</a>
                </Link>
                <Link to="/dashboard/cardsandbanks/account" style={{ margin: "0", padding: "0" }}>
                <a   href="#">Account</a>
                </Link>
            </div>
        </div>
    )
}
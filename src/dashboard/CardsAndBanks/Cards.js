import React from 'react'
import AccountNav from '../Account/AccountNav';
import vector from './Vector.png'

export default function Cards() {

    if (AccountNav.length === 0) {
        return <div className="cardContainer">
            <img src={vector} />
            <h4>No card</h4>
            <p id="noCard">You have not added any debit card to your account. You need to add a card to fund
            your account. Click add card below to get started.
            </p>
            <button>Add card</button>
        </div>
    }
    return (
        <div className="Accountcard">
            <div className="cardDisplay">

            </div>
        </div>
    )
}

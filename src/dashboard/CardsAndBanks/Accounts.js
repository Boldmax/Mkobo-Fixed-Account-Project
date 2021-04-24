import React from 'react';
import vector from './Vector2.png'

  const bankNames=  [ ]


export default function Accounts() {

    if (bankNames.length === 0) {
        return <div className="cardContainer">
            <img id="CardImg" src={vector} />
            <h4>No Bank</h4>
            <p id="noCard">You have not added any bank. You need to add a bank to
             withdraw your investment to. Click add bank below to get started.
            </p>
            <button>Add bank</button>
        </div>
    }
    return (
        <div>
            
        </div>
    )
}

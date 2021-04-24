import React from 'react';

const states = {
    options: [
        { name: "Lagos" },
        { name: "Abia" },
        { name: "Adamawa" },
        { name: "Akwa-Ibom" },
    ]
}

export default function PersonalDetails() {
    return (
        <div className="PersonalDetails">
            <form className="PD-container">
                <div className="block-1">
                    <div className="subBlock-1">
                        <label>Title</label>
                        <select>
                            <option>Chief</option>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Miss</option>
                        </select>
                    </div>
                    <div className="subBlock-1">
                        <label>First Name</label>
                        <input type='text' />
                    </div>
                    <div className="subBlock-1">
                        <label>Last Name </label>
                        <input type='text' />
                    </div>
                    <div className="subBlock-1">
                        <label>Phone Number</label>
                        <input type='text' />
                    </div>
                </div>
                <div className="block-2">
                    <label>Email</label>
                    <input type='text' />
                </div>
                <div className="block-1">
                    <div className="subBlock-1">
                        <label>Date of Birth</label>
                        <input type='date' />
                    </div>
                    <div className="subBlock-1">
                        <label for='gender'>Gender</label>
                        <select name='gender'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="block-2">
                        <label>Home Address</label>
                        <input type='text' />
                    </div>
                </div>
                <div className="block-1">
                    <div className="subBlock-1">
                        <label>City </label>
                        <input name='text' />
                    </div>
                    <div className="subBlock-1">
                        <label>State</label>
                        <select type='text'>
                            {states.options.map(state => {
                                return <option>{state.name}</option>
                            }
                            )}
                        </select>
                    </div>
                </div>
                <div className="block-1">
                <button id="back" type='submit'>Back</button>
                <button id="proceed" type='submit'>Proceed</button>
                </div>
            </form>
        </div>
    )
}

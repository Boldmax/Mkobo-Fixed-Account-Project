import React, { useState, useEffect, useContext } from 'react';
import { InputBar, BackButton } from "./AccountNav.styled";
import image from "./Ellipse2.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { GlobalState } from '../../GlobalState'



const schema = yup.object().shape({
    BVN: yup.string().required("BVN is required").matches(/^[0-9]+$/, "Enter a valid BVN").min(11, "Enter a valid BVN").max(11),
    fisrt_name: yup.string().required("Enter a valid Email Address"),
    last_name: yup.string().required("Enter a valid Email Address"),
    address: yup.string().required("Enter a valid Email Address"),
    gender: yup.string().required("Password is required"),
    email: yup.string().required("Enter a valid Email Address"),
    date_of_birth: yup.string().required("BVN is required")
})


export default function InvestmentDetails() {
    const { token } = useContext(GlobalState)

    const [bvn, setBvn] = useState({});
    const [firstName, setFirstName] = useState({});
    const [lastName, setLastName] = useState({});
    const [email, setEmail] = useState({});
    const [date, setDate] = useState({});
    const [address, setAddress] = useState({});
    const [gender, setGender] = useState();


    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const getFromLS = () => {
        return  localStorage.getItem('JWT')
       }; 
       console.log(getFromLS())
    const handleDisplay = () => {
        axios.get('http://localhost:4000/app/user/', {
            headers: {
                Authorization: `Bearer ${getFromLS()}`
            }
        })
            .then(resp => {
                console.log(gender)
                setBvn(resp.data[0].BVN);
                setFirstName(resp.data[0].fisrt_name);
                setLastName(resp.data[0].last_name);
                setEmail(resp.data[0].email);
                setDate(resp.data[0].date_of_birth);
                setAddress(resp.data[0].address)
                setGender(resp.data[0].gender)
            });
    }

    useEffect(() => {
        handleDisplay()
    })


    let onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:4000/app/users/create', data)
            .then(res => console.log(res))
        //     history.push()
    };
    return (
        <div className="InvestmentDetails" >
            <h2>My Profile</h2>
            <form className="contentBody" onSubmit={handleSubmit(onSubmit)}>
                <div className="profileImage">
                    <img src={image} />
                    <a href='#'>Tap to change profile image</a>
                </div>
                <label>BVN</label>
                <InputBar ref={register} name="BVN" placeholder={bvn} />
                <label>First Name</label>
                <InputBar ref={register} name="fisrt_name" placeholder={firstName} />
                <label>Last Name</label>
                <InputBar ref={register} name="last_name" placeholder={lastName} />
                <label>Email Address</label>
                <InputBar ref={register} name="email" placeholder={email} />
                <label>Gender</label>
                <select ref={register} name="gender" value={gender} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label>Date of Birth</label>
                <input type='date' ref={register} name="date_of_birth" placeholder={date} />
                <label>Address</label>
                <InputBar ref={register} name="address" placeholder={address} />
                <BackButton type="submit" id='BackButton1' value="submit">Update</BackButton>
            </form>
        </div>
    )
}

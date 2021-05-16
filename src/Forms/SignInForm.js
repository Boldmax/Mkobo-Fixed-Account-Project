import React, { useState, useContext } from 'react';
import content from "./signIndata";
import './form.css';
import { Link, useHistory } from "react-router-dom";
import illustration from "./Group.png"
import logo from "../LandingPage/logo.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from 'axios';
import { GlobalState } from '../GlobalState'
//import Proptypes from 'prop-types';
//import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const schema = Yup.object().shape({
    EmailAddress: Yup.string().required("Enter a valid Email Address").email(),
    Password: Yup.string().required("Password is required"),
})



export default function SignInForm() {
     const {token, setToken} = useContext(GlobalState);

    /*   axios.defaults.headers.common['Authorization'] = tokenate;
      console.log(tokenate) */

    let history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    // authentication
    const onSubmit = (data) => {
        axios.post('http://localhost:4000/form/login', data)
            .then(res => {
                const token = res.data.accessToken
                localStorage.setItem('JWT', token);
                             
               // setToken(getFromLS())
                // console.log(getFromLS())
                if (token) {
                    history.push('/dashboard')
                    /*  {
                         pathname: '/dashboard/'+ mail +'',
                         state: { token: `${res.data.accessToken}` }
                     } */
                }
            })
    }

    return (
        <div className="signIn-container">
            <div className="sub-container">
                <div className="signIn-illustration1">
                    <img src={logo} alt="" />
                    <img src={illustration} alt="" />
                </div>
                <div className="form-body1">
                    <h2>Log in</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        {content.inputs.map((data, key) => {
                            return (
                                <div className="fContent" key={key}>
                                    <>
                                        <label id="signInLabel" for={data.label}>{data.label}</label>
                                        <input
                                            type={data.type}
                                            name={data.name}
                                            ref={register}
                                        />
                                    </>
                                    <span id="span" >{errors[data.name]?.message}</span>
                                </div>
                            )
                        })}
                        <a href="#">Forgot password?</a>
                        <button type="submit" className="btn btn-outline-none" value="submit">Log in</button>
                        <p>Don't have an account? <Link to="signupform"><a>Create an account</a></Link></p>

                    </form>
                </div>
            </div>
        </div>
    )
}

/* SignInForm.proptype = {
    setToken: Proptypes.func.isRequired
}; */
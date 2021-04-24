import React, { useState } from 'react';
import content from "./signIndata";
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';
import { Link, useHistory } from "react-router-dom";
import illustration from "./Group.png"
import logo from "../LandingPage/logo.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from 'axios';

const schema = Yup.object().shape({
    emailAddress: Yup.string().required("Enter a valid Email Address").email(),
    Password: Yup.string().required("Password is required"),
})


export default function SignInForm() {
    //const [token, setToken] = useState(false);

    let history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    // authentication
    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:4000/app/signin', data)
        .then(res => console.log(res))
        history.push('/dashboard')

        /* useEffect(() => {
            axios.post('link', data)
                .then(res => {
                    localStorage.setItem('token', res.token)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []) */
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

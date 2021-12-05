import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useEffect} from "react";

function CreatePost() {
    
    const initalValues = {
        title: "",
        postText: "",    };
    let navigate = useNavigate( )

    useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            navigate('/login')
        }
    }, [])

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a title"),
        postText: Yup.string().required(),
    })
    const onSubmit = (data) => {
        axios
            .post("http://localhost:3001/posts", data, 
                {headers: {accessToken: localStorage.getItem('accessToken')}})
            .then(() => {
                navigate('/')
            });
    };

    return (
        <div className = "createPostPage">
            <Formik initialValues= {initalValues} onSubmit= {onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Advertisment Title</label>
                    <ErrorMessage name="title" component="span" />
                    <Field id ="inputCreatePost" 
                        name = "title" 
                        placeholder="Enter Advertisment Title"/>
                    <label>Description</label>
                    <ErrorMessage name="postText" component="span" />
                    <Field id ="description" 
                        name = "postText" 
                        placeholder="Enter Advertisment Details"/>

                    <button type="submit">Submit Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost

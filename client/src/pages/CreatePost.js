import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import axios from "axios";

function createPost() {
    const initalValues = {
        title: "",
        postText: "",
        username: ""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a title"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
                console.log("It worked")
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
                    <label>Username</label>
                    <ErrorMessage name="username" component="span" />
                    <Field id ="username" 
                        name = "username" 
                        placeholder="Enter Username"/>

                    <button type="submit">Submit Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default createPost

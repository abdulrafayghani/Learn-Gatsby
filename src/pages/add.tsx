import React, {useState, useEffect} from "react"
import { useFormik, Formik, Form, ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Layout } from "../components/Layout/Layout";

export default function add(){
    const [myData, setMyData] = useState<any>("")

    return(
        <div>
            <Layout>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                age: 0
            }}
            onSubmit={(values)=>{
                console.log(values);
                fetch(`/.netlify/functions/add`, {
                  method: 'post',
                  body: JSON.stringify(values)
                })
                .then(response => response.json())
                .then(data => {
                setMyData(data);
                console.log("Data: " + JSON.stringify(data));
                
              });
            }}
            >
                {
                    (formik) => (
                        <Form onSubmit={formik.handleSubmit}>
                            <div>
                                <Field type='text' as={TextField} variant='outlined' lable='First Name' name='firstName' />
                            </div>
                            <div>
                                <Field type='text' as={TextField} variant='outlined' lable='Last Name' name='lastName' />
                            </div>
                            <div>
                                <Field type='number' as={TextField} variant='outlined' lable='Age' name='age' />
                            </div>
                            <Button type='submit'> Add </Button>
                        </Form>
                    )
                }
            </Formik>
            <div>{myData.id} </div>
            </Layout>
        </div>
    )
}


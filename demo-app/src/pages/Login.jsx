import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
     <Helmet>
        <title>Login</title>
    </Helmet>
    <Formik 
    initialValues={{email:'',password:'' }}
    validationSchema={Yup.object({

        email:Yup.string()
        .email('Invalid email format')
        .required('Email is mandatory'),

        password:Yup.string()
        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,100}$/,'Must conatin one uppercase,one lowercase,one numeric and one special character and mus contain atleast 8 characters')
        .required('password is mandatory'),

        

    })}
    >
    <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow">
                    <Form>
                       
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" id="email" className='form-control' />
                            <ErrorMessage name="email">
                                {msg =><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" id="password" className='form-control' />
                            <ErrorMessage name="password">
                                {msg =><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </Formik>
    
    </>
  )
}

export default Login
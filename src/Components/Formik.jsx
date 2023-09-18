import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
const Formik = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        // validate:(values)=>{
        //       let error = {}
        //       if (!values.firstName) {
        //         error.firstName = 'Required'
        //       }
        //       if (!values.lastName) {
        //         error.lastName = 'Required'
        //       }
        //       if(!values.email){
        //         error.email = 'Required'
        //       }
        //      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         error.email = 'Invalid email address';
        //       }
           
        //       if(!values.password){
        //         error.password = 'Required'
        //       }

        //       return error;
        // }
        validationSchema: Yup.object({
            firstName: Yup.string().required('This field is required'),
            lastName: Yup.string().required('This field is required'),
            email: Yup.string().required('This field is required').email('email is invalid'),
            password: Yup.string().required('This field is required').max(15).min(4)
        })
    })
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="w-50 mx-auto mt-5">
                    <div className="form-floating mb-2">
                        <input type="text" placeholder='Enter your first name...' className='form-control' onChange={formik.handleChange} name='firstName' onBlur={formik.handleBlur}/>
                        <label htmlFor="" className="form-label">Enter your first name...</label>
                        <span>{formik.errors.firstName}</span>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" placeholder='Enter Todo' className='form-control' onChange={formik.handleChange} name='lastName' onBlur={formik.handleBlur}/>
                        <label htmlFor="" className="form-label">Enter your last name...</label>
                        <span>{formik.errors.lastName}</span>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="email" placeholder='Enter Todo' className='form-control' onChange={formik.handleChange} name='email' onBlur={formik.handleBlur}/>
                        <label htmlFor="" className="form-label">Enter your email</label>
                        <span>{formik.errors.email}</span>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" placeholder='Enter Todo' className='form-control' onChange={formik.handleChange} name='password' onBlur={formik.handleBlur}/>
                        <label htmlFor="" className="form-label">Enter your password</label>
                        <span>{formik.errors.password}</span>
                    </div>
                    <div className="text-center mt-3">
                        <button className='btn btn-success w-100' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Formik;

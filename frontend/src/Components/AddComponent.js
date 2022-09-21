import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const AddComponent = () => {

    const userSubmit = async (formdata) => {
        console.log(formdata);
        // 1. Url
        // 2. Request Method
        // 3. Data
        // 4. Data Format

        // to send request on backend - to connect frontend and backend.
        const response = await fetch('http://localhost:5000/comp/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log('user added');
            Swal.fire({
                icon: 'success',
                title: 'Well Done',
                text: 'Registered Successfuly'
            })
        }
    }

    return (
        <div>
<div className="container pt-5"></div>
        <div className="card " style={{ maxWidth: 500 }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <img
                        src="https://images.ctfassets.net/23aumh6u8s0i/3vCAkDy9os54mkVdD09lps/2b5386b4302f7ce38c4f6a69d6379dc0/reactjs"
                        alt="###imag"
                        className="img-fluid rounded-start"
                    style={{backgroud:"cover"}}
                    />
                </div>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        imports: "",
                        code: "",
                        createdBy: "some",
                        createdAt: new Date()

                    }}
                    onSubmit={userSubmit}>
                    {({ values, handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <label>Title</label>
                                    <input type="text" className='form-control' id="title" onChange={handleChange} value={values.title} />
                                    <label>Imports</label>
                                    <input type="text" className='form-control' id="imports" onChange={handleChange} value={values.imports} />
                                    <label>Description</label>
                                    <textarea type="text" className='form-control' id="description" onChange={handleChange} value={values.description} />


                                    <label>Code</label>
                                    <textarea type="text" className='form-control' id="code" onChange={handleChange} value={values.code} />
                                    <button type="submit" className='btn btn-primary mt-4 bg-secondary'>Submit</button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
        
    )
}

export default AddComponent;
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
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(response.status === 200){
            console.log('user added');
            Swal.fire({
                icon : 'success',
                title : 'Well Done',
                text : 'Registered Successfuly'
            })
        }
    }

  return (
    <div>
        <div className="container pt-5">
            <div className="card">
                <div className="card-body">
                    <Formik 
                    initialValues={{
                        title: '',
                        description: '',
                        imports: "",
                        code: "",
                        createdBy: "some",
                        createdAt : new Date()
                    }}
                    onSubmit={userSubmit}>
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                                <label>Title</label>
                                <input type="text" className='form-control' id="title" onChange={handleChange} value={values.title} />
                                <label>Description</label>
                                <input type="text-area" className='form-control' id="description" onChange={handleChange} value={values.description} />
                                <label>Imports</label>
                                <input type="text" className='form-control' id="imports" onChange={handleChange} value={values.imports} />
                                <label>Code</label>
                                <input type="text" className='form-control' id="code" onChange={handleChange} value={values.code} />
                            <button type="submit" className='btn btn-primary mt-4'>Submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddComponent;
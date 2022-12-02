import { Formik } from 'formik'
import React from 'react'

const Card = () => {
    return (
        <div>

            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                            alt="Trendy Pants and Shoes"
                            className="img-fluid rounded-start"
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
                                        <button type="submit" className='btn btn-primary mt-4'>Submit</button>
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

export default Card



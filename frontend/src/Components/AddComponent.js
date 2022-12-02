import { Formik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const AddComponent = () => {

    const [selImage, setSelImage] = useState("");

    const userSubmit = async (formdata) => {
        formdata.image = selImage;
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
                text: 'component added successfully'
            })
        }
    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setSelImage(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        console.log('uploading File ...');


        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then(async (res) => {
            console.log(res.status);



        });
    };

    return (
        <div>
            <div className="col-md-10 mx-auto">
                <div className="card mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div
                                style={{
                                    backgroundImage: 'url(https://i.pinimg.com/736x/e8/b9/aa/e8b9aa48b889d6d81670f10cd616cc4b--logo-s-corporate-design.jpg)',
                                    height: '100%',
                                    backgroundSize: 'cover'
                                }}
                            ></div>
                        </div>
                        <div className="col-md-7">
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

                                        <div className="col">
                                            <div className="card-body">
                                                <label>Title</label>
                                                <input type="text" className='form-control' id="title" onChange={handleChange} value={values.title} />
                                                <label>Imports</label>
                                                <input type="text" className="form-control" id="imports" onChange={handleChange} value={values.imports} />
                                                <label>Description</label>
                                                <textarea type="text" className='form-control' id="description" onChange={handleChange} value={values.description} />
                                                <label>Image</label>
                                                <input className='form-control' onChange={uploadFile} type="file" />

                                                <label>Code</label>
                                                <textarea type="text" className='form-control' id="code" onChange={handleChange} value={values.code} />
                                                <button type="submit" className='btn btn-primary mt-4 bg-primary'>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AddComponent;
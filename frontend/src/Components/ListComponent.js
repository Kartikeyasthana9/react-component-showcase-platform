import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ListComponent = () => {


    const [compList, setCompList] = useState([]);

    const getDataFromBackend = async () => {
        const response = await fetch('http://localhost:5000/comp/getall');
        const data = await response.json();
        console.log(data);
        setCompList(data);
    }
    const deleteUser = async (id) => {
        console.log(id);
        const response = await fetch('http://localhost:5000/comp/delete/' + id, { method: 'DELETE' })
        if (response.status === 200) {
            console.log('user deleted');
            toast.success('User Deleted 😒');
            getDataFromBackend()
        }
    }

    useEffect(() => {
        getDataFromBackend();
    }, [])

    const displayComponents = () => {
        return compList.map((component) => (
            <div class="col-md-3">
                <div class="card h-100">
                    <h3>{component.title}</h3>

                    <img src={"http://localhost:5000/" + component.image} class="card-img-top" alt="##" />
                    <div class="card-body">
                        <h6>Imports</h6>
                        <Link className='btn btn-link' to={"/viewer/" + component._id} >View</Link>
                        <button className='btn btn-outline-danger' onClick={() => { deleteUser(component._id) }}> <i className="fas fa-trash"></i> </button>
                    </div>
                </div>
            </div>
        ))

    }

    return (
        <div>


           
            {/* <div className="input-group">
                <div className="form-outline">
                    <input id="search-input" type="search" className="form-control" />
                    <label className="form-label" htmlFor="form1">
                        Search
                    </label>
                </div>
                <button id="search-button" type="button" className="btn btn-primary">
                    <i className="fas fa-search" />
                </button>
            </div> */}


            <div className='container-fluid'>
                <h1 className='text-center'> </h1>
                <div className="row">
                    <div className="col-md">

                        <div class="container text-center">
                            <div class="row row-cols-1 row-cols-md-4 g-4">
                                {displayComponents()}

                            </div> </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListComponent;
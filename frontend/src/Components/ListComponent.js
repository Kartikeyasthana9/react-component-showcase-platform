import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListComponent = () => {


    const [compList, setCompList] = useState([]);

    const getDataFromBackend = async () => {
        const response = await fetch('http://localhost:5000/comp/getall');
        const data = await response.json();
        console.log(data);
        setCompList(data);
    }

    useEffect(() => {
        getDataFromBackend();
    }, [])

    const displayComponents = () => {
        return compList.map((component) => (
            <div class="col-md-3">
                <div class="card h-100">
                    <h3>{component.title}</h3>
                    <img src="https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png" class="card-img-top" alt="##"height="200" />
                    <div class="card-body">

                        <p class="card-text">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit . "
                        </p>
                        <h6>Imports</h6>
                        <Link className='btn btn-link' to={"/viewer/" + component._id} >View</Link>
                    </div>
                </div>
            </div>
        ))

    }

    return (
        <div>
            <div className='container-fluid'>
                <h1 className='text-center'> List Component</h1>
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
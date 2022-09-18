import React, { useEffect, useState } from 'react'

const ListComponent = () => {


    const [compList, setCompList] = useState([]);

    const getDataFromBackend = async () => {
        const response = await fetch('http://localhost:5000/user/getall');
        const data = await response.json();
        console.log(data);
        setCompList(data);
    }

    useEffect(() => {
        getDataFromBackend();
    }, [])

    const displayComponents = () => {
        return compList.map((component) => (
            <div className='card'>
                <div className="card-body">
                    {component.title}

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
                        {displayComponents()}

                        <div class="container text-center">
                            <div class="row row-cols-1 row-cols-md-4 g-4">
                                <div class="col">
                                    <div class="card h-100">
                                        <h4 class="card-title">Card title</h4>
                                        <img src="https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png" class="card-img-top" alt="##" />
                                        <div class="card-body">

                                            <p class="card-text">
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.. "
                                            </p>
                                            <h6>Imports</h6>

                                        </div>
                                    </div>
                                </div> </div> </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListComponent;
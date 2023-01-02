import React, { useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import imgreact from "./images/react.png";

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
    const response = await fetch("http://localhost:5000/comp/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("user added");
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "component added successfully",
      });
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    console.log("uploading File ...");

    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then(async (res) => {
      console.log(res.status);
    });
  };

  return (
    <div>
      <header style={{ background: "#a6a4a4" }}>
        <div className="container">
          <p className="display-4 text-center fw-bold text-white ">
            Create New Component
          </p>

          <div class="header-text-box">
            <p class="text-center fw-bold">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div>
            <img
              src="https://www.nicepng.com/png/full/31-315310_react-hexagon-react-js-transparent-background.png"
              className="img-fluid animate__animated animate__fadeInRight"
              width="400"
              height="210"
              alt="Photo"
            />
          </div>
        </div>
      </header>

      {/* /////////////////////////////////////// */}
      <div style={{ background: "#843d34a8" }}>
        <div className="container p-5 ">

        <div className="card w-80 ">
          <div className="card-body ">
            <div className="">
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  imports: "",
                  code: "",
                  createdBy: "some",
                  createdAt: new Date(),
                }}
                onSubmit={userSubmit}
              >
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      onChange={handleChange}
                      value={values.title}
                    />
                    <label>Imports</label>
                    <input
                      type="text"
                      className="form-control"
                      id="imports"
                      onChange={handleChange}
                      value={values.imports}
                    />
                    <label>Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="description"
                      onChange={handleChange}
                      value={values.description}
                    />
                    <label>Image</label>
                    <input
                      className="form-control"
                      onChange={uploadFile}
                      type="file"
                    />

                    <label>Code</label>
                    <textarea
                      multiline
                      rows={10}
                      size="80 "
                      type="text"
                      className="form-control"
                      id="code"
                      onChange={handleChange}
                      value={values.code}
                      placeholder="Write your Program..."
                    />
                    <button
                      type="submit"
                      className="btn btn-primary mt-4 bg-dark"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddComponent;

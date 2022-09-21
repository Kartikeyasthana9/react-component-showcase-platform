import { Formik } from 'formik';
import React from 'react'


const Login = () => {

  // 1. submit fuction
  const loginSubmit = (formdata) => {
    console.log(formdata);
  }

  // 2. locate/create the form tag
  // 3. use Formik on form tag
  return (
    <section className="vh-100" style={{ backgroundImage: "url(https://community-cdn-digitalocean-com.global.ssl.fastly.net/gbM2MfLujKBL6hhhdbEzu8v8)"}}>
      <div className="container pt-5 h-100">
        <div className="row g-0 ">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "2rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://nextbigtechnology.com/wp-content/uploads/2020/03/2-4.jpg"
                    alt="login form"
                    className="img-fluid" 
                    // style={{  borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit}>
                      {
                        ({ values, handleSubmit, handleChange }) => (

                          <form onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="40" />
                              <span className="h2 fw-bold mb-0">React Component ShowCase Platform </span>
                            </div>
                            <h5
                              className="fw-normal mb-3 pb-3"
                              style={{ letterSpacing: 1 }}
                            >
                              Sign into your account
                            </h5>
                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="form3Example3cg">
                                Email Address
                              </label>
                            </div>
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="form2Example17">
                                Password
                              </label>
                            </div>
                            <div className="pt-1 mb-4">
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                type="submit"
                              >
                                Login
                              </button>
                            </div>
                            <a className="small text-muted" href="#!">
                              Forgot password?
                            </a>
                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                              Don't have an account?{" "}
                              <a href="#!" style={{ color: "#393f81" }}>
                                Register here
                              </a>
                            </p>
                            <a href="#!" className="small text-muted">
                              Terms of use.
                            </a>
                            <a href="#!" className="small text-muted">
                              Privacy policy
                            </a>
                          </form>
                        )


                      }

                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Login